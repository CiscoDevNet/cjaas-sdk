import base64
import hashlib
import hmac
from argparse import ArgumentParser
from datetime import datetime, timedelta


def parse_command_line_args():
    arg_parser = ArgumentParser()
    arg_parser.add_argument("--tenant_key", required=False, default="x",
                            help="Tenant Key for Auth")
    arg_parser.add_argument("--tenant", required=False, default="123",
                            help="Tenant Id for Auth")
    arg_parser.add_argument("--org", required=False, default="456",
                            help="Org Id for Auth")
    arg_parser.add_argument("--service", required=False, default="datasink",
                            help="what service this token gives access to")
    arg_parser.add_argument("--permission", required=False, default="Read",
                            help="What permissions this token authorizes")
    arg_parser.add_argument("--key_name", required=False, default="orc",
                            help="Name of the Key in case of multiple keys for tenant")
    arg_parser.add_argument("--validity_days", required=False, default=1,
                            help="Number of Days this token should be valid for", type=int)
    arg_parser.add_argument("--validity_hours", required=False, default=1,
                            help="Number of Hours this token should be valid for", type=int)
    return arg_parser.parse_args()


class generate_saas_token:

    @classmethod
    def generate_token(cls, param):
        # print('Args passed in to the code: {}'.format(param))
        if param.validity_days == 0 and param.validity_hours == 0:
            raise ValueError("Both validityDays and validityHours can't be 0")
        valid_until = (datetime.utcnow() + timedelta(days=param.validity_days) + timedelta(
            hours=param.validity_hours)).isoformat(timespec='milliseconds')
        token = "st=" + param.tenant + "&so=" + param.org + "&ss=" + param.service + \
                "&sp=" + param.permission + "&se=" + \
            valid_until + "Z&sk=" + param.key_name
        message = bytes(token, 'utf-8')
        secret = bytes(param.tenant_key, 'utf-8')
        signature = base64.b64encode(
            hmac.new(secret, message, digestmod=hashlib.sha256).digest())
        result = "SharedAccessSignature " + token + "&sig=" + signature.decode("utf-8")
        print(result)
        return result


if __name__ == "__main__":
    generate_saas_token.generate_token((parse_command_line_args()))

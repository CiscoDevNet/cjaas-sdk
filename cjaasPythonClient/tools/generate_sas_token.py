import base64
import hashlib
import hmac
from argparse import ArgumentParser
from datetime import datetime, timedelta


def parse_command_line_args():
    arg_parser = ArgumentParser()
    arg_parser.add_argument("--secret", required=False, default="x",
                            help="secret: your secret key")
    arg_parser.add_argument("--o", required=False, default="123",
                            help="organization: organization")
    arg_parser.add_argument("--n", required=False, default="456",
                            help="namespace: customer namespace")
    arg_parser.add_argument("--s", required=False, default="ds",
                            help="service: particular service to be queried")
    arg_parser.add_argument("--p", required=False, default="r",
                            help="permissions: one of the following (r|w|rw)")
    arg_parser.add_argument("--kn", required=False, default="orc",
                            help="keyname: key name")
    arg_parser.add_argument("--vd", required=False, default=365,
                            help="validitydays: expire in this number of days", type=int)
    arg_parser.add_argument("--vh", required=False, default=1,
                            help="validityhours:expire in this number of hours", type=int)
    return arg_parser.parse_args()


class generate_saas_token:

    @classmethod
    def generate_token(cls, param):
        # print('Args passed in to the code: {}'.format(param))
        if param.vd == 0 and param.vh == 0:
            raise ValueError("Both validityDays and validityHours can't be 0")
        valid_until = (datetime.utcnow() + timedelta(days=param.vd) + timedelta(
            hours=param.vh)).isoformat(timespec='milliseconds')
        token = "so=" + param.o + "&sn=" + param.n + "&ss=" + param.s + \
                "&sp=" + param.p + "&se=" + \
            valid_until + "Z&sk=" + param.kn
        message = bytes(token, 'utf-8')
        secret = bytes(param.secret, 'utf-8')
        signature = base64.b64encode(
            hmac.new(secret, message, digestmod=hashlib.sha256).digest())
        result = "SharedAccessSignature " + token + \
            "&sig=" + signature.decode("utf-8")
        print('\n' + result)
        return result


if __name__ == "__main__":
    generate_saas_token.generate_token((parse_command_line_args()))

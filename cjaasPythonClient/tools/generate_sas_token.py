import base64
import hashlib
import hmac
import urllib.parse
from argparse import ArgumentParser
from datetime import datetime, timedelta

services = (
        ["profile", "r", "profileReadToken"],
        ["profile", "w", "profileWriteToken"],
        ["stream", "r", "streamToken"],
        ["tape", "r", "tapeToken"],
        ["ds", "w", "datasinkWriteToken"],
        ["idmt", "r", "identityReadToken"],
        ["idmt", "w", "identityWriteToken"],
        ["action", "w", "actionWriteToken"],
        ["action", "r", "actionReadToken"],
        ["account", "r", "accountReadToken"],
)

services_for_gadget = ("profile", "stream", "tape", "idmt")


def parse_command_line_args():
    arg_parser = ArgumentParser()
    arg_parser.add_argument("--secret", required=True, default=None,
                            help="secret: your secret key")
    arg_parser.add_argument("--o", required=False, default="123",
                            help="organization: organization")
    arg_parser.add_argument("--n", required=False, default="456",
                            help="namespace: customer namespace")
    arg_parser.add_argument("--s", required=False, default=None,
                            help="service: particular service to be queried")
    arg_parser.add_argument("--p", required=False, default=None,
                            help="permissions: one of the following (r|w|rw)")
    arg_parser.add_argument("--kn", required=False, default="orc",
                            help="keyname: key name")
    arg_parser.add_argument("--vd", required=False, default=365,
                            help="validitydays: expire in this number of days", type=int)
    arg_parser.add_argument("--vh", required=False, default=1,
                            help="validityhours:expire in this number of hours", type=int)
    arg_parser.add_argument("--g", required=False, default=False,
                            help="for-gadget will generate query string for Customer Journey Gadget", type=bool)
    return arg_parser.parse_args()

def generate_signature(token, param_secret):
    message = bytes(token, 'utf-8')
    secret = bytes(param_secret, 'utf-8')
    signature = base64.b64encode(
        hmac.new(secret, message, digestmod=hashlib.sha256).digest())
    result = token + \
        "&sig=" + urllib.parse.quote_plus(signature.decode("utf-8"))
    
    return result


class generate_saas_token:

    @classmethod
    def generate_token(cls, param):
        # print('Args passed in to the code: {}'.format(param))
        if param.secret == None:
            print('\n Missing secret to generate SAS Tokens')
            return
        if param.vd == 0 and param.vh == 0:
            raise ValueError("Both validityDays and validityHours can't be 0")
        valid_until = (datetime.utcnow() + timedelta(days=param.vd) + timedelta(
            hours=param.vh)).isoformat(timespec='milliseconds')

        if param.s == None or param.p == None:
            query_string = []
            for x in services:
                token= "so=" + param.o + "&sn=" + param.n + "&ss=" + x[0] + \
                    "&sp=" + x[1] + "&se=" + \
                    valid_until + "Z&sk=" + param.kn

                result = generate_signature(token, param.secret)
                print('\n-----------------------------------SAS Token for ' + x[0] + ' with '+ x[1] + ' permission------------------------')
                print('\nSharedAccessSignature ' + result)
                if x[0] in services_for_gadget:
                    query_string.append([x[2], result])
                
            if param.g == True:
                query = '?'
                index = 0
                for tup in query_string:
                    query += tup[0]  + '=' + urllib.parse.quote_plus(tup[1])
                    index += 1
                    if index != len(query_string):
                        query += '&' 
                print('\n-----------------------------------Query String for Customer Journey Gadget------------------------')
                print('\n' + query)
        else:
            token = "so=" + param.o + "&sn=" + param.n + "&ss=" + param.s + \
                "&sp=" + param.p + "&se=" + \
                valid_until + "Z&sk=" + param.kn
            result = generate_signature(token, param.secret)
            print('\n-----------------------------------SAS Token for ' + param.s + ' with '+ param.p + ' permission------------------------')
            print('\nSharedAccessSignature ' + result)

        return result

if __name__ == "__main__":
    generate_saas_token.generate_token((parse_command_line_args()))

'use strict';
const { ArgumentParser } = require('../swagger-generated/node_modules/argparse');
const { version } = require('../swagger-generated/package.json');
const crypto = require('crypto')
 
function generateExpiration(args){
  var validitySum = 0;
  validitySum += parseInt(args['vd']) ? args['vd']*60*60*24 : 0;
  validitySum += parseInt(args['vh']) ? args['vh']*60*60 : 0;
  
  if(validitySum === 0){
    //default 1 week
    validitySum = 60*60*24*7;
  }

  var now = new Date(); 
  return Math.round(now.getTime()) + (validitySum*1000);
}

function verifyArguments(args){
  const parser = new ArgumentParser({
    description: 'SAS Token Generator!'
  });
  
  parser.add_argument('-v', '--version', { action: 'version', version });
  parser.add_argument('-secret', {help: 'secret: your secret key'});
  parser.add_argument('-t', {help: 'tenant: tenant'});
  parser.add_argument('-n', {help: 'namespace: customer namespace/org'});
  parser.add_argument('-s', {help: 'service: particular service to be queried'});
  parser.add_argument('-p', {help: 'permissions: one of the following (r|w|rw)'});
  parser.add_argument('-kn', {help: 'keyname: key name'});
  parser.add_argument('-vd', {help: 'validitydays: expire in this number of days'});
  parser.add_argument('-vh', {help: 'validityhours:expire in this number of hours'});
  
  var args = parser.parse_args();

  if(!args['secret']){
    throw '-secret argument missing!';
  }
  if(!args['t']){
    throw '-t argument missing!';
  }
  if(!args['n']){
    throw '-n argument missing!';
  }
  if(!args['s']){
    throw '-s argument missing!';
  }
  if(!args['p']){
    throw '-p argument missing!';
  }
  if(!args['kn']){
    throw '-kn argument missing!';
  }

  return args;
}

function generateSasToken(args) { 
  var secret = args['secret'];
  var tenant = args['t'];
  var namespace = args['n'];
  var service = args['s'];
  var permissions = args['p'];
  var keyName = args['kn'];
  var expiration = new Date(generateExpiration(args)).toISOString();
  var sasTokenPrefix = `st=${tenant}&so=${namespace}&ss=${service}&sp=${permissions}&se=${expiration}&sk=${keyName}`;
  var signature = crypto.createHmac('sha256', secret).update(sasTokenPrefix).digest('base64'); 
  return `SharedAccessSignature ${sasTokenPrefix}&sig=${signature}`; 
}

/* Begin */
try {
  var verifiedArguments = verifyArguments();
  var sasToken = generateSasToken(verifiedArguments);
  console.log('\n-- SUCCESS --')
  console.log(sasToken);
} catch(err) {
  console.log('\n-- ERROR --')
  console.log(err);
}

console.log('\n');
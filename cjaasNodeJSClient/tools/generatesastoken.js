"use strict";
const { ArgumentParser } = require("../apis/node_modules/argparse");
const { version } = require("../apis/package.json");
const crypto = require("crypto");

const services = [
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
];

const servicesForGadget = ["profile", "stream", "tape", "idmt"];

function generateExpiration(args) {
  var validitySum = 0;
  validitySum += parseInt(args["vd"]) ? args["vd"] * 60 * 60 * 24 : 0;
  validitySum += parseInt(args["vh"]) ? args["vh"] * 60 * 60 : 0;

  if (validitySum === 0) {
    //default 1 week
    validitySum = 60 * 60 * 24 * 7;
  }

  var now = new Date();
  return Math.round(now.getTime()) + validitySum * 1000;
}

function verifyArguments() {
  const parser = new ArgumentParser({
    description: "SAS Token Generator!",
  });

  parser.add_argument("-v", "--version", { action: "version", version });
  parser.add_argument("-secret", { help: "secret: your secret key" });
  parser.add_argument("-o", { help: "organization: organization" });
  parser.add_argument("-n", { help: "namespace: customer namespace" });
  parser.add_argument("-s", {
    help: "service: particular service to be queried",
  });
  parser.add_argument("-p", {
    help: "permissions: one of the following (r|w|rw)",
  });
  parser.add_argument("-kn", { help: "keyname: key name" });
  parser.add_argument("-vd", {
    help: "validitydays: expire in this number of days",
  });
  parser.add_argument("-vh", {
    help: "validityhours:expire in this number of hours",
  });
  parser.add_argument("-a", {
    help: "generate all tokens for JDS",
    action: "store_true",
  });
  parser.add_argument("-g", {
    help: "generate query string for Customer Journey Finesse Gadget",
    action: "store_true",
  });

  var args = parser.parse_args();

  if (!args["secret"]) {
    throw new Error("-secret argument missing!");
  }
  if (!args["o"]) {
    throw new Error("-o argument missing!");
  }
  if (!args["n"]) {
    throw new Error("-n argument missing!");
  }
  if (!args["s"] && !args["a"] && !args["g"]) {
    throw new Error("-s argument missing!");
  }
  if (!args["p"] && !args["a"] && !args["g"]) {
    throw new Error("-p argument missing!");
  }
  if (!args["kn"]) {
    throw new Error("-kn argument missing!");
  }

  return args;
}
function generateSignature(secret, message) {
  return encodeURIComponent(
    crypto.createHmac("sha256", secret).update(message).digest("base64"),
  );
}

function generateQueryString(queryStringArray) {
  let queryString = "?";

  queryStringArray.forEach((listItem, i) => {
    queryString += `${listItem[0]}=${encodeURIComponent(listItem[1])}${
      i === queryStringArray.length - 1 ? "" : "&"
    }`;
  });

  return queryString;
}

function generateSasToken(
  secret,
  organization,
  namespace,
  service,
  permission,
  keyName,
  expiration,
) {
  var sasTokenPrefix = `so=${organization}&sn=${namespace}&ss=${service}&sp=${permission}&se=${expiration}&sk=${keyName}`;

  const signature = generateSignature(secret, sasTokenPrefix);

  return `${sasTokenPrefix}&sig=${signature}`;
}

function generateSasTokens(args) {
  var secret = args["secret"];
  var organization = args["o"];
  var namespace = args["n"];
  var service = args["s"];
  var permission = args["p"];
  var keyName = args["kn"];
  var expiration = new Date(generateExpiration(args)).toISOString();

  if (args["a"] || args["g"]) {
    const queryStringArray = [];
    services.forEach((serviceCombination) => {
      const _service = serviceCombination[0];

      const _permission = serviceCombination[1];

      const token = generateSasToken(
        secret,
        organization,
        namespace,
        _service,
        _permission,
        keyName,
        expiration,
      );

      if (args["a"]) {
        console.log(
          `\n======================SAS Token for ${_service} with ${_permission} permission=======================================`,
        );
        console.log(`SharedAccessSignature ${token}`);
      }

      if (
        args["g"] &&
        servicesForGadget.indexOf(serviceCombination[0]) !== -1
      ) {
        queryStringArray.push([serviceCombination[2], token]);
      }
    });

    if (args["g"]) {
      const queryString = generateQueryString(queryStringArray);
      console.log(
        `\n======================Query String for Customer Journey Finesse Gadget=======================================`,
      );
      console.log(queryString);
    }
  } else {
    const token = generateSasToken(
      secret,
      organization,
      namespace,
      service,
      permission,
      keyName,
      expiration,
    );
    return `SharedAccessSignature ${token}`;
  }
}

/* Begin */
try {
  var verifiedArguments = verifyArguments();
  generateSasTokens(verifiedArguments);
} catch (err) {
  console.log("\n-- ERROR --");
  console.log(err);
}

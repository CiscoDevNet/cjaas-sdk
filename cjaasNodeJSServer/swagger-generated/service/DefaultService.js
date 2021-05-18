'use strict';


/**
 * Delete All Events Collected within Namespace(i.e Org)
 * Delete All Events Collected for Org
 *
 * authorization String SAS Signature
 * returns String
 **/
exports.clearTape = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Events Collected on Specific Person
 * Delete Events on Specific Person
 *
 * authorization String SAS Signature
 * person String Unique Person ID to filter by
 * returns String
 **/
exports.clearTapeByPerson = function(authorization,person) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications
 * Data Ingestion is based on Cloud Events specification for describing event data in a common way. Data Sink accepts data in the form of POST or GET with support for both Header based authorization and as-well via Query string
 *
 * sig String SAS Signature within QueryString
 * data String CloudEvent Serialized as Base64 UTF8 String
 * no response value expected for this operation
 **/
exports.dataSinkGet = function(sig,data) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums
 * Tape is a append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models
 *
 * authorization String SAS Signature
 * $filter String oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart' (optional)
 * $top Integer Limit to return latest x events (optional)
 * returns List
 **/
exports.journeys = function(authorization,$filter,$top) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "specVersion" : "specVersion",
  "previously" : "previously",
  "data" : "data",
  "person" : "person",
  "source" : "source",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "time" : "2000-01-23T04:56:07.000+00:00",
  "type" : "type",
  "dataContentType" : "dataContentType"
}, {
  "specVersion" : "specVersion",
  "previously" : "previously",
  "data" : "data",
  "person" : "person",
  "source" : "source",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "time" : "2000-01-23T04:56:07.000+00:00",
  "type" : "type",
  "dataContentType" : "dataContentType"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums
 * Tape is a append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models
 *
 * authorization String SAS Signature
 * person String Unique Person ID to filter by
 * $filter String oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart' (optional)
 * $top Integer Limit to return latest x events (optional)
 * returns List
 **/
exports.journeysByPerson = function(authorization,person,$filter,$top) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "specVersion" : "specVersion",
  "previously" : "previously",
  "data" : "data",
  "person" : "person",
  "source" : "source",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "time" : "2000-01-23T04:56:07.000+00:00",
  "type" : "type",
  "dataContentType" : "dataContentType"
}, {
  "specVersion" : "specVersion",
  "previously" : "previously",
  "data" : "data",
  "person" : "person",
  "source" : "source",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "time" : "2000-01-23T04:56:07.000+00:00",
  "type" : "type",
  "dataContentType" : "dataContentType"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create or Rotate or Delete a Specific Key
 * With Shared Access Signatures API consumers get choice of granular control on how to access API(paths), which resources to scope(ex:datasink), with what permissions the request needs(read / write), from which  source (ex: website) and how long(10s to 10 years) among many other parameters.
 *
 * authorization String SAS Signature
 * operation String Key Operation Type: list or create or rotate
 * id String Unique Key name as set
 * returns String
 **/
exports.keys = function(authorization,operation,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * CJaaS APIs are designed to be accessed with Shared Access Signature(SAS) to resources without transmitting any actual sensitive keys(hello! API Keys) or even exchanging a password for a proxy such as oAuth bearer
 * With Shared Access Signatures API consumers get choice of granular control on how to access API(paths), which resources to scope(ex:datasink), with what permissions the request needs(read / write), from which  source (ex: website) and how long(10s to 10 years) among many other parameters.
 *
 * authorization String SAS Signature
 * id String Unique Key name to delete
 * returns String
 **/
exports.keysDelete = function(authorization,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List All SAS Keys
 * With Shared Access Signatures API consumers get choice of granular control on how to access API(paths), which resources to scope(ex:datasink), with what permissions the request needs(read / write), from which  source (ex: website) and how long(10s to 10 years) among many other parameters.
 *
 * authorization String SAS Signature
 * returns String
 **/
exports.keysList = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Trigger a Online Orchestration such as Webex Walkin or Display Offer Or Chat Bot to intercept and modify your Customer's Journey Midway
 * Trigger a Online Orchestration such as Webex Walkin or Display Offer Or Chat Bot to modify your Customer's Journey Midway
 *
 * body OnlineOrchestration 
 * sig String Optional SAS Signature within QueryString (optional)
 * person String Unique Person ID to filter by
 * authorization String Optional SAS Signature within Header (optional)
 * returns String
 **/
exports.onlineOrchestrationTrigger = function(body,sig,person,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination
 * Optionally accepts $filter to slice/dice further (ex: type eq 'Add to Cart')
 *
 * sig String Optional SAS Signature within QueryString (optional)
 * authorization String Optional SAS Signature within Header (optional)
 * returns String
 **/
exports.realTimeSSE = function(sig,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination
 * Optionally accepts $filter to slice/dice further (ex: type eq 'Add to Cart')
 *
 * person String Unique Person ID to filter by
 * sig String Optional SAS Signature within QueryString (optional)
 * authorization String Optional SAS Signature within Header (optional)
 * returns String
 **/
exports.realTimeSSEPerson = function(person,sig,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints
 * Update, get data retention, destinations and more
 *
 * authorization String SAS Signature
 * returns accountSettings
 **/
exports.settings = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "webexTokenIssuer" : "webexTokenIssuer",
  "destinationSubscriptions" : [ "destinationSubscriptions", "destinationSubscriptions" ],
  "webexTokenIssuerSecret" : "webexTokenIssuerSecret",
  "dataRetentionDays" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints
 * Update, get data retention, destinations and more
 *
 * body AccountSettings 
 * authorization String SAS Signature
 * returns accountSettings
 **/
exports.updateSettings = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "webexTokenIssuer" : "webexTokenIssuer",
  "destinationSubscriptions" : [ "destinationSubscriptions", "destinationSubscriptions" ],
  "webexTokenIssuerSecret" : "webexTokenIssuerSecret",
  "dataRetentionDays" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * SSE Channel for Webex Walkin Orchestration to Modify Journeys Midway
 * Major browsers offer built-in class EventSource, with the EventSource object API consumers can automatically establishes a persistent connection and transparently allow for automatic reconnects with tunable retry timeout & Message ids to resume events.
 *
 * person String Unique Person ID to filter by
 * sig String Optional SAS Signature within QueryString (optional)
 * authorization String Optional SAS Signature within Header (optional)
 * returns String
 **/
exports.webexWalkinSSE = function(person,sig,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


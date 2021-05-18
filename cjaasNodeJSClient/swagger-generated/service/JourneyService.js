'use strict';


/**
 * Post Events
 * API accepts events that describe what occurred - when - by whom on every interaction across touch points and applications. Data Ingestion is based on Cloud Events specification for describing event data in a common way. API accepts data in the form of POST with support for Header based authorization.
 *
 * body CloudEvent 
 * authorization String SAS Signature.
 * no response value expected for this operation
 **/
exports.events = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Journeys are built around a concept of Identity. An identity shapes how Journey is connected together. Get Identity by Id.
 * Journeys are built around a concept of Identity. An identity shapes how Journey is connected together. Retrieve Identity of an individual by their ID.
 *
 * authorization String SAS Signature.
 * id String Unique Person ID to retrieve data.
 * returns String
 **/
exports.identities = function(authorization,id) {
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
 * Tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape
 * Every event in the Journey has an Identity of the originating individual, different channels can have their own unique Identities, API consumers can tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape. Once aliased, all duplicates are treated as a single Identity for any purpose (Query or View).
 *
 * body IdentityAliases 
 * id String Unique Person ID to apply action/query upon.
 * authorization String SAS Signature.
 * returns String
 **/
exports.identitiesAlias = function(body,id,authorization) {
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
 * Delete a Identity
 * Remove a soft merge.
 *
 * authorization String SAS Signature.
 * id String Unique Person ID to clear data.
 * returns String
 **/
exports.identitiesDelete = function(authorization,id) {
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
 * A Profile is a bespoke view of a customer's journey.
 * The profile view is created based on a view template that is provided as input.    **Sample request**: *GET /v1/journey/profileview?customer=123XX*    {    &nbsp;&nbsp;&nbsp;&nbsp;\"Name\": \"Test Template 2\",    &nbsp;&nbsp;&nbsp;&nbsp;\"DatapointCount\": 7,    &nbsp;&nbsp;&nbsp;&nbsp;\"Attributes\": [{    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Version\": \"0.1\",    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Event\": \"Add to Cart\",    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Metadata\": \"sku\",    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Limit\": 3,    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"DisplayName\": \"Items added\",    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"Verbose\": false,    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"AggregationMode\": \"Value\"    &nbsp;&nbsp;&nbsp;&nbsp;}]    }.
 *
 * body ProfileViewBuilderTemplate 
 * personId String Identifies the person for whom the profile view is requested.
 * authorization String SAS Signature.
 * returns profileViewQueryResponse
 **/
exports.profileBuilder = function(body,personId,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "attributeView" : [ {
    "result" : "result",
    "queryTemplate" : {
      "metadata" : "metadata",
      "displayName" : "displayName",
      "limit" : 0,
      "event" : "event",
      "version" : "version",
      "aggregationMode" : "aggregationMode",
      "verbose" : true
    },
    "journeyEvents" : "journeyEvents"
  }, {
    "result" : "result",
    "queryTemplate" : {
      "metadata" : "metadata",
      "displayName" : "displayName",
      "limit" : 0,
      "event" : "event",
      "version" : "version",
      "aggregationMode" : "aggregationMode",
      "verbose" : true
    },
    "journeyEvents" : "journeyEvents"
  } ],
  "name" : "name",
  "customerId" : "customerId",
  "generatedAt" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


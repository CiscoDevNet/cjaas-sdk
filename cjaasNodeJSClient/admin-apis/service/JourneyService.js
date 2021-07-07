'use strict';


/**
 * Create or Update an Alias
 * Every event in the Journey has an Identity of the originating individual, different channels can have their own unique Identities, API consumers can tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape. Once aliased, all duplicates are treated as a single Identity for any purpose (Query or View).  SAS Token Requirements:  - ss=idmt  - sp=w
 *
 * body IdentityAliasesRequestBody 
 * id String Identity identifier to apply action/query upon.
 * authorization String SAS Signature.
 * returns httpSimpleMessageObjectResponse
 **/
exports.createOrUpdateAnAlias = function(body,id,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "message" : "message"
  },
  "meta" : {
    "orgId" : "orgId"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Identity
 * Deletes a specific Identity using provided ID.  SAS Token Requirements:  - ss=idmt  - sp=w
 *
 * authorization String SAS Signature
 * id String Unique Identity ID to retrieve data.
 * returns httpSimpleMessageObjectResponse
 **/
exports.deleteIdentity = function(authorization,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "message" : "message"
  },
  "meta" : {
    "orgId" : "orgId"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Identity Aliases
 * Delete an Identity's Aliases.  SAS Token Requirements:  - ss=idmt  - sp=w
 *
 * authorization String SAS Signature.
 * id String Unique Identity ID to retrieve data.
 * returns String
 **/
exports.deleteIdentityAliases = function(authorization,id) {
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
 * Get Identity By Id
 * Journeys are built around a concept of Identity. An Identity shapes how a Journey is connected together. Retrieve an Identity of an individual by providing their ID.  SAS Token Requirements:  - ss=idmt  - sp=r
 *
 * authorization String SAS Signature
 * id String Unique Identity ID to retrieve data.
 * returns httpGenericObjectResponse_identityById
 **/
exports.getIdentityById = function(authorization,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "aliases" : [ "aliases", "aliases" ],
    "lastSeen" : { },
    "organization" : "organization",
    "namespace" : "namespace",
    "personId" : "personId",
    "id" : "id"
  },
  "meta" : {
    "orgId" : "orgId"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Identities
 * Journeys are built around a concept of Identity. An Identity shapes how a Journey is connected together. Get all identities.  SAS Token Requirements:  - ss=idmt  - sp=r
 *
 * authorization String SAS Signature
 * returns httpGenericListObjectResponse_identity
 **/
exports.listIdentities = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "aliases" : [ "aliases", "aliases" ],
    "organization" : "organization",
    "namespace" : "namespace",
    "personId" : "personId",
    "id" : "id"
  }, {
    "aliases" : [ "aliases", "aliases" ],
    "organization" : "organization",
    "namespace" : "namespace",
    "personId" : "personId",
    "id" : "id"
  } ],
  "meta" : {
    "orgId" : "orgId"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


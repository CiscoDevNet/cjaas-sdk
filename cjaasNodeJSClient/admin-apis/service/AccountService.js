'use strict';


/**
 * Create App
 * Create an application for a particular organization.
 *
 * authorization String Common Identity Bearer Token Prefix token with 'Bearer '
 * returns httpGenericObjectResponse_createApp
 **/
exports.createApp = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "secretkey" : "secretkey",
    "namespace" : "namespace",
    "expiration" : "2000-01-23T04:56:07.000+00:00"
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
 * Delete App
 * Delete an application from a particular organization.
 *
 * authorization String Cisco CI Bearer Token Prefix token with 'Bearer '
 * returns httpSimpleMessageObjectResponse
 **/
exports.deleteApp = function(authorization) {
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
 * List Apps
 * Lists Apps for a particular organization.
 *
 * authorization String Cisco CI Bearer Token Prefix token with 'Bearer '
 * returns httpGenericListObjectResponse_appsDocumentSwagger
 **/
exports.listApps = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "organization" : "organization",
    "namespace" : "namespace",
    "name" : "name",
    "modifiedDate" : "modifiedDate",
    "description" : "description",
    "expiration" : "expiration",
    "id" : "id",
    "creationDate" : "creationDate"
  }, {
    "organization" : "organization",
    "namespace" : "namespace",
    "name" : "name",
    "modifiedDate" : "modifiedDate",
    "description" : "description",
    "expiration" : "expiration",
    "id" : "id",
    "creationDate" : "creationDate"
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


/**
 * Rotate App Key
 * Rotates a secret key for a particular application.
 *
 * authorization String Cisco CI Bearer Token Prefix token with 'Bearer '
 * returns httpGenericObjectResponse_createApp
 **/
exports.rotateAppKey = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "secretkey" : "secretkey",
    "namespace" : "namespace",
    "expiration" : "2000-01-23T04:56:07.000+00:00"
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
 * Update App Attributes
 * Updates an Apps Attributes
 *
 * authorization String Common Identity Bearer Token
 * returns httpSimpleMessageObjectResponse
 **/
exports.updateAppAttributes = function(authorization) {
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


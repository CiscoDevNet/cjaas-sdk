'use strict';


/**
 * Create/Replace Journey Action.
 * Create/Replace Journey Action.   SAS Token Requirements:  - ss=action  - sp=w
 *
 * body JourneyAction 
 * authorization String SAS Signature
 * returns httpSimpleMessageObjectResponse
 **/
exports.createJourneyAction = function(body,authorization) {
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
 * Create Profile View Template
 * Create Profile View Template.   SAS Token Requirements:  - ss=profile  - sp=w
 *
 * body ProfileViewTemplateCreateModel 
 * authorization String SAS Signature.
 * returns httpSimpleMessageObjectResponse
 **/
exports.createProfileViewTemplate = function(body,authorization) {
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
 * Starts job to generate Progressive Profile View for a person.
 * Starts job to generate Progressive Profile View for a person. The HTTP response is intended to be compatible with the Polling Consumer Pattern.   SAS Token Requirements:  - ss=profile  - p=w
 *
 * authorization String SAS Signature.
 * viewId String identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization.
 * personId String identifies the Person, for which the Profile View needs to be created. (optional)
 * searchFilter String OData Filter expressions that will be used to search tapes. Example: type eq 'Add To Cart' (optional)
 * skipCache Boolean If set to true, will indicate to not return any existing cached Profile View (default: false) (optional)
 * xCACHEMAXAGEHOUR Integer Controls the maximum age (in hours) of an existing cached view, that the API can return for this request. Default (0) (optional)
 * xCACHEMAXAGEMIN Integer Controls the maximum age (in hours) of an existing cached view, that the API can return for this request. Default (15) (optional)
 * returns createProgressiveProfileViewJobResponseModel
 **/
exports.createView = function(authorization,viewId,personId,searchFilter,skipCache,xCACHEMAXAGEHOUR,xCACHEMAXAGEMIN) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "getUriStatusQuery" : "getUriStatusQuery",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Soft delete Journey Action.
 * Soft delete Journey Action.   SAS Token Requirements:  - ss=action  - sp=w
 *
 * authorization String SAS Signature.
 * id String Identifies a specific Journey Action.
 * returns httpSimpleMessageObjectResponse
 **/
exports.deleteJourneyAction = function(authorization,id) {
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
 * Delete Profile View Template
 * Delete Profile View Template.   SAS Token Requirements:  - ss=profile  - sp=w
 *
 * authorization String SAS Signature.
 * id String Identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization. (optional)
 * returns httpSimpleMessageObjectResponse
 **/
exports.deleteProfileViewTemplate = function(authorization,id) {
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
 * Get specific Journey Action.
 * Get specific Journey Action.   SAS Token Requirements:  - ss=action  - sp=r
 *
 * authorization String SAS Signature
 * id String Identifies a specific Journey Action.
 * returns httpGenericObjectResponse_journeyAction
 **/
exports.getJourneyAction = function(authorization,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "organization" : "organization",
    "name" : "name",
    "namespace" : "namespace",
    "active" : true,
    "rules" : { },
    "templateId" : "templateId",
    "version" : "version",
    "actions" : [ {
      "actionType" : 0,
      "actionConfig" : { }
    }, {
      "actionType" : 0,
      "actionConfig" : { }
    } ]
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
 * Get all Journey Actions.
 * Get all Journey Actions.   SAS Token Requirements:  - ss=action  - sp=r
 *
 * authorization String SAS Signature.
 * templateId String Identifies a template. (optional)
 * returns httpGenericListObjectResponse_journeyAction
 **/
exports.getJourneyActionList = function(authorization,templateId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "organization" : "organization",
    "name" : "name",
    "namespace" : "namespace",
    "active" : true,
    "rules" : { },
    "templateId" : "templateId",
    "version" : "version",
    "actions" : [ {
      "actionType" : 0,
      "actionConfig" : { }
    }, {
      "actionType" : 0,
      "actionConfig" : { }
    } ]
  }, {
    "organization" : "organization",
    "name" : "name",
    "namespace" : "namespace",
    "active" : true,
    "rules" : { },
    "templateId" : "templateId",
    "version" : "version",
    "actions" : [ {
      "actionType" : 0,
      "actionConfig" : { }
    }, {
      "actionType" : 0,
      "actionConfig" : { }
    } ]
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
 * Get Profile View Templates
 * Get all/specific Profile View Templates, available for usage by the CJaaS Org and Organization.  SAS Token Requirements:  - ss=profile  - sp=r
 *
 * authorization String SAS Signature.
 * id String identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization. (optional)
 * returns httpGenericListObjectResponse_profileViewTemplate
 **/
exports.getProfileViewTemplates = function(authorization,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "organization" : "organization",
    "name" : "name",
    "namespace" : "namespace",
    "attributes" : [ {
      "metadata" : "metadata",
      "displayName" : "displayName",
      "lookbackPeriod" : 6,
      "limit" : 0,
      "event" : "event",
      "version" : "version",
      "lookbackDurationType" : "lookbackDurationType",
      "aggregationMode" : "aggregationMode",
      "verbose" : true
    }, {
      "metadata" : "metadata",
      "displayName" : "displayName",
      "lookbackPeriod" : 6,
      "limit" : 0,
      "event" : "event",
      "version" : "version",
      "lookbackDurationType" : "lookbackDurationType",
      "aggregationMode" : "aggregationMode",
      "verbose" : true
    } ]
  }, {
    "organization" : "organization",
    "name" : "name",
    "namespace" : "namespace",
    "attributes" : [ {
      "metadata" : "metadata",
      "displayName" : "displayName",
      "lookbackPeriod" : 6,
      "limit" : 0,
      "event" : "event",
      "version" : "version",
      "lookbackDurationType" : "lookbackDurationType",
      "aggregationMode" : "aggregationMode",
      "verbose" : true
    }, {
      "metadata" : "metadata",
      "displayName" : "displayName",
      "lookbackPeriod" : 6,
      "limit" : 0,
      "event" : "event",
      "version" : "version",
      "lookbackDurationType" : "lookbackDurationType",
      "aggregationMode" : "aggregationMode",
      "verbose" : true
    } ]
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
 * Get Report by Name
 * Get a certain usage report.   SAS Token Requirements:  - ss=account  - sp=r
 *
 * authorization String SAS Signature
 * reportname String Report Name   Options: yearlyusage | monthlyusage
 * returns httpReportObjectResponse
 **/
exports.getReportByName = function(authorization,reportname) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "meta" : {
    "orgId" : "orgId"
  },
  "report" : {
    "data" : { },
    "name" : "name"
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
 * Get the status of a Progressive Profile View Job.
 * Get the status of a Progressive Profile View Job.  SAS Token Requirements:  - ss=profile  - p=r
 *
 * authorization String SAS Signature.
 * viewId String identifies a specific Profile View Template, available for usage by the CJaaS Org and Organization.
 * instanceId String Identifies the instance of the job.
 * personId String identifies the Person, for which the Profile View needs to be created. (optional)
 * searchFilter String OData Filter expressions that will be used to search tapes. Example: type eq 'Add To Cart' (optional)
 * no response value expected for this operation
 **/
exports.getViewStatus = function(authorization,viewId,instanceId,personId,searchFilter) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Post Events
 * API accepts events that describe what occurred, when, and by whom on every interaction across touch points and applications. Data Ingestion is based on Cloud Events specification for describing event data in a common way. API accepts data in the form of POST with support for Header based authorization.  SAS Token Requirements:  - ss=ds  - sp=w
 *
 * body CloudEvent 
 * authorization String SAS Signature
 * returns httpSimpleMessageObjectResponse
 **/
exports.postEvents = function(body,authorization) {
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


/**
 * Read Events
 * The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels, across mediums. Tape is an append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models.  SAS Token Requirements:  - ss=tape  - sp=r
 *
 * authorization String SAS Signature
 * $filter String oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart' (optional)
 * $top Integer Limit to return latest x events (optional)
 * returns tapeReaderResponse
 **/
exports.readEvents = function(authorization,$filter,$top) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "meta" : {
    "orgId" : "orgId"
  },
  "events" : [ {
    "specVersion" : "specVersion",
    "data" : { },
    "previously" : "previously",
    "person" : "person",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "source" : "source",
    "time" : "2000-01-23T04:56:07.000+00:00",
    "dataContentType" : "dataContentType",
    "type" : "type"
  }, {
    "specVersion" : "specVersion",
    "data" : { },
    "previously" : "previously",
    "person" : "person",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "source" : "source",
    "time" : "2000-01-23T04:56:07.000+00:00",
    "dataContentType" : "dataContentType",
    "type" : "type"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Read Events By Identity
 * The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums. Tape is a append-only, immutable data ledger that can be queried to retrieve snapshot of latest events that moment in time or historically to play-back events as they occurred to understand or analyze Journeys using ML/AI models.  SAS Token Requirements:  - ss=tape  - sp=r
 *
 * authorization String SAS Signature
 * identity String Unique Identity to filter by
 * $filter String oData Filter Expressions to Slice/Dice Search, ex: type eq 'Add To Cart' (optional)
 * $top Integer Limit to return latest x events (optional)
 * returns tapeReaderResponse
 **/
exports.readEventsByIdentity = function(authorization,identity,$filter,$top) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "meta" : {
    "orgId" : "orgId"
  },
  "events" : [ {
    "specVersion" : "specVersion",
    "data" : { },
    "previously" : "previously",
    "person" : "person",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "source" : "source",
    "time" : "2000-01-23T04:56:07.000+00:00",
    "dataContentType" : "dataContentType",
    "type" : "type"
  }, {
    "specVersion" : "specVersion",
    "data" : { },
    "previously" : "previously",
    "person" : "person",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "source" : "source",
    "time" : "2000-01-23T04:56:07.000+00:00",
    "dataContentType" : "dataContentType",
    "type" : "type"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Read Streams
 * Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination. Optionally accepts $filter to slice/dice further (ex: type eq 'Add to Cart').  SAS Token Requirements:  - ss=stream  - sp=r
 *
 * sig String Optional SAS Signature within QueryString (optional)
 * authorization String Optional SAS Signature within Header (optional)
 * returns String
 **/
exports.readStreams = function(sig,authorization) {
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
 * Read Streams by Person
 * Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination. Optionally accepts $filter to slice/dice further (ex: type eq 'Add to Cart').  SAS Token Requirements:  - ss=stream  - sp=r
 *
 * person String Unique Person ID to filter by
 * sig String Optional SAS Signature within QueryString (optional)
 * authorization String Optional SAS Signature within Header (optional)
 * returns String
 **/
exports.readStreamsByPerson = function(person,sig,authorization) {
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


'use strict';

var utils = require('../utils/writer.js');
var Journey = require('../service/JourneyService');

module.exports.createJourneyAction = function createJourneyAction (req, res, next, body, authorization) {
  Journey.createJourneyAction(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createProfileViewTemplate = function createProfileViewTemplate (req, res, next, body, authorization) {
  Journey.createProfileViewTemplate(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createView = function createView (req, res, next, authorization, viewId, personId, searchFilter, skipCache, xCACHEMAXAGEHOUR, xCACHEMAXAGEMIN) {
  Journey.createView(authorization, viewId, personId, searchFilter, skipCache, xCACHEMAXAGEHOUR, xCACHEMAXAGEMIN)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteJourneyAction = function deleteJourneyAction (req, res, next, authorization, id) {
  Journey.deleteJourneyAction(authorization, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProfileViewTemplate = function deleteProfileViewTemplate (req, res, next, authorization, id) {
  Journey.deleteProfileViewTemplate(authorization, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getJourneyAction = function getJourneyAction (req, res, next, authorization, id) {
  Journey.getJourneyAction(authorization, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getJourneyActionList = function getJourneyActionList (req, res, next, authorization, templateId) {
  Journey.getJourneyActionList(authorization, templateId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProfileViewTemplates = function getProfileViewTemplates (req, res, next, authorization, id) {
  Journey.getProfileViewTemplates(authorization, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReportByName = function getReportByName (req, res, next, authorization, reportname) {
  Journey.getReportByName(authorization, reportname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getViewStatus = function getViewStatus (req, res, next, authorization, viewId, instanceId, personId, searchFilter) {
  Journey.getViewStatus(authorization, viewId, instanceId, personId, searchFilter)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postEvents = function postEvents (req, res, next, body, authorization) {
  Journey.postEvents(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.profileBuilder = function profileBuilder (req, res, next, body, personId, authorization) {
  Journey.profileBuilder(body, personId, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readEvents = function readEvents (req, res, next, authorization, $filter, $top) {
  Journey.readEvents(authorization, $filter, $top)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readEventsByIdentity = function readEventsByIdentity (req, res, next, authorization, identity, $filter, $top) {
  Journey.readEventsByIdentity(authorization, identity, $filter, $top)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readStreams = function readStreams (req, res, next, sig, authorization) {
  Journey.readStreams(sig, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.readStreamsByPerson = function readStreamsByPerson (req, res, next, person, sig, authorization) {
  Journey.readStreamsByPerson(person, sig, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

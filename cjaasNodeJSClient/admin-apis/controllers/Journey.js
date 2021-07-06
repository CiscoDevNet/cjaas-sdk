'use strict';

var utils = require('../utils/writer.js');
var Journey = require('../service/JourneyService');

module.exports.createOrUpdateAnAlias = function createOrUpdateAnAlias (req, res, next, body, id, authorization) {
  Journey.createOrUpdateAnAlias(body, id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteIdentity = function deleteIdentity (req, res, next, authorization, id) {
  Journey.deleteIdentity(authorization, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteIdentityAliases = function deleteIdentityAliases (req, res, next, authorization, id) {
  Journey.deleteIdentityAliases(authorization, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIdentityById = function getIdentityById (req, res, next, authorization, id) {
  Journey.getIdentityById(authorization, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listIdentities = function listIdentities (req, res, next, authorization) {
  Journey.listIdentities(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

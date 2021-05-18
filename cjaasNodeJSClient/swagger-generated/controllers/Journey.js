'use strict';

var utils = require('../utils/writer.js');
var Journey = require('../service/JourneyService');

module.exports.events = function events (req, res, next, body, authorization) {
  Journey.events(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.identities = function identities (req, res, next, authorization, id) {
  Journey.identities(authorization, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.identitiesAlias = function identitiesAlias (req, res, next, body, id, authorization) {
  Journey.identitiesAlias(body, id, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.identitiesDelete = function identitiesDelete (req, res, next, authorization, id) {
  Journey.identitiesDelete(authorization, id)
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

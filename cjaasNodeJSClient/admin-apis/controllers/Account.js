'use strict';

var utils = require('../utils/writer.js');
var Account = require('../service/AccountService');

module.exports.createApp = function createApp (req, res, next, authorization) {
  Account.createApp(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteApp = function deleteApp (req, res, next, authorization) {
  Account.deleteApp(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listApps = function listApps (req, res, next, authorization) {
  Account.listApps(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rotateAppKey = function rotateAppKey (req, res, next, authorization) {
  Account.rotateAppKey(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAppAttributes = function updateAppAttributes (req, res, next, authorization) {
  Account.updateAppAttributes(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

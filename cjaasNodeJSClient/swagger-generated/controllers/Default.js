'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.clearTape = function clearTape (req, res, next, authorization) {
  Default.clearTape(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clearTapeByPerson = function clearTapeByPerson (req, res, next, authorization, person) {
  Default.clearTapeByPerson(authorization, person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dataSinkGet = function dataSinkGet (req, res, next, sig, data) {
  Default.dataSinkGet(sig, data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.journeys = function journeys (req, res, next, authorization, $filter, $top) {
  Default.journeys(authorization, $filter, $top)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.journeysByPerson = function journeysByPerson (req, res, next, authorization, person, $filter, $top) {
  Default.journeysByPerson(authorization, person, $filter, $top)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.keys = function keys (req, res, next, authorization, operation, id) {
  Default.keys(authorization, operation, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.keysDelete = function keysDelete (req, res, next, authorization, id) {
  Default.keysDelete(authorization, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.keysList = function keysList (req, res, next, authorization) {
  Default.keysList(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.onlineOrchestrationTrigger = function onlineOrchestrationTrigger (req, res, next, body, sig, person, authorization) {
  Default.onlineOrchestrationTrigger(body, sig, person, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.realTimeSSE = function realTimeSSE (req, res, next, sig, authorization) {
  Default.realTimeSSE(sig, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.realTimeSSEPerson = function realTimeSSEPerson (req, res, next, person, sig, authorization) {
  Default.realTimeSSEPerson(person, sig, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.settings = function settings (req, res, next, authorization) {
  Default.settings(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSettings = function updateSettings (req, res, next, body, authorization) {
  Default.updateSettings(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.webexWalkinSSE = function webexWalkinSSE (req, res, next, person, sig, authorization) {
  Default.webexWalkinSSE(person, sig, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

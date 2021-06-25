"use strict";
/**
 * This file will remain a JS as this will be exported as an integration to segment io
 */

function getScriptURL() {
  if (window.cjaas && window.cjaas.scriptURL) {
    return window.cjaas.scriptURL;
  } else {
    return "https://cjaas.cisco.com/event-listener";
  }
}

/**
 * Module dependencies.
 */
var integration = require("@segment/analytics.js-integration");
var WXMJourney = (exports = module.exports = integration("WXMJourney")
  // .assumesPageview()
  .global("wxm_journey")
  .option("url", "")
  .tag(
    "cjaasRequests",
    '<script src="' + getScriptURL() + '/ref-cjaas-requests.js">'
  )
  .tag(
    "interrupter",
    '<script src="' + getScriptURL() + '/ref-cjaas-interrupter.js">'
  ));

/**
 * Initialize api
 *
 */
WXMJourney.prototype.initialize = function () {
  var user = this.analytics.user();

  // access options
  // this.identify(
  //   new Identify({
  //     userId: user.id(),
  //     traits: user.traits()
  //   })
  // );

  this.load("cjaasRequests");
  if (this.options.ENABLE_ORCHESTRATION) {
    this.load("interrupter");
  }

  this.ready();

  this.cjaasUIDPreviously = user.id();
};

/**
 * loaded event
 *
 *
 */
WXMJourney.prototype.loaded = function () {
  return true;
};

/**
 * track event.
 *
 * triggered when track event is called by the analytics host
 *
 * @param {*} value - event facade
 */
WXMJourney.prototype.track = function (value) {
  this.loadInterruptor();

  let event = value.event();

  let [username, previously] = this.getUserNameAndAnonId();

  let data = value.properties();

  if (window.cjaasRequests) {
    window.cjaasRequests.post(event, data, username, previously);
  }
};

/**
 * page event
 *
 * Triggers for page view event from the host
 *
 * @param {identity} args
 */
WXMJourney.prototype.page = function (args) {
  this.loadInterruptor();

  if (this.analytics.options["PAGE_TRACK"] === "false") {
    return;
  }

  let [username, previously] = this.getUserNameAndAnonId();

  let data = args.options();

  let event = "Page Visit";

  if (window.cjaasRequests) {
    window.cjaasRequests.post(event, data, username, previously);
  }
};

WXMJourney.prototype.loadInterruptor = function () {
  console.log(this.options, this.analytics.options);
  if (
    (!window.cjaasInterrupter || window.cjaasInterrupter.q) &&
    (this.options.ENABLE_ORCHESTRATION ||
      this.analytics.options.ENABLE_ORCHESTRATION) &&
    !this.interruptorLoaded
  ) {
    this.interruptorLoaded = true;
    this.load("interrupter");
  }
};

/**
 * identity event
 *
 * When host identifies the current user
 *
 * @param {*} identity
 */
WXMJourney.prototype.identify = function (identity) {
  this.loadInterruptor();

  window.cjaasInterrupter.setName(this.analytics.user().id());

  let [username, previously] = this.getUserNameAndAnonId(true);

  if (username && !username.match(/^anon/)) {
    this.cjaasUIDPreviously = username;
  }

  if (username !== previously) {
    window.cjaasRequests.post("Identify", {}, username, previously);
  }

  console.log(identity, "from identity");
};

/**
 * utililty function to get user id and anonymous id
 */
WXMJourney.prototype.getUserNameAndAnonId = function (forcePreviously) {
  let previously;
  let username =
    this.analytics.user().id() || "anon-" + this.analytics.user().anonymousId();

  if (this.analytics.user().id() && forcePreviously) {
    if (!this.cjaasUIDPreviously) {
      previously = "anon-" + this.analytics.user().anonymousId();
    } else if (this.analytics.user().id() !== this.cjaasUIDPreviously) {
      // new name
      previously = this.cjaasUIDPreviously;
    }
  }

  return [username, previously];
};

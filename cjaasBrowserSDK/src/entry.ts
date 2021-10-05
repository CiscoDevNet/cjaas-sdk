// THIS FILE WILL BE DOWNLOADED OVER NETWORK

import { getProperties } from "./utils";
import { DomObserver } from "./dom-observer";
var wxmAnalytics = require("@segment/analytics.js-core/build/analytics");
var WXMJourney1 = require("./wxm-integration");

export class CjaasEntry {
  sdk: any;
  queue: any[] = [];
  journeyConfig: any = {};
  domObserver: DomObserver;

  constructor() {
    // fetch mutation observer module
    this.domObserver = new DomObserver(document);

    this.setUpQueues();

    if ((<any>window).cjaas.baseURL) {
      this.setBaseURL((<any>window).cjaas.baseURL);
    }
    this.domObserver.getSelectors = () => this.journeyConfig;

    let analytics = new wxmAnalytics();

    analytics.use(WXMJourney1);

    this.sdk = analytics;

    this.domObserver.bubbleEventCallBack = (
      selector: string,
      attributes: HTMLElement["attributes"]
    ) => {
      let object = this.journeyConfig[selector];
      if (object) {
        let properties: any = {};
        if (object.attributes) {
          properties = getProperties(object.attributes, attributes);
        }
        this.sdk.track(object.tag, properties);
      }
    };
  }

  /**
   * Sets option to analytics sdk
   * @param args
   */
  setOption(args: [key: string, value: any]) {
    const [key, value] = args;
    if (this.sdk && this.sdk.options) {
      let keys = Object.keys(this.sdk.options);

      if (keys && keys.length > 0) {
        this.sdk.options[key] = value;
      } else {
        this.queue.push(["setOptions", [key, value]]);
      }
    }
  }

  /**
   * initialize analytics core with WXM integration and its initial options
   *
   */
  initialize() {
    if (this.sdk) {
      let expiration = this.getExpiration();

      let options: any = {
        initialPageview: true,
        plan: {
          identify: {
            __default: {
              enabled: true,
            },
          },
          track: {
            __default: {
              enabled: true,
              integrations: {},
            },
          },
          page: {
            __default: {
              enabled: true,
              integrations: {},
            },
          },
          __default: {
            enabled: true,
            integrations: {},
          },
        },
      };

      // Localstorage is used when cookies are not found
      // When expiration is set, localstorage needs to be disabled
      if (expiration) {
        options.cookie = {
          maxage: expiration,
        };

        options.localStorage = {
          enabled: false,
        };
      }

      if (this.isOrchestrationEnabled()) {
        options.ENABLE_ORCHESTRATION = true;
      }

      this.sdk.initialize(
        {
          WXMJourney: {},
        },
        options
      );

      // set the options from queue
      if (this.queue.length > 0) {
        this.queue.forEach((x, i) => {
          if (x && x[0] === "setOptions") {
            let [key, value] = x[1];
            this.sdk.options[key] = value;
            this.queue[i] = null;
          }
        });
      }
    }
  }

  /**
   * starts listening to event on given element
   *
   * @param selector
   * @param tag
   * @param event
   * @param type - single/
   */
  listenTo(
    args: [
      selector: string,
      tag: string,
      event: "click" | "hover",
      attributes?: any
    ],
    type: "SINGLE" | "MULTIPLE" = "SINGLE"
  ) {
    const [selector, tag, event = "click", attributes] = args;

    this.journeyConfig[selector] = {
      selector,
      tag,
      event,
      type,
      attributes,
    };

    this.domObserver.evaluate();
  }

  listenToAll(
    args: [
      selector: string,
      tag: string,
      event: "click" | "hover",
      attributes?: any
    ]
  ) {
    this.listenTo(args, "MULTIPLE");
  }

  setDSWriteToken(_key: string) {
    let key;
    if (Array.isArray(_key)) {
      key = _key[0];
    } else {
      key = _key;
    }
    (<any>window).cjaasRequests.setToken(key);
  }

  setStreamReadToken(_key: string) {
    let key;
    if (Array.isArray(_key)) {
      key = _key[0];
    } else {
      key = _key;
    }

    const orgMatch = key.match(/st=(.*?)&/);
    const orgName = orgMatch && orgMatch[1];

    (<any>window).cjaasInterrupter.setToken(key);
    (<any>window).cjaasInterrupter.setBrand(orgName?.toLowerCase());
  }

  setUpQueues() {
    if (!(<any>window).cjaasRequests) {
      // for Requests
      (<any>window).cjaasRequests = {};

      (<any>window).cjaasRequests.q = [];

      ["setToken", "post", "setBaseURL"].forEach((x) => {
        (<any>window).cjaasRequests[x] = function (...args: any) {
          (<any>window).cjaasRequests.q.push([x, ...args]);
        };
      });
    }

    // for Interrupter
    (<any>window).cjaasInterrupter = {};
    (<any>window).cjaasInterrupter.q = [];

    ["setBrand", "setName", "setToken", "setBaseURL"].forEach((x) => {
      (<any>window).cjaasInterrupter[x] = function (...args: any) {
        (<any>window).cjaasInterrupter.q.push([x, ...args]);
      };
    });
  }

  setBaseURL(url: string) {
    (<any>window).cjaasRequests.setBaseURL(url);
    (<any>window).cjaasInterrupter.setBaseURL(url);
  }

  identify(
    args: [username: string, name?: string, email?: string, plan?: string]
  ) {
    let properties: any = {
      name: args[1] || args[0],
    };

    if (args[2]) {
      properties.email = args[2];
    }

    if (args[3]) {
      properties.plan = args[3];
    }
    this.sdk.identify(args[0], properties);
  }

  track(args: [event: string, data: any]) {
    this.sdk.track(args[0], args[1]);
  }

  /**
   * Single page applications will need to call
   * page events whenever the route changes
   *
   * @param page
   */
  page(page: string) {
    this.sdk.page(page);
  }

  isOrchestrationEnabled() {
    if (this.queue?.length > 0) {
      let orchestrationOption = this.queue.find(
        (x) => x[1][0] === "ENABLE_ORCHESTRATION"
      );
      return (orchestrationOption && orchestrationOption[1][1]) || false;
    }
  }

  getExpiration() {
    if (this.queue?.length > 0) {
      let expirationOption = this.queue.find(
        (x) => x[1][0] === "SET_EXPIRATION"
      );

      if (expirationOption) {
        return expirationOption[1][1];
      }
    }
  }
}

/**
 * This file handles api request as cloudEvents. It is a dependency for WXMJourney Integration and loaded during its initialize
 */

var CloudEvent = require("cloudevents").CloudEvent;
var HTTP = require("cloudevents").HTTP;
import axios from "axios";

export class CJaasRequests {
  _authToken: string;
  public baseURL = "https://cjaas-devus1.azurewebsites.net";
  // public baseURL = "https://uswest-nonprod.cjaas.cisco.com";

  getEvent(type: string, data: any, person: string, previously?: string) {
    let object: any = {
      source: "Website",
      type,
      person,
      datacontenttype: "application/json",
      data: JSON.stringify(data),
    };

    if (previously) {
      object.previously = previously;
    }

    const myevent = new CloudEvent(object);

    return myevent;
  }

  preparePayload(
    event: string,
    data: any,
    person: string,
    previously?: string
  ) {
    const headers = {
      "content-type": "application/cloudevents+json",
    };

    let message = {
      headers,
      body: JSON.stringify(this.getEvent(event, data, person, previously)),
    };

    return HTTP.toEvent(message);
  }

  setToken(token: string) {
    this._authToken = token;
  }

  setBaseURL(url: string) {
    this.baseURL = url;
  }

  post(
    ...args: [event: string, data: any, person: string, previously?: string]
  ) {
    let payload = this.preparePayload(...args);

    axios.post(this.baseURL + "/v1/journey/events", payload, {
      headers: {
        "Content-type": "application/cloudevents+json",
        Authorization: "SharedAccessSignature " + this._authToken,
      },
    });
  }
}

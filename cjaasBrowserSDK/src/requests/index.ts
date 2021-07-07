/**
 *
 * Entry point for request file.
 *
 * when integrated with segment, request js bundle has to be fetched
 * by WXM Integration module
 *
 * It can also be used to send cloud events in demo pages
 *
 * */
import { CJaasRequests } from "./request";

function setEnv() {
  let _requests: CJaasRequests = new CJaasRequests();
  if ((<any>window).cjaasRequests && (<any>window).cjaasRequests.q) {
    (<any>window).cjaasRequests.q.forEach((x: any[]) => {
      let methodName: "setToken" | "post" = <"setToken" | "post">x[0];

      (<any>_requests)[methodName](...x.slice(1));
    });
  }

  (<any>window).cjaasRequests = _requests;
}

setEnv();

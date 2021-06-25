import { CJaaSInterrupter } from "./interrupter";

function setEnv() {
  let _requests: CJaaSInterrupter = new CJaaSInterrupter();
  if ((<any>window).cjaasInterrupter && (<any>window).cjaasInterrupter.q) {
    (<any>window).cjaasInterrupter.q.forEach((x: any[]) => {
      let methodName: "setName" | "setBrand" = <"setName" | "setBrand">x[0];

      (<any>_requests)[methodName](...x.slice(1));
    });
  }

  (<any>window).cjaasInterrupter = _requests;
}

setEnv();

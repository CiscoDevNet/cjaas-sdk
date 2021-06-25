import { CjaasEntry } from "./entry";

let _instance: CjaasEntry;

console.log(document.currentScript, "this script");

// defines the interface
// TODO allow custom api-url for first party and third party use
const CALL_SIGNATURES: any = {
  option: "setOption",
  init: "initialize",
  listen: "listenTo",
  dsWriteToken: "setDSWriteToken",
  streamReadToken: "setStreamReadToken",
  listen_all: "listenToAll",
  identify: "identify",
  track: "track",
  page: "page",
};

/**
 * process the queue from the host and set the sdk
 */
let cjaasConfig;
if ((<any>window).cjaas) {
  _instance = getSDK();

  ((<any>window).cjaas.q || []).forEach((x: any[]) => {
    callMethod(_instance, x);
  });
} else {
  _instance = getSDK();
}

(<any>window).cjaas = (...args: any) => {
  callMethod(_instance, args);
};

if (cjaasConfig) {
  (<any>window).cjaas.config = cjaasConfig;
}

/**
 * entry for cjaas function calls
 * @param instance
 * @param args
 */
function callMethod(instance: CjaasEntry, args: any[]) {
  let method: string = CALL_SIGNATURES[args[0]];
  if (method && (<any>instance)[method]) {
    (<any>instance)[method](args.slice(1));
  }
}

/**
 * return singleton object of CJaas
 */
function getSDK(): CjaasEntry {
  let entry = new CjaasEntry();

  return entry;
}

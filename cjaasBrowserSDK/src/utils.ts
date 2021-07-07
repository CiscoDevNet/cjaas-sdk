var camelCase = require("lodash.camelcase");

export function getProperties(
  config: string | string[],
  attributes: HTMLElement["attributes"]
) {
  let properties: any = {};
  if (Array.isArray(config)) {
    config.forEach((x: string) => {
      let attribute = attributes.getNamedItem(x);
      if (attribute) {
        properties[getCasedProperty(x)] = attribute.value;
      }
    });
  } else if (typeof config === "string") {
    let attribute = attributes.getNamedItem(config);
    if (attribute) {
      properties[getCasedProperty(config)] = attribute.value;
    }
  }

  return properties;
}

export function getCasedProperty(x: string) {
  let key;
  if (x.indexOf("data") !== -1) {
    key = x.replace("data", "");
  } else {
    key = x;
  }

  return camelCase(key);
}

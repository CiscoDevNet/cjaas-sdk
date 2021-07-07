# Event Listener

This is a javascript tool based on [analytics js](https://github.com/segmentio/analytics.js/). It helps us listen to customer interactions from a web page and use the data to orchestrate customer journey.

## Getting Started

`Demo` directory has the sample implementation of the script. Use a webserver to serve the root directory of the repo.

`live-server .`

Navigate to `localhost:8000/demo` in the browser.

# Usage

Add the scripts

```javascript
// setup queue
window.cjaas = function (...args) {
  if (cjaas && cjaas.q) {
    cjaas.q.push(args);
  } else {
    cjaas.q = [args];
  }
};

// necessary to fetch other dependancies
window.cjaas.scriptURL = "https://cjaas.cisco.com/event-listener";

let script = document.createElement("script");
script.src = window.cjaas.scriptURL + "/ref-cj-analytics.js";
script.type = "module";
script.async = true;
document.body.appendChild(script);


// sets token to post events
cjaas("dsWriteToken", "SAS Token from CJaaS Account for ds service with write access");

// set token to listen for 
cjaas("streamReadToken", "SAS Token from CJaaS Account to read from stream");

// page events will be tracked
cjaas("option", "PAGE_TRACK", true);

// tracks the event on first element that maches the selector. (button)
cjaas("listen", "button", "Add to Cart", "click");

// tracks the event on first element that maches the selector. (button)
// sends the attribute product id from each of the button
cjaas("listen_all", "button", "Add to Cart", "click", [
  "data-product_id",
  "data-product_sku"
]);

// init tracking
cjaas("init");
```

This sets up the cjaas to any website. This example shows how to add tracking on one or all of buttons for click. It uses standard CSS selectors to identify such elements.

# Customizable BASE URL

Customizing Base URL allows us to connect the JS SDK to our self hosted Backend platform. This comes in handy when you want to deploy in areas with severe data restrictions.

```javascript
window.cjaas = function (...args) {
  if (cjaas && cjaas.q) {
    cjaas.q.push(args);
  } else {
    cjaas.q = [args];
  }
};

// where is the server hosted?
window.cjaas.baseURL = "https://custom-self-hosted-api-url";
```

# Host sdk to circumvent Adblockers

Often Adblockers also block trackers. Their algorithm could blacklist our default url to fetch CJaaS SDK. In such cases, we can host the CJaaS JS SDK in client's cloud storage container.

Copy the 4 scripts under a folder in any cloud storage container. You will be able to easily add the this script in single step.

```javascript
window.cjaas = function (...args) {
  if (cjaas && cjaas.q) {
    cjaas.q.push(args);
  } else {
    cjaas.q = [args];
  }
};

window.cjaas.scriptURL = "https://cloud-storage-container-url/folder-name";
```

# Integration with With Segment.io (WIP)

`wxm-integration.js` is built to be integrated with segment io and start tracking events.

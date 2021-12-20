 # Event Listener

This is a javascript tool based on [analytics js](https://github.com/segmentio/analytics.js/). It helps us listen to customer interactions from a web page and use the data to orchestrate a customer journey.

## Introduction
The following code snippet sets up the cjaas to any website, and allows us to send sample events such as "Purchase" to CJaaS with Data such as "title" and "Price".

## Start the Server

`Demo` directory has the sample implementation of the script. Use a webserver to serve the root directory of the repo.

`sudo npm install -g live-server`

`live-server .`

Navigate to `localhost:8000/demo` in the browser.

## Getting Started

Add the script

```javascript
// setup queue
window.cjaas = function (...args) {
  if (cjaas && cjaas.q) {
    cjaas.q.push(args);
  } else {
    cjaas.q = [args];
  }
};

// necessary to fetch other dependencies
// where are the scripts hosted?
window.cjaas.scriptURL = "https://cjaas.cisco.com/event-listener";
// where is the server hosted?
window.cjaas.baseURL = "https://uswest-nonprod.cjaas.cisco.com";

var script = document.createElement("script");
script.src = window.cjaas.scriptURL + "/ref-cj-analytics.js";
script.type = "module";
script.async = true;
document.body.appendChild(script);


// sets the token to post events
cjaas("dsWriteToken", "SAS Token from CJaaS Account for ds service with write access");

// sets the token to read from the stream
cjaas("streamReadToken", "SAS Token from CJaaS Account to read from stream");

// page events will be tracked
cjaas("option", "PAGE_TRACK", true);
cjaas("option", "ENABLE_ORCHESTRATION", true);

// init tracking
cjaas("init");

//Identify yourself
cjaas("identify", `personID`, "Person Name"); 


cjaas("track", "Purchase", {"title": "Outliers", "price": 50});
cjaas("track", "Purchase", {"title": "My Life in Full", "price": 70});
```

After this we can create profile view template and journey action in CJaaS to trigger walkin. Journey action has rules in it and when this rules get satisfied against the template, walkin gets triggered. 

**Create Profile View Template:**

 ```curl
 
 curl -X POST \
  https://cjaas_host_url/v1/journey/views/templates \
  -H 'accept: application/json' \
  -H 'authorization: SAS Signature' \
  -d '
  {
            "id": "book-store-template",
            "namespace": "namespace_name",
            "organization": "org_name",

            "attributes": [
                {
                    "version": "1.0",
                    "event": "Purchase",
                    "metadataType": "string",
                    "metadata": "title",
                    "limit": 100,
                    "displayName": "books bought",
                    "lookbackDurationType": "days",
                    "lookbackPeriod": 30,
                    "aggregationMode": "Value",
                    "verbose": true
                },
                {

                    "version": "1.0",
                    "event": "Purchase",
                    "metadataType": "string",
                    "metadata": "title",
                    "limit": 100,
                    "displayName": "Number of books bought",
                    "lookbackDurationType": "days",
                    "lookbackPeriod": 30,
                    "aggregationMode": "Count",
                    "verbose": true
                },
                {

                    "version": "1.0",
                    "event": "Purchase",
                    "metadataType": "integer",
                    "metadata": "price",
                    "limit": 100,
                    "displayName": "Total amount spent",
                    "lookbackDurationType": "days",
                    "lookbackPeriod": 50,
                    "aggregationMode": "Sum",
                    "verbose": true
                }

            ]
        }
   '     
  ```

 Let's closely look at all the three blocks. The first block
 ```json
  {
      "version": "1.0",
      "event": "Purchase",
      "metadataType": "string",
      "metadata": "title",
      "limit": 100,
      "displayName": "books bought",
      "lookbackDurationType": "days",
      "lookbackPeriod": 30,
      "aggregationMode": "Value",
      "verbose": true
  }
 
  ```
  It captures all the events called "Purchase", metadata called "title" and "aggregationMode" called "Value". Basically it lists all the titles of the books
  bought by an user.
  
  The second block 
  ```json
  
  {
      "version": "1.0",
      "event": "Purchase",
      "metadataType": "string",
      "metadata": "title",
      "limit": 100,
      "displayName": "Number of books bought",
      "lookbackDurationType": "days",
      "lookbackPeriod": 30,
      "aggregationMode": "Count",
      "verbose": true
   }
  
```
It captures all the events called "Purchase", metadata called "title" and "aggregationMode" called "Count". Basically it counts all the books bought by an user.

The thrid block
```json

{

    "version": "1.0",
    "event": "Purchase",
    "metadataType": "integer",
    "metadata": "price",
    "limit": 100,
    "displayName": "Total amount spent",
    "lookbackDurationType": "days",
    "lookbackPeriod": 50,
    "aggregationMode": "Sum",
    "verbose": true
}

```
It captures all the events called "Purchase", metadata called "price" and "aggregationMode" called "Sum". Basically it sums up the total price of the books that has been bought by an user.    
   
**Create/Replace Journey Action**

 ```curl
 curl -X POST \
  https://cjaas_host_url/v1/journey/actions \
  -H 'accept: application/json' \
  -H 'authorization: SAS Signature' \
  -H 'content-type: application/json' \
  
 -d '{
    "name": "book-store-template",
    "organization": "org_name",
    "templateId": "book-store-template",
    "cooldownPeriodInMinutes": 1,
    "active": true,
    "namespace": "namespace_name",

     "rules": {
        "args": [
             "'\''Purchase'\'','\''price'\'','\''Sum'\'' GTE 100",
             "'\''Purchase'\'','\''title'\'','\''Value'\'' HAS '\''Outliers'\''"
        ],
        "logic": "OR"
    },
    "actionTriggers": [
      {
        "type": "WebexWalkin",
        "agentId": "sumamitr@cisco.com",
        "title": "Agent Calling",
        "welcomeMessage": "Hi there!"
    }
  ]
}'
 
 ```

 
Let us closely look at the sample rule:

```json

    "rules": {
        "args": [
             "'Purchase','price','Sum' GTE 100",
             "'Purchase','title','Value' HAS 'Outliers'"
        ],
        "logic": "OR"
    }
    
 ```
It has a logical OR condition:
 
 ```json
    "'Purchase','price','Sum' GTE 100"
 ```
 That means the user has to buy books greater than equal to 100 bucks
 
 OR
 
 ```json
 "'Purchase','title','Value' HAS 'Outliers'"
 ```
 The title of one of these books should be "Outliers".

In a nutshell, Webex Walkin will get triggered when 

1. Either user buys books of worth 100 bucks or more 
2. Or User buys a book called "Outliers"

# Other Cjaas Methods

**"token"**

Sets the token to the SDK which will be used to authorize the events while posting it to server.

**"option"**

Sets additional options to the SDK.

**PAGE_TRACK**

enables page tracking

**"listen"**

Attaches event listener to the elements that match the given selector. It uses the standard CSS selectors.
It accepts Event name/ Tag as third argument. This will be posted as 'type' in the payload along with other data when interaction happens.
It accepts an attribute or list of attributes that have to be attached along with the event. Eg, product_id

```javascript
// tracks the event on first element that matches the selector. (button)
cjaas("listen", "button", "Add to Cart", "click");
```

**"listen_all"**
This event is same as "listen" mentioned above. Except that it tracks events from all elements that matches the specified CSS selector.

```javascript      
// tracks the event on all elements that matches the selector. (button)
// sends the attribute product_id & product_sku from each of the button
cjaas("listen_all", "button", "Add to Cart", "click", [
  "data-product_id",
  "data-product_sku"
]);
```

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






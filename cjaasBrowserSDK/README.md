 # Event Listener

This is a javascript tool based on [analytics js](https://github.com/segmentio/analytics.js/). It helps us listen to customer interactions from a web page and use the data to orchestrate customer journey.

## Getting Started

`Demo` directory has the sample implementation of the script. Use a webserver to serve the root directory of the repo.

`sudo npm install -g live-server`

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
// where are the scripts hosted?
window.cjaas.scriptURL = "https://cjaas.cisco.com/event-listener";
// where is the server hosted?
window.cjaas.baseURL = "https://uswest-nonprod.cjaas.cisco.com";

var script = document.createElement("script");
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
cjaas("option", "ENABLE_ORCHESTRATION", true);

// init tracking
cjaas("init");

//Identify yourself
cjaas("identify", `personID`, "Person Name"); 

//sending data {"title": "Outliers", "price": 50} . Track event : User buys book
cjaas("track", "User buys book", {"title": "Name_of_the_book", "price": 50});
cjaas("track", "User buys book", {"title": "Name_of_the_book", "price": 70});
```

This sets up the cjaas to any website, and allows us to send sample events such as "User buys book" to CJaaS with Data such as "title" and "Price".
After this we can create profile view template and journey action in CJaaS to trigger walkin. 

Journey action has rules in it and when this rules get satisfied against the template, walkin gets triggered. 

**Create Profile View Template:**

POST https://cjaas_host_url/v1/journey/views/templates

SAS Token Requirements:

service = profile

permission = w

Headers(Mandatory)

Authorization: SAS Signature

Body

```json

  
  {
      "id": "buying pattern of Some Customer",
      "namespace": "namespace_details",
      "organization": "org_details",

      "attributes": [
          {
              "version": "1.0",
              "event": "User buys book",
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
              "event": "User buys book",
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
              "event": "User buys book",
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
  
 ```
 Let's closely look at all the three blocks. The first block
 ```json
  {
      "version": "1.0",
      "event": "User buys book",
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
  It captures all the events called "User buys book", metadata called "title" and "aggregationMode" called "Value". Basically it lists all the titles of the books
  bought by an user.
  
  The second block 
  ```json
  
  {
      "version": "1.0",
      "event": "User buys book",
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
It captures all the events called "User buys book", metadata called "title" and "aggregationMode" called "Count". Basically it counts all the books bought by an user.

The thrid block
```json

{

    "version": "1.0",
    "event": "User buys book",
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
It captures all the events called "User buys book", metadata called "price" and "aggregationMode" called "Sum". Basically it sums up the total price of the books that has been bought by an user.    
   
  
 
**Create/Replace Journey Action**

POST https://cjaas_host_url/v1/journey/actions

SAS Token Requirements:

service = action

permission = w

Headers(Mandatory)

Authorization: SAS Signature

Note: The templateid in Journey action should match the template created in profile view template.

Body

```json
{
    "name": "buying pattern of Some Customer",
    "organization": "org_details",
    "templateId": "buying pattern of Some Customer",
    "cooldownPeriodInMinutes": 1,
    "active": true,
    "namespace": "namespace_name",

    "rules": {
        "args": [
            "'User buys book','price','Sum' GT 100",
            {
                "args": [
                    "'User buys book','title','Count' GTE 1",
                    "'User buys book','title','Value' HAS 'Outliers'"
                ],
                "logic": "AND"
            }
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
}

 ```
 
Let us closely look at the sample rule:

```json

  "rules": {
          "args": [
              "'User buys book','price','Sum' GT 100",
              {
                  "args": [
                      "'User buys book','title','Count' GTE 1",
                      "'User buys book','title','Value' HAS 'Outliers'"
                  ],
                  "logic": "AND"
              }
          ],
          "logic": "OR"
      }

 ```
 The outer block is having logical OR condition:
 
 ```json
  "'User buys book','price','Sum' GTE 100"
 ```
 OR
 
 ```json
 "args": [
    "'User buys book','title','Count' GTE 1",
    "'User buys book','title','Value' HAS 'Outliers'"
 ]
 ```
Means 
Look for the condition called "User buys book" and the total price should be more than 100.

If that is not satisfied (Since it's an OR condition), the control goes to the inner block.
 
 The inner block is having AND condition that means both of these should be TRUE.
 ```json
  "'User buys book','title','Count' GTE 1",
  "'User buys book','title','Value' HAS 'Outliers'"
  ``` 
 That means User has to buy at least one book as the count is greater than equal to 1.
 Also, the title of one of those books should be "Outliers".
 
In a nutshell, Webex Walkin will get triggered when 

1. Either user buys book of worth more than 100 
2. Or User buys at least one book named "Outliers"

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






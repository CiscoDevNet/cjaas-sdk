/**
 * DOM OBSERVER
 *
 * Uses Mutation Observer API to listen to any changes in the page
 * as the elements listening for CJaas Event can appear any time
 *
 * Module is not necessary when we use CJaaS as segment integration
 *
 *
 *
 * HOW TO USE
 *
 * // cssSelectors
 * let selectors = [
 *  'button#'
 * ];
 *
 * let observer = new DomObserver(document);
 *
 * observer.getSelectors = () => {
 *  return selectors;
 * }
 *
 *
 * observer.bubbleEventCallBack = (selector) => {
 *  handle selector event
 * }
 *
 */

export class DomObserver {
  public getSelectors: Function = null;
  _document;
  public bubbleEventCallBack: Function;
  eventListeners: {
    [key: string]: Function;
  } = {};

  constructor(document: HTMLDocument) {
    let self = this;
    let observer = new MutationObserver(() => {
      self.evaluate(self);
    });
    this._document = document;
    let that = this;
    function startObservation(observer: MutationObserver) {
      observer.observe(that._document.body, {
        subtree: true,
        childList: true,
        attributes: true
      });
    }

    // wait for the document to create body to observe
    if (this._document.body) {
      startObservation(observer);
    } else {
      let intervalId = setInterval(() => {
        if (this._document.body) {
          startObservation(observer);
          clearInterval(intervalId);
        }
      }, 100);
    }
  }

  getCallback() {
    return this.evaluate(this);
  }

  evaluate(self = this) {
    // run the hook to get the latest options
    let selectors = self.getSelectors ? self.getSelectors() : {};

    Object.keys(selectors).forEach((x: any) => {
      let selector = selectors[x] && selectors[x].selector;
      let type = selectors[x].type;

      let element, elements;
      if (type === "SINGLE") {
        element = self._document.querySelector(selector);
      } else {
        elements = self._document.querySelectorAll(selector);
      }

      if (type === "SINGLE" && element) {
        let fn = this.getDynamicFunction(
          selector,
          self,
          selectors[selector].event
        );

        let oldFn: Function;
        if (self.eventListeners[selector]) {
          oldFn = self.eventListeners[selector];
        }
        self.eventListeners[selector] = fn;

        element.removeEventListener(selectors[selector].event, oldFn);

        // any because Function does not have handleEvent
        element.addEventListener(selectors[selector].event, fn);
      } else if (type === "MULTIPLE" && elements && elements.length > 0) {
        let fn = this.getDynamicFunction(
          selector,
          self,
          selectors[selector].event
        );
        let oldFn: Function;
        if (self.eventListeners[selector]) {
          oldFn = self.eventListeners[selector];
        }
        self.eventListeners[selector] = fn;

        elements.forEach((x) => {
          if (oldFn) {
            x.removeEventListener(selectors[selector].event, oldFn);
          }
          x.addEventListener(selectors[selector].event, fn);
        });
      }
    });
  }

  getDynamicFunction(selector: string, self: any, event: string) {
    return new Function(
      "observer",
      "selector",
      `return function callBack_${selector.replace(/\W/g, "_")}_${event}(event){
      observer.bubbleEvent(selector, event.currentTarget);
    }`
    )(self, selector);

    // return
  }
  /**
   * Bubble the event to its parent for callback and tracking
   * @param selector
   */
  bubbleEvent(selector: string, element: HTMLElement) {
    if (this.bubbleEventCallBack)
      this.bubbleEventCallBack(selector, element.attributes);
  }
}

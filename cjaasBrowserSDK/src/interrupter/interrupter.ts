import { createWrapper } from "./dom";
import "@cjaas/common-components";
// import necessary momentum webcomponents

// import "@momentum-ui/web-components/dist/comp/md-progress-bar";
export class CJaaSInterrupter {
  eventSource: EventSource;
  name: string;
  orgName: string;
  token: string;
  walkinOfferPresenting = false;
  cachedDocumentTitle: string | null = null;
  titleSwapIntervalId: any;
  public baseURL =
    (<any>window)?.cjaas?.config?.baseURL ||
    // "https://uswest-nonprod.cjaas.cisco.com";
    "https://cjaas-devus1.azurewebsites.net";

  constructor() {
    let webexUrl = "https://unpkg.com/webex@1.118.0/umd/webex.min.js";

    let webexSript = this.getScript(webexUrl);

    this.appendScript(webexSript);

    this.getIcons();
  }

  getIcons() {
    let link = document.createElement("link");

    link.rel = "stylesheet";
    link.href =
      "https://cjaas.cisco.com/web-components/v1/css/momentum-ui-icons.min.css";

    this.appendScript(link);
  }

  setName(name: string) {
    this.name = name;
    this.listenToStream();
  }

  setToken(token: string) {
    this.token = token;
  }

  setBrand(brand: string) {
    this.orgName = brand;
  }

  setBaseURL(url: string) {
    this.baseURL = url;
  }

  appendScript(script: HTMLScriptElement | HTMLLinkElement) {
    document.head.appendChild(script);
  }

  getScript(src: string, isModule = true) {
    let script = document.createElement("script");
    script.src = src;
    if (isModule) {
      script.type = "module";
    }
    script.async = true;
    return script;
  }

  listenToStream() {
    // signature in SAS Token needs to be URL encoded
    let token = this.token?.replace(/sig=(.*)/, (...matches) => {
      return "sig=" + encodeURIComponent(matches[1]);
    });

    let url = `${this.baseURL}/Walkin/${this.name}?${token}`;

    if (this.eventSource) {
      this.eventSource.close();
    }

    this.eventSource = new EventSource(url);

    this.eventSource.onmessage = (event: any) => {
      let parsedData = this.parseEvent(event);

      if (!parsedData) {
        return;
      }

      let [action, data]: [string, any] = parsedData;

      switch (action) {
        case ACTION_TYPE.CONNECT_TO_AGENT: {
          data && !this.walkinOfferPresenting && this.initiateWalkin(data);
          break;
        }
        case ACTION_TYPE.DISPLAY_OFFER: {
          data &&
            data.OfferImage &&
            this.showOffer(
              data.OfferImage,
              data.DisplayTitle,
              data.DisplayMessage,
              data.MaxWidth,
              data.Link
            );

          break;
        }
        case ACTION_TYPE.EXTERNAL_EVENT: {
          // emit CustomEvent for global listeners to react
          this.emitCustomEvent(data);
          break;
        }
        case ACTION_TYPE.AI_BOT: {
          this.showBot(data);
          break;
        }
        default: {
          console.log(data);
        }
      }
    };
  }

  parseEvent(event: any): [string, any] {
    let data = null;
    try {
      data = JSON.parse(event.data);
      return [data.TypeOfOffer, data];
    } catch (err) {
      // console.log(err);
    }
  }

  emitCustomEvent(data: any) {
    let event = new CustomEvent("Journey Interruption", { detail: data });

    window.dispatchEvent(event);
  }

  clearTitleSwapInterval() {
    clearInterval(this.titleSwapIntervalId);
    if (this.cachedDocumentTitle) {
      document.title = this.cachedDocumentTitle;
    }
  }

  public showBot(data: any) {
    let wrapper = createWrapper("AI_BOT", data.MaxWidth);

    // add timer
    let timer = document.createElement("cjaas-timer");

    wrapper.appendChild(timer);

    // add Iframe
    let iframe = document.createElement("iframe");
    if (data.Link) {
      iframe.src = data.Link;
    }

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.background = "white";
    wrapper.appendChild(iframe);

    // add overlay
    let overlay = document.createElement("div");
    overlay.classList.add("cjs-overlay");
    overlay.style.height = "100%";
    overlay.style.width = "100%";
    overlay.style.position = "absolute";
    overlay.style.zIndex = "2";
    overlay.style.top = "0";

    wrapper.appendChild(overlay);

    document.body.appendChild(wrapper);

    this.walkinOfferPresenting = true;

    (<HTMLImageElement>wrapper.children[1]).onload = () => {
      wrapper.classList.add("slide-in");

      if ((<any>wrapper.children[0])?.startTimer) {
        (<any>wrapper.children[0])?.startTimer();
      }

      this.playIntro();

      this.setTitleSwapInterval(data.DisplayTitle || "May we help you?");

      wrapper.dispatchEvent(
        new CustomEvent("Presenting Bot", {
          bubbles: true,
        })
      );
    };

    wrapper.onclick = () => {
      wrapper.removeChild(timer);
      wrapper.removeChild(overlay);
    };

    this.setTimeoutCallback(wrapper, wrapper);
  }

  setTitleSwapInterval(title: string) {
    this.titleSwapIntervalId = setInterval(() => {
      if (this.cachedDocumentTitle === null) {
        this.cachedDocumentTitle = document?.title;
        document.title = title;
      } else {
        document.title = this.cachedDocumentTitle;
        this.cachedDocumentTitle = null;
      }
    }, 1400);
  }

  initiateWalkin(data: any) {
    Promise.all([this.createWalkin()]).then((results) => {
      console.log(results);
      let [wrapper, component] = results[0];
      component.accessToken = data.OneTimeJWT;
      component.brandName = this.orgName;
      component.agentId = data.ConnectID;
      if (data.DisplayMessage) {
        component.welcomeMessage = data.DisplayMessage;
      }

      wrapper.appendChild(component);

      document.body.appendChild(wrapper);

      this.walkinOfferPresenting = true;

      component.addEventListener("Connected To Webex", () => {
        wrapper.classList.add("slide-in");

        this.playIntro();

        this.setTitleSwapInterval(data.DisplayTitle || "May we help you?");

        component.dispatchEvent(
          new CustomEvent("Presenting Walkin Offer", {
            bubbles: true,
          })
        );
      });

      component.addEventListener("Meeting Closed", () => {
        this.dismissPopup(wrapper);
      });
    });
  }

  private playIntro() {
    let soundURL = "https://cjaas.cisco.com/web-components/sounds/doorbell.mp3";

    let audio = new Audio(soundURL);
    audio.play();
  }

  dismissPopup(wrapper: HTMLDivElement) {
    wrapper.classList.remove("slide-in");

    this.walkinOfferPresenting = false;

    this.clearTitleSwapInterval();

    setTimeout(() => {
      try {
        document.body.removeChild(wrapper);
      } catch (err) {}
    }, 500);
  }

  createWalkin(): Promise<[HTMLDivElement, any]> {
    return new Promise((resolve, reject) => {
      let div = createWrapper("WALKIN");

      let component: any = document.createElement("cjaas-webex-walkin");

      this.setResizeCallbacks(component, div);

      this.setTimeoutCallback(component, div);

      resolve([div, component]);
    });
  }

  setTimeoutCallback(component: any, div: HTMLDivElement) {
    component.addEventListener("timed-out", (event: CustomEvent) => {
      this.dismissPopup(div);
    });
  }

  setResizeCallbacks(component: any, wrapper: HTMLDivElement) {
    let cachedOverflowSetting: string;
    component.addEventListener("resize-popup", (event: CustomEvent) => {
      let fullscreen = event.detail.fullScreen;
      if (fullscreen) {
        wrapper.classList.add("fullscreen");
        cachedOverflowSetting = window.top.document.body.style.overflow;

        window.top.document.body.style.overflow = "hidden";
      } else {
        wrapper.classList.remove("fullscreen");
        window.top.document.body.style.overflow = cachedOverflowSetting;
      }
    });
  }

  public showOffer(
    image: string,
    title: string,
    alt: string,
    maxWidth: number,
    link: string
  ) {
    let wrapper = createWrapper("OFFER", maxWidth);

    // this.addImage(wrapper, image);
    wrapper.innerHTML = `<cjaas-timer></cjaas-timer><div class="cjs-close-svg"></div><img src="${image}" alt="${alt}">`;

    document.body.appendChild(wrapper);

    (<HTMLImageElement>wrapper.children[2]).onload = () => {
      this.playIntro();

      (<any>wrapper.children[0])?.startTimer();

      wrapper.classList.add("slide-in");
    };

    wrapper.addEventListener("click", (ev) => {
      if (
        ev.target &&
        (<HTMLDivElement>ev.target).classList?.contains("cjs-close-svg")
      ) {
        this.dismissPopup(wrapper);
        return;
      }

      let event = new CustomEvent("Clicked On Offer");

      wrapper.dispatchEvent(event);

      link && window.open(link, "_blank");
    });

    this.setTitleSwapInterval(title);

    this.setTimeoutCallback(wrapper, wrapper);
  }
}

export enum ACTION_TYPE {
  CONNECT_TO_AGENT = "WebexWalkin",
  DISPLAY_OFFER = "DisplayOffer",
  EXTERNAL_EVENT = "External",
  AI_BOT = "AIBot",
}

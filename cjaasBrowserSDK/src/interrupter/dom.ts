export function createWrapper(
  type: "WALKIN" | "OFFER" | "AI_BOT",
  width?: number
) {
  // create component
  let div = document.createElement("div");
  div.classList.add("cjs-wrapper");

  let style = document.createElement("style");
  // offer image has no background. Fixed width and auto height. Container needs to be flexible.
  style.innerHTML = `
   .cjs-wrapper{
     position: fixed;
     z-index: 9999;
     bottom: 30px;
     ${type === "OFFER" ? "display: flex;flex-direction: column;" : ""} 
     width: ${type === "WALKIN" ? "260px" : "100%"};
     ${
       type === "OFFER" || type === "AI_BOT"
         ? "max-width: " + (width || 320) + "px;"
         : ""
     }
     overflow: hidden;
     height: ${type === "OFFER" ? "auto" : "400px"};
     right: 30px;
     border-radius: 4px;
     border: ${type === "OFFER" ? "none" : "1px solid #d2d2d2"};
     transition: all ease-in-out 500ms;
     transform: translateY(100vw);
   }
   .cjs-wrapper.slide-in{
     transform: translateY(0);
   }
   .cjs-wrapper.fullscreen{
     height: 100vh;
     width: 100vw;
     right: 0;
     bottom: 0;
   }
   .cjs-wrapper img{
     height: 100%;
     width: 100%;
   }
   .cjs-close-svg{
      position: absolute;
      top: 10px;
      right: 10px;
      height: 24px;
      width: 24px;
      background-image: url('https://cjaas.cisco.com/assets/img/close.svg');
      background-size: 12px;
      background-position: center center;
      background-repeat: no-repeat;
      cursor: pointer;
      background-color: white;
      border-radius: 100%;
      box-shadow: 1px 1px 3px 2px #c3c3c3; 
   }
   `;
  document.head.appendChild(style);

  return div;
}

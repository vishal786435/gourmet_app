import React from "react";
import "./Marquee.css"; // If you want separate CSS, otherwise remove if not used

function Marquee() {
  return (
    <div
      id="comp-m0c8h7lq"
      role=""
      className="rM7ckN YJEKQk comp-m0c8h7lq-container comp-m0c8h7lq wixui-box"
    >
      <div className="YAf4Ti InKIFF wixui-box"></div>
      <div
        id="comp-m0c8h7mn"



        className="ACdreM wixui-text-marquee"
        style={{
          "--marquee-animation-state": "running",
          "--marquee-duration": "37.25s",
          "--marquee-clicked": "paused"
        }}
      >
        <p className="Otzv5f">
          <span className="LZUzlM JA80dz">
            <span className="E4e8xh JA80dz" data-marquee-animation="left">
              <span className="lxWnDa JA80dz" data-testid="marquee-unit">
                <span
                  className="IM2bJh WGSppx wixui-text-marquee__text"
                  data-testid="marquee-item-text"
                >
                  <span>Save up to 15% with Subscriptions</span>
                </span>
                <span
                  className="IM2bJh GvLR4M"
                  data-testid="marquee-item-separator"
                >
                  {/* First SVG */}
                  <svg
                    data-bbox="16 16 224 224"
                    viewBox="0 0 256 256"
                    height="32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    data-type="shape"
                  >
                    <g>
                      <path d="M96 104a8 8 0 1 1 8-8 8 8 0 0 1-8 8m64 48a8 8 0 1 0 8 8 8 8 0 0 0-8-8m80-24c0 10.44-7.51 18.27-14.14 25.18-3.77 3.94-7.67 8-9.14 11.57-1.36 3.27-1.44 8.69-1.52 13.94-.15 9.76-.31 20.82-8 28.51s-18.75 7.85-28.51 8c-5.25.08-10.67.16-13.94 1.52-3.57 1.47-7.63 5.37-11.57 9.14C146.27 232.49 138.44 240 128 240s-18.27-7.51-25.18-14.14c-3.94-3.77-8-7.67-11.57-9.14-3.27-1.36-8.69-1.44-13.94-1.52-9.76-.15-20.82-.31-28.51-8s-7.85-18.75-8-28.51c-.08-5.25-.16-10.67-1.52-13.94-1.47-3.57-5.37-7.63-9.14-11.57C23.51 146.27 16 138.44 16 128s7.51-18.27 14.14-25.18c3.77-3.94 7.67-8 9.14-11.57 1.36-3.27 1.44-8.69 1.52-13.94.15-9.76.31-20.82 8-28.51s18.75-7.85 28.51-8c5.25-.08 10.67-.16 13.94-1.52 3.57-1.47 7.63-5.37 11.57-9.14C109.73 23.51 117.56 16 128 16s18.27 7.51 25.18 14.14c3.94 3.77 8 7.67 11.57 9.14 3.27 1.36 8.69 1.44 13.94 1.52 9.76.15 20.82.31 28.51 8s7.85 18.75 8 28.51c.08 5.25.16 10.67 1.52 13.94 1.47 3.57 5.37 7.63 9.14 11.57C232.49 109.73 240 117.56 240 128m-144-8a24 24 0 1 0-24-24 24 24 0 0 0 24 24m77.66-26.34a8 8 0 0 0-11.32-11.32l-80 80a8 8 0 0 0 11.32 11.32ZM184 160a24 24 0 1 0-24 24 24 24 0 0 0 24-24"></path>
                    </g>
                  </svg>
                </span>
              </span>
              {/* ... repeat blocks as needed for the marquee ... */}
            </span>
          </span>
        </p>
      </div>
      <button className="gShssj pVF6AJ" aria-label="Play Marquee" aria-pressed="false">
        <span>Play</span>
        <svg viewBox="0 0 18 18" fill="currentColor" width="18" height="18">
          <path d="M6.87468837,5.45041947 L12.7318793,8.46657119 C13.20163,8.68731241 13.20163,9.26940918 12.7318793,9.53342881 L6.87468837,12.5495805 C6.58008377,12.7012867 6.00070071,12.5801226 6,12.0161517 L6,5.98384828 C6,5.65247743 6.35266876,5.20682168 6.87468837,5.45041947 Z M7,11.3602529 L11.5834735,9 L7,6.63974714 L7,11.3602529 Z"></path>
        </svg>
      </button>
    </div>
  );
}

export default Marquee;

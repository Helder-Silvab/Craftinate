import React from "react";
import ReactDOM from "react-dom/client";

export function membership() {
  return (
    <>
      <img
        src="src/assets/Pattern2.png"
        alt="pattern"
        className="width-100-percent position-absolute"
      />
      <section>
        <h1 className="label-font-japanese label-size-65 align-center margin-top-90">
          Membership Benefits
        </h1>
        <p className="label-size-20 align-center">
          Unbeatable benefits that make us your one-stop destination for design
        </p>
        <div className="position-relative margin-top-90">
          <button className="color-black label-size-12 width150 height40 border-radius-20 label-color-white label-font-japanese buttonHero cursor-pointer center-element">
            See Plans
          </button>
        </div>
        <div className="grid-1-1 grid-flex margin-top-150">
          <div className="grid-flex-grow"></div>
          <div className="width400 display-flex">
            <div className="grid-flex-grow"></div>
            <img
              src="src/assets/light.gif"
              alt="refresh"
              className="width50 height50"
            />
            <div className="grid-flex-grow"></div>
          </div>
          <div className="width400 display-flex margin-left-50 margin-right-50 position-relative">
            <div className="grid-flex-grow"></div>
            <img
              src="src/assets/refresh.gif"
              alt="refresh"
              className="width50 height50 center-element"
            />
            <div className="grid-flex-grow"></div>
          </div>
          <div className="width400 display-flex position-relative">
            <div className="grid-flex-grow"></div>
            <img
              src="src/assets/money.gif"
              alt="refresh"
              className="width100 height100 center-element"
            />
            <div className="grid-flex-grow"></div>
          </div>
          <div className="grid-flex-grow"></div>
        </div>
        <div className="grid-1-1 grid-flex">
          <div className="grid-flex-grow"></div>
          <div className="width400 align-center">
            <h2 className="label-size-20">Rapid Delivery</h2>
            <p className="label-size-12">
              Receive your designs individually, typically within just a few
              days
            </p>
          </div>
          <div className="width400 margin-left-50 margin-right-50 align-center">
            <h2 className="label-size-20">Your Design Hub</h2>
            <p className="label-size-12">
              Unlimited design requests, all at your fingertips
            </p>
          </div>
          <div className="width400 align-center">
            <h2 className="label-size-20">Steady Monthly Fee</h2>
            <p className="label-size-12">
              Say goodbye to unexpected costs - your monthly rate stays constant
            </p>
          </div>
          <div className="grid-flex-grow"></div>
        </div>
        <div className="grid-1-1 grid-flex margin-top-50 height50">
          <div className="grid-1-2 position-relative">
            <img
              src="src/assets/code.gif"
              alt="refresh"
              className="width50 height50 center-element"
            />
          </div>
          <div className="grid-1-2 position-relative">
            <img
              src="src/assets/tag.gif"
              alt="refresh"
              className="width50 height50 center-element"
            />
          </div>
        </div>
        <div className="grid-1-1 grid-flex">
          <div className="grid-1-2 align-center">
            <h2 className="label-size-20">Exceptional Quality</h2>
            <p className="label-size-12">
              Experience unmatched design excellence at your convenience
            </p>
          </div>
          <div className="grid-1-2 align-center">
            <h2 className="label-size-20">Exclusively Yours</h2>
            <p className="label-size-12">
              Every design is crafted exclusively for you and belongs entirely
              to you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

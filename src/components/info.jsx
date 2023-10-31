import React from "react";
import ReactDOM from "react-dom/client";

export function info() {
  return (
    <>
      <section className="position-relative">
        <img
          src="../src/assets/sakura.png"
          alt="sakura"
          className="center-element-sakura"
        />
        <h1 className="label-size-65 label-font-japanese width-50-percent margin-left-25">
          We've reimagined <br />
          design without reinventing the <br /> wheel.
        </h1>
      </section>
      <section className="margin-top-300">
        <div className="grid-1-1 grid-flex margin-top-100">
          <div className="grid-flex-grow"></div>
          <div className="width400 display-flex">
            <div className="grid-flex-grow"></div>
            <img
              src="../src/assets/Chat.png"
              alt="chat"
              className="width50 height50"
            />
            <div className="grid-flex-grow"></div>
          </div>
          <div className="width400 display-flex margin-left-50 margin-right-50">
            <div className="grid-flex-grow"></div>
            <img
              src="../src/assets/Delivery.png"
              alt="chat"
              className="width50 height50"
            />
            <div className="grid-flex-grow"></div>
          </div>
          <div className="width400 display-flex">
            <div className="grid-flex-grow"></div>
            <img
              src="../src/assets/Pencil.png"
              alt="chat"
              className="width50 height50"
            />
            <div className="grid-flex-grow"></div>
          </div>
          <div className="grid-flex-grow"></div>
        </div>
        <div className="grid-1-1 grid-flex">
          <div className="grid-flex-grow"></div>
          <h1 className="label-size-20 align-center label-weight-normal width400">
            Enroll in a plan and unleash unlimited design requests
          </h1>
          <h1 className="label-size-20 align-center label-weight-normal width400 margin-left-50 margin-right-50">
            Expect your design on most business days within a few working days
          </h1>
          <h1 className="label-size-20 align-center label-weight-normal width400">
            We'll make revisions to the designs until they meet your complete
            satisfaction
          </h1>
          <div className="grid-flex-grow"></div>
        </div>
      </section>
    </>
  );
}

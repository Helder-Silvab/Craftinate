import React from "react";
import ReactDOM from "react-dom/client";

import { motion } from "framer-motion";

export function recentWork() {
  return (
    <>
      <section className="margin-top-90 position-relative">
        <img
          src="src/assets/Pattern2.png"
          alt="pattern"
          className="width-100-percent position-absolute"
        />
        <motion.img
          src="src/assets/karma.png"
          alt="pattern"
          className="center-element-karpa"
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{
            duration: "1",
            delay: "1",
          }}
        />
      </section>
      <section className="position-relative height400 height-reset">
        <h1 className="label-size-50 label-font-japanese margin-left-25 margin-top-30">
          Recognized Excellence, <br /> Nothing Below It.
        </h1>
        <button className="color-black label-size-12 width250 height40 border-radius-20 label-color-white label-font-japanese center-element buttonHero cursor-pointer">
          View recent work
        </button>
      </section>
    </>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";

import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

import { info } from "./components/info";
import { membership } from "./components/membership";
import { recentWork } from "./components/recentWork";
import { bundle } from "./components/bundle";
import { useRef } from "react";
import { useEffect } from "react";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <section>
        <img
          src="src/assets/Pattern.png"
          alt="pattern"
          className="width-100-percent"
        />
        <img
          src="src/assets/samurai.png"
          alt="ellipse"
          className="center-element-hero"
        />
        <div className="center-element">
          <h1 className="align-center label-size-80 label-color-black label-font-japanese zindex-666 ">
            Craft<span className="label-color-white">Inate</span>
          </h1>
          <p className="align-center label-size-20 label-color-white">
            Explore infinite creativity, redefine your business:
            <br></br>Stay ahead of the Pack!
          </p>
          <button className="color-black label-size-12 width150 height40 border-radius-20 label-color-white label-font-japanese center-element buttonHero cursor-pointer">
            See Plans
          </button>
        </div>
      </section>

      {info()}
      {membership()}
      <motion.div ref={ref} animate={mainControls} initial="hidden">
        {recentWork()}
      </motion.div>
      {bundle()}
    </>
  );
}

export default Home;

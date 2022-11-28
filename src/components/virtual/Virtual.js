import React from "react";
import css from "./Virtual.module.css";
import shade from "../../assets/shade.png";
import After from "../../assets/after.png";
import Before from "../../assets/before.png";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import motion from "framer-motion";
function Virtual() {
  return (
    <div className={css.v_container}>
      <div className={css.left_card}>
        <span>virtual try-on</span>
        <span>never buy the wrong shade again</span>
        <span>Try Now!</span>
        <img src={shade} alt="" />
      </div>
      <div className={css.right_card}>
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={Before} alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src={After} alt="Image two" />}
        />
      </div>
    </div>
  );
}

export default Virtual;

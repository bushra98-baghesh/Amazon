import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className={css.container}>
      <div className={css.h_side}>
        <motion.span whileHover={{ scale: 1.2 }} className={css.text1}>
          Skin Protection Cream
        </motion.span>
        <motion.div whileHover={{ scale: 1.1 }} className={css.text2}>
          <span>Trendy Collections</span>
          <span>{""} lorem Ipsum , lorem Ipsum lorem Ipsum lorem</span>
        </motion.div>
      </div>
      <div className={css.wrapper}>
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={{ duration: 3, type: "spring" }}
          className={css.blueCircle}
        ></motion.div>
        <motion.img
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={{ duration: 3, type: "spring" }}
          src={HeroImg}
          alt=""
          width="600"
        />
        <motion.div
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          transition={{ duration: 3, type: "spring" }}
          className={css.cart2}
        >
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best SignUp Offer</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
      <div className={css.h_side}>
        <motion.div whileHover={{ scale: 1.1 }} className={css.traffic}>
          <span>1.5M</span>
          <span>Monthly Traffic</span>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className={css.customers}>
          <span>100K</span>
          <span>Happy Customers</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;

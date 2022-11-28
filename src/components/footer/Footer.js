import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  HiOutlineLocationMarker,
  HiPhone,
  HiOutlineUserCircle,
  HiOutlineQuestionMarkCircle,
  HiOutlineExternalLink,
} from "react-icons/hi";
function Footer() {
  return (
    <div className={css.footerWrapper}>
      <hr />
      <div className={css.footer}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.details}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <HiOutlineLocationMarker className={css.icon} />
              <span>111 north avenue Orlando,FL 32001</span>
            </span>
            <span className={css.pngLine}>
              <HiPhone className={css.icon} />
              <span>222-244-6779</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.details}>
            <span>Company</span>
            <span className={css.pngLine}>
              <HiOutlineQuestionMarkCircle className={css.icon} />
              <span>About Us</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.details}>
            <span>Account</span>
            <span className={css.pngLine}>
              <HiOutlineUserCircle className={css.icon} />
              <span>Sign-in</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.details}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <HiOutlineExternalLink className={css.icon} />
              <span>Follow The Link </span>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright 2022 by Amazon </span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
}

export default Footer;

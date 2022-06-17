import React from "react";
import LinkedinIcon from "../Icon/Linkedin";

import EmailIcon from "../Icon/Email";
import GithubIcon from "../Icon/Github";
import { openNewTab } from "../../Service/Utils";
import Style from "./index.module.scss";
export default function Footer() {
  return (
    <div className={Style["footer"]}>
      <div className={Style["footer__left"]}>
        <div className={Style["left__item"]}>
          <div className={Style["footer__text"]}>find me in:</div>
        </div>
        <div className={Style["left__item"]}>
          <div
            className={Style["footer__social"]}
            onClick={() => {
              // openNewTab("https://www.google.com.vn/?hl=vi");
            }}
          >
            <div className={Style["social__item"]}>
              <LinkedinIcon className={Style["social__icon"]} />
            </div>
          </div>
        </div>
        <div className={Style["left__item"]}>
          <div
            className={Style["footer__social"]}
            onClick={() => {
              // openNewTab("https://www.google.com.vn/?hl=vi");
            }}
          >
            <div className={Style["social__item"]}>
              <EmailIcon
                className={[Style["social__icon"], Style["email__icon"]].join(
                  " "
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={Style["footer__right"]}>
        <div
          className={Style["footer__github"]}
          onClick={() => {
            // openNewTab("https://www.google.com.vn/?hl=vi");
          }}
        >
          <div className={[Style["footer__text"]].join(" ")}>@tuanpham0907</div>
          <GithubIcon className={Style["github__icon"]} />
        </div>
      </div>
    </div>
  );
}

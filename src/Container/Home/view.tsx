import React, { Fragment } from "react";
import Avatar from "./components/Avatar";
import InformationComponent from "./components/Information";

import Style from "./index.module.scss";
export default function view() {
  return (
    <Fragment>
      <div className={Style["wrap"]}>
        <div className={Style["container"]}>
          <div className={Style["content__left"]}>
            <InformationComponent />
          </div>
          <div className={Style["content__right"]}>
            <Avatar />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

import React from "react";
import Style from "./index.module.scss";
import imgAvatar from "../../../../Assets/Image/IMG_0257.jpg";
export default function Avatar() {
  return (
    <div className={Style["wrap"]}>
      {/* <div className={Style['bg']}></div> */}
      <div className={Style["avatar"]}>
        <img src={imgAvatar} alt="" />
      </div>
    </div>
  );
}

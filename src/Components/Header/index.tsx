import React from "react";
import Style from "./index.module.scss";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className={Style["header"]}>
      <div className={Style["header__logo"]}>
        <Link to={"/"}>pham-tuan</Link>{" "}
      </div>
      <div className={Style["header__nav"]}>
        <Navigation />
      </div>
    </div>
  );
}

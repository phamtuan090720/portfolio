import React from "react";
import Style from "./index.module.scss";
import { hashClass, openNewTab } from "../../../../Service/Utils";
export default function InformationComponent() {
  return (
    <div className={hashClass([Style["container"]])}>
      <div className={hashClass([Style["greeting"]])}>Hi all. I am</div>
      <div className={hashClass([Style["name"]])}>Pham Tuan</div>
      <div className={hashClass([Style["position"]])}>
        &gt; Front-end developer
      </div>
      <div className={hashClass([Style["comment"], "comment"])}>
        // you can also see it on my Github page
      </div>
      <div className="code__line">
        <span className="const">const</span>{" "}
        <span className="name">githubLink</span>{" "}
        <span className="isEqualTo"> = </span>
        <span
          className="value"
          onClick={() => {
            openNewTab("https://github.com/phamtuan090720");
          }}
          style={{ cursor: "pointer" }}
        >
          “github.com/phamtuan090720”
        </span>
      </div>
      <div className={hashClass([Style["comment"], "comment"])}>
        // you can also see it on my Linkedin
      </div>
      <div className="code__line">
        <span className="const">const</span>{" "}
        <span className="name">linkedinLink</span>{" "}
        <span className="isEqualTo"> = </span>
        <span
          className="value"
          onClick={() => {
            openNewTab("https://www.linkedin.com/in/tuanpham0907/");
          }}
          style={{ cursor: "pointer" }}
        >
          “linkedin.com/in/tuanpham0907”
        </span>
      </div>
    </div>
  );
}

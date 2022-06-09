import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ButtonLink from "../Core/ButtonLink";
import Style from "./index.module.scss";
export default function Navigation() {
  const [activeHome, setActiveHome] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setActiveHome(location.pathname === "/");
  }, [location]);
  return (
    <div className={Style["nav"]}>
      <div className={Style["nav__left"]}>
        <div className={Style["nav__item"]}>
          <ButtonLink
            className={Style["nav__link"]}
            path="home"
            text="_home"
            customStyle={{ active: Style["nav__link--active"] }}
            isActive={activeHome}
          />
        </div>
        <div className={Style["nav__item"]}>
          <ButtonLink
            className={Style["nav__link"]}
            path="about-me"
            text="_about-me"
            customStyle={{ active: Style["nav__link--active"] }}
          />
        </div>
        <div className={Style["nav__item"]}>
          <ButtonLink
            className={Style["nav__link"]}
            path="projects"
            text="_projects"
            customStyle={{ active: Style["nav__link--active"] }}
          />
        </div>
      </div>
      <div className={Style["nav__right"]}>
        <div className={Style["nav__item"]}>
          <ButtonLink
            className={Style["nav__link"]}
            path="contact"
            text="_contact"
            customStyle={{ active: Style["nav__link--active"] }}
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
interface ButtonLinkProps {
  text?: string;
  path?: string;
  className?: string;
  customStyle?: {
    active?: string;
    core?: string;
  };
  isActive?: boolean;
  disable?: boolean;
}
const ButtonLink = (props: ButtonLinkProps) => {
  const { path, className, text, customStyle, disable = false } = props;
  return (
    <NavLink
      to={path || "/"}
      className={({ isActive }) =>
        [
          customStyle?.core ? customStyle.core : Styles["core__buttonLink"],
          className,
          props.isActive
            ? customStyle?.active
              ? customStyle.active
              : Styles["active"]
            : null,
          isActive
            ? customStyle?.active
              ? customStyle.active
              : Styles["active"]
            : null,
        ]
          .filter(Boolean)
          .join(" ")
      }
    >
      {text}
    </NavLink>
  );
};
export default ButtonLink;

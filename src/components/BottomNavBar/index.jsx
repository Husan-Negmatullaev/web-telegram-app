import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import Container from "../common/Container";
import styles from "./BottomNavBar.module.scss"

const BottomNavBar = () => {

  const activeStyle = {
    background: "linear-gradient(114.44deg, #624AF2 0%, #50DDC3 100%)",
    "WebkitBackgroundClip": "text",
    "MozBackgroundClip": "text",
    "backgroundClip": "text",
    "WebkitTextFillColor": "transparent",
  };

  return (
    <div className={styles.bottomNavBar}>
      <Container>
        <div className={styles.bottomNavBar__body}>
          <NavLink
            to="/"
            end
            className={clsx("_icon-home", styles.bottomNavBar__link)}
            style={({ isActive }) => isActive ? activeStyle : null}
          />
          <NavLink
            to="/favoruites"
            end
            className={clsx("_icon-bookmark", styles.bottomNavBar__link)}
            style={({ isActive }) => isActive ? activeStyle : null}
          />
        </div>
      </Container>
    </div>
  )
}

export default BottomNavBar;
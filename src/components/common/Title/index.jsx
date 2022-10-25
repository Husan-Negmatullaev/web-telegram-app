import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import clsx from "clsx";

import styles from "./Title.module.scss";

const Title = ({ children, classes }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isGoBack = !(pathname === "/favoruites" || pathname === "/")

  const goBack = () => {
    navigate(-1)
  };

  return (
    <div className={styles.block}>
      {isGoBack && <button onClick={goBack} className={clsx(styles.button, "_icon-angle-left")} />}
      <h2 className={clsx(styles.title, classes)}>
        {children}
      </h2>
    </div>
  )
}

export default Title

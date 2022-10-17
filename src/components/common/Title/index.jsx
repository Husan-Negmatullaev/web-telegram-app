import React from 'react'
import clsx from "clsx";

import styles from "./Title.module.scss";

const Title = ({ children, classes }) => {
  return (
    <h2 className={clsx(styles.title, classes)}>
      {children}
    </h2>
  )
}

export default Title

import React from 'react'
import clsx from "clsx";

import styles from "./Badge.module.scss";

const Badge = ({ title, classes }) => {
  return (
    <div className={clsx(styles.badge, classes)}>
      <span className={styles.badge__text}>{title}</span>
    </div>
  )
}

export default Badge;
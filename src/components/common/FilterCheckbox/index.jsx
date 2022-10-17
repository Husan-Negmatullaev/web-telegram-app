import React from "react";
import styles from "./FilterCheckbox.module.scss";

const FilterCheckbox = ({ label }) => {
  const id = React.useId();

  return (
    <label htmlFor={id} className={styles.checkbox}>
      <input className={styles.checkbox__input} type="checkbox" id={id} name="react" />
      <div className={styles.checkbox__content}>
        <p className={styles.checkbox__text}>{label}</p>
        <div className={styles.checkbox__indicator}>
          <span className="_icon-success"></span>
        </div>
      </div>
    </label>
  )
}

export default FilterCheckbox;
import React from "react";
import clsx from "clsx";
import styles from "./FilterCheckbox.module.scss";

const FilterCheckbox = ({ label }) => {
  const id = React.useId();
  const [isShake, setIsShake] = React.useState(false);
  const animateRef = React.useRef(null);

  const animate = () => {
    setIsShake(true);

    animateRef.current = setTimeout(() => setIsShake(false), 500);
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(animateRef.current);
    };
  }, [])

  return (
    <label onClick={animate} htmlFor={id} className={clsx(styles.checkbox, { [styles.checkbox_shake]: isShake })}>
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
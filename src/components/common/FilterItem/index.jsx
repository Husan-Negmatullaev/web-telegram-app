import React from 'react'
import clsx from "clsx";

import styles from "./FilterItem.module.scss";

const FilterItem = ({ filter }) => {
  const [isShake, setIsShake] = React.useState(false);
  const animateRef = React.useRef(null);

  const animate = () => {
    setIsShake(true);

    animateRef.current = setTimeout(() => setIsShake(false), 500);
  }

  React.useEffect(() => {

    return () => clearTimeout(animateRef.current);
  }, [])

  return (
    <li key={filter.id} className={styles.item}>
      <button
        type="button"
        className={clsx(styles.button, { [styles.button_shake]: isShake })}
        onClick={animate}
      >
        <span>{filter.label}</span>
      </button>
    </li>
  )
}

export default FilterItem;
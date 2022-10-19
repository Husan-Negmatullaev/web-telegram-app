import clsx from "clsx";

import styles from "./Button.module.scss";

const Button = ({ classes, text, ...props }) => {
  return (
    <button
      className={clsx(classes, styles.button)}
      {...props}
    >
      {text}
    </button>
  )
}

export {
  Button
};
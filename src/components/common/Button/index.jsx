import clsx from "clsx";

import styles from "./Button.module.scss";

const Button = ({ classes, text, ...props }) => {
  return (
    <button
      className={clsx(classes, styles.button)}
      type="button"
      {...props}
    >
      {text}
    </button>
  )
}

const ButtonTelLink = ({ classes, children, link, ...props }) => {
  const { openTelegramLink } = window.Telegram.WebApp;
  return (
    <button
      type="button"
      className={classes}
      onClick={() => openTelegramLink(link)}
      {...props}
    >
      {children}
    </button>
  );
};

const ButtonLink = ({ classes, children, link, ...props }) => {
  const { openLink } = window.Telegram.WebApp;
  return (
    <button
      type="button"
      className={classes}
      onClick={() => openLink(link)}
      {...props}
    >
      {children}
    </button>
  );
};

export {
  Button,
  ButtonTelLink,
  ButtonLink
};
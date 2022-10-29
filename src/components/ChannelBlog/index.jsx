import clsx from "clsx";
import { getDigFormat } from "../../helpers/functions";

import styles from "./ChannelBlog.module.scss";

const ChannelBlog = ({ subscribes_count, title, text, logo }) => {
  const baseUrl = "http://64.225.58.67:300";

  const formatSubscribeCount = getDigFormat(subscribes_count);

  return (
    <div className={styles.channelBlog}>
      <div className={styles.channelBlog__image}>
        <img src={baseUrl + logo} alt="" />
      </div>
      <div className={styles.channelBlog__content}>
        <div className={clsx(styles.channelBlog__subscribers, "_icon-profile")}>
          {formatSubscribeCount}
        </div>
        <h3 className={styles.channelBlog__title}>{title}</h3>
        <div className={styles.channelBlog__text}>
          <p>{text}</p>
        </div>
      </div>
      <div className={styles.channelBlog__icon}>
        <span className="_icon-arrow-right"></span>
      </div>
    </div>
  )
}

export default ChannelBlog;
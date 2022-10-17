import clsx from "clsx";

import img from "../../assets/img/01.png"
import styles from "./ChannelBlog.module.scss";

const ChannelBlog = ({ subscribers, title, text, imageUrl }) => {
  return (
    <div className={styles.channelBlog}>
      <div className={styles.channelBlog__image}>
        <img src={img} alt="" />
      </div>
      <div className={styles.channelBlog__content}>
        <div className={clsx(styles.channelBlog__subscribers, "_icon-profile")}>
          {subscribers}
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
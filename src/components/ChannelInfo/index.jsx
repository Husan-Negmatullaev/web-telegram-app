import clsx from "clsx";

import styles from './ChannelInfo.module.scss';

const ChannelInfo = () => {
  return (
    <div className={styles.channelContent__body}>
      <div className={styles.channelContent__actions}>
        <button type="button" className={styles.channelContent__action}>
          <span className={clsx(styles.channelContent__label, "_icon-arrow-right")}>ТГстат</span>
        </button>
        <button type="button" className={styles.channelContent__action}>
          <span className={clsx(styles.channelContent__label, "_icon-arrow-right")}>Телеметр</span>
        </button>
      </div>
      <div className={styles.channelContent__content}>
        <div className={styles.channelContent__data}>
          <span className={styles.channelContent__placeholder}>Охваты</span>
          <p className={styles.channelContent__text}>158K</p>
        </div>
        <div className={styles.channelContent__data}>
          <span className={styles.channelContent__placeholder}>ERR</span>
          <p className={styles.channelContent__text}>9</p>
        </div>
        <div className={styles.channelContent__data}>
          <span className={styles.channelContent__placeholder}>CPM</span>
          <p className={styles.channelContent__text}>700</p>
        </div>
      </div>
    </div>
  )
}

export default ChannelInfo;
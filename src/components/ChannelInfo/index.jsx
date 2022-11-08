import clsx from "clsx";
import { ButtonLink } from "../common/Button";

import styles from './ChannelInfo.module.scss';

const ChannelInfo = ({ tgstatLink, telemetrLink, cpm, err, coverage }) => {
  const formatter = Intl.NumberFormat("en", {
    notation: "compact"
  });

  return (
    <div className={styles.channelContent__body}>
      <div className={styles.channelContent__actions}>
        <ButtonLink link={tgstatLink} classes={styles.channelContent__action}>
          <span className={clsx(styles.channelContent__label, "_icon-arrow-right")}>ТГстат</span>
        </ButtonLink>
        <ButtonLink link={telemetrLink} classes={styles.channelContent__action}>
          <span className={clsx(styles.channelContent__label, "_icon-arrow-right")}>Телеметр</span>
        </ButtonLink>
      </div>
      <div className={styles.channelContent__content}>
        <div className={styles.channelContent__data}>
          <span className={styles.channelContent__placeholder}>Охваты</span>
          <p className={styles.channelContent__text}>{formatter.format(coverage)}</p>
        </div>
        <div className={styles.channelContent__data}>
          <span className={styles.channelContent__placeholder}>ERR</span>
          <p className={styles.channelContent__text}>{formatter.format(err)}</p>
        </div>
        <div className={styles.channelContent__data}>
          <span className={styles.channelContent__placeholder}>CPM</span>
          <p className={styles.channelContent__text}>{formatter.format(cpm)}</p>
        </div>
      </div>
    </div>
  )
}

export default ChannelInfo;
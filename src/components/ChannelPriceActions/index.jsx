import styles from "./ChannelPriceActions.module.scss";

const ChannelPriceActions = () => {
  return (
    <div className={styles.channel}>
      <div className={styles.channelPrice}>
        <div className={styles.channelPrice__content}>
          <h2 className={styles.channelPrice__title}>Стоимость</h2>
          <p className={styles.channelPrice__text}>за один рекламный пост</p>
        </div>
        <div className={styles.channelPrice__price}>
          <span>35 000 руб.</span>
        </div>
      </div>
      <div className={styles.channelActions}>
        <div className={styles.channelActions__body}>
          <button type="button" className={styles.channelActions__button}>
            <span>Связаться</span>
          </button>
          <button type="button" className={styles.channelActions__button}>
            <span>Поторговаться</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChannelPriceActions;
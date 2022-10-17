
import styles from "./GeoLocation.module.scss";

const GeoLocation = () => {
  return (
    <div className={styles.location}>
      <div className={styles.location__body}>
        <div className={styles.location__item}>
          <h2 className={styles.location__title}>
            Россия <span>70%</span>
          </h2>
          <div className={styles.location__statusbar}>
            <span style={{ width: "70%" }}></span>
          </div>
        </div>
        <div className={styles.location__item}>
          <h2 className={styles.location__title}>
            Украина <span>20%</span>
          </h2>
          <div className={styles.location__statusbar}>
            <span style={{ width: "20%" }}></span>
          </div>
        </div>
        <div className={styles.location__item}>
          <h2 className={styles.location__title}>
            Беларусь <span>5%</span>
          </h2>
          <div className={styles.location__statusbar}>
            <span style={{ width: "5%" }}></span>
          </div>
        </div>
        <div className={styles.location__item}>
          <h2 className={styles.location__title}>
            Узбекистан <span>5%</span>
          </h2>
          <div className={styles.location__statusbar}>
            <span style={{ width: "5%" }}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeoLocation;
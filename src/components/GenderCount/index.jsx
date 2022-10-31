import styles from "./GenderCount.module.scss";

const GenderCount = ({ woman, man }) => {

  return (
    <div className={styles.gender}>
      <div className={styles.gender__body}>
        <div className={styles.gender__item}>
          <h2 className={styles.gender__title}>Мужской <span>{man}%</span></h2>
          <div className={styles.gender__statusbar}>
            <span style={{ width: woman + "%", backgroundColor: "#0D56E1" }}></span>
          </div>
        </div>
        <div className={styles.gender__item}>
          <h2 className={styles.gender__title}>Женский <span>{woman}%</span></h2>
          <div className={styles.gender__statusbar}>
            <span style={{ width: man + "%", backgroundColor: "#25FCD5" }}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenderCount;
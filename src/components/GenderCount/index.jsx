import styles from "./GenderCount.module.scss";

const GenderCount = () => {
  return (
    <div className={styles.gender}>
      <div className={styles.gender__body}>
        <div className={styles.gender__item}>
          <h2 className={styles.gender__title}>Мужской <span>68%</span></h2>
          <div className={styles.gender__statusbar}>
            <span style={{ width: "68%", backgroundColor: "#0D56E1" }}></span>
          </div>
        </div>
        <div className={styles.gender__item}>
          <h2 className={styles.gender__title}>Мужской <span>32%</span></h2>
          <div className={styles.gender__statusbar}>
            <span style={{ width: "32%", backgroundColor: "#25FCD5" }}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenderCount;

import styles from "./GeoLocation.module.scss";

const GeoLocation = ({ countries }) => {

  return (
    <div className={styles.location}>
      <div className={styles.location__body}>
        {countries.map(country => {
          return (
            <div key={country.id} className={styles.location__item}>
              <h2 className={styles.location__title}>
                {country.title} <span>{country.traffic_percentage}%</span>
              </h2>
              <div className={styles.location__statusbar}>
                <span style={{ width: country.traffic_percentage + "%" }}></span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GeoLocation;
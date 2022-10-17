import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { advertisement } from "../../mocks/advertisement-data"
import logo from "../../assets/img/logo.png"
import 'swiper/css';
import styles from "./Advertisement.module.scss";

const AdvertisementSlider = () => {
  return (
    <div className={styles.advertisement}>
      <Swiper
        className={styles.advertisement__swiper}
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={"auto"}
        navigation
        scrollbar={{ draggable: true }}
      >
        {
          advertisement.map((obj, index) => {
            return (
              <SwiperSlide className={styles.advertisement__slide}>
                <div className={styles.advertisement__item}>
                  <div className={styles.advertisement__logo}>
                    <img src={logo} alt="" />
                  </div>
                  <h3 className={styles.advertisement__title}>{obj.title}</h3>
                  <p className={styles.advertisement__text}>{obj.text}</p>
                  <button type="button" class={styles.advertisement__link}>
                    <span>Смотреть полностью</span>
                  </button>
                </div>
                <div className={styles.advertisement__count}>
                  {index + 1} <span>из {advertisement.length}</span>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default AdvertisementSlider;
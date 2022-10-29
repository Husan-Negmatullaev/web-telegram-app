import { useNavigate } from "react-router-dom";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from "./Advertisement.module.scss";

const AdvertisementSlider = ({ ads }) => {
  const navigate = useNavigate();

  const handleClick = (obj) => {
    navigate("/posts/post", { state: { ...obj } })
  };

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
          ads.map((ad, index) => {
            const imageUrl = "http://64.225.58.67:300" + ad.icon;
            return (
              <SwiperSlide
                key={ad.id}
                className={styles.advertisement__slide}
                onClick={() => { }}
              >
                <div className={styles.advertisement__item}>
                  <div className={styles.advertisement__logo}>
                    <img src={imageUrl} alt="" />
                  </div>
                  <h3 className={styles.advertisement__title}>{ad.title}</h3>
                  <p className={styles.advertisement__text}>{ad.text}</p>
                  <button
                    type="button"
                    className={styles.advertisement__link}
                    onClick={() => handleClick(ad)}
                  >
                    <span>Смотреть полностью</span>
                  </button>
                </div>
                <div className={styles.advertisement__count}>
                  {index + 1} <span>из {ads.length}</span>
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
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { reviews } from "../../mocks/reviews-data"
import 'swiper/css';
import styles from "./ReviewsSlider.module.scss";

const ReviewsSlider = () => {
  return (
    <div className={styles.reviews}>
      <Swiper
        className={styles.reviews__swiper}
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={"auto"}
        navigation
        scrollbar={{ draggable: true }}
      >
        {
          reviews.map((obj, index) => {
            return (
              <SwiperSlide
                className={styles.reviews__slide}
                key={obj.id}
              >
                <div className={styles.reviews__item}>
                  <h3 className={styles.reviews__userName}>
                    переслано от <span>{obj.userName}</span>
                  </h3>
                  <p className={styles.reviews__text}>
                    {obj.text}
                  </p>
                </div>
                <div className={styles.reviews__count}>
                  <p>{index + 1} <span>из {reviews.length}</span></p>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default ReviewsSlider;
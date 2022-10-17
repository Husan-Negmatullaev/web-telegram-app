import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from "clsx";

import Title from "../common/Title"
import styles from "./SameChannelSlider.module.scss";
import img from "../../assets/img/02.png"

const SameChannelSlider = () => {
  return (
    <div className={styles.sameChannels}>
      <Title classes={styles.sameChannels__title}>Похожие каналы</Title>
      <Swiper
        className={styles.sameChannels__swiper}
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={"auto"}
        navigation
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className={styles.sameChannels__slide}>
          <button type="button" className={styles.sameChannels__item}>
            <div className={styles.sameChannels__image}>
              <img src={img} alt="" />
            </div>
            <div className={styles.sameChannels__content}>
              <h3 className={styles.sameChannels__subtitle}>Фигма — Макеты для верстки</h3>
              <div className={clsx(styles.sameChannels__subscribers, "_icon-profile")}>
                23 200
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className={styles.sameChannels__slide}>
          <button type="button" className={styles.sameChannels__item}>
            <div className={styles.sameChannels__image}>
              <img src={img} alt="" />
            </div>
            <div className={styles.sameChannels__content}>
              <h3 className={styles.sameChannels__subtitle}>Фигма — Макеты для верстки</h3>
              <div className={clsx(styles.sameChannels__subscribers, "_icon-profile")}>
                23 200
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className={styles.sameChannels__slide}>
          <button type="button" className={styles.sameChannels__item}>
            <div className={styles.sameChannels__image}>
              <img src={img} alt="" />
            </div>
            <div className={styles.sameChannels__content}>
              <h3 className={styles.sameChannels__subtitle}>Фигма — Макеты для верстки</h3>
              <div className={clsx(styles.sameChannels__subscribers, "_icon-profile")}>
                23 200
              </div>
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className={styles.sameChannels__slide}>
          <button type="button" className={styles.sameChannels__item}>
            <div className={styles.sameChannels__image}>
              <img src={img} alt="" />
            </div>
            <div className={styles.sameChannels__content}>
              <h3 className={styles.sameChannels__subtitle}>Фигма — Макеты для верстки</h3>
              <div className={clsx(styles.sameChannels__subscribers, "_icon-profile")}>
                23 200
              </div>
            </div>
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SameChannelSlider;
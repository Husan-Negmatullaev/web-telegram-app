import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from "clsx";

import Title from "../common/Title"
import styles from "./SameChannelSlider.module.scss";
import img from "../../assets/img/02.png"
import { getDigFormat } from '../../helpers/functions';

const SameChannelSlider = ({ sameChannels }) => {

  if (sameChannels.length === 0) {
    return <span>Null</span>
  }

  return (
    <div className={styles.sameChannels}>
      <div className={styles.sameChannels__title}>
        <Title>Похожие каналы</Title>
      </div>
      <Swiper
        className={styles.sameChannels__swiper}
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={"auto"}
        navigation
        scrollbar={{ draggable: true }}
      >
        {sameChannels.map(channel => {
          const imageUrl = "http://64.225.58.67:300" + channel.logo;
          return (
            <SwiperSlide key={channel.url} className={styles.sameChannels__slide}>
              <button type="button" className={styles.sameChannels__item}>
                <div className={styles.sameChannels__image}>
                  <img src={imageUrl} alt="" />
                </div>
                <div className={styles.sameChannels__content}>
                  <h3 className={styles.sameChannels__subtitle}>{channel.title}</h3>
                  <div className={clsx(styles.sameChannels__subscribers, "_icon-profile")}>
                    {getDigFormat(channel.subscribes_count)}
                  </div>
                </div>
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}

export default SameChannelSlider;
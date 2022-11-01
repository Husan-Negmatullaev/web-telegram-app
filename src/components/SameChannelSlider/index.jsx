import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import Title from "../common/Title"
import styles from "./SameChannelSlider.module.scss";
import { getDigFormat, getDigFromString } from '../../helpers/functions';

const SameChannelSlider = ({ sameChannels }) => {
  const navigate = useNavigate();

  if (sameChannels.length === 0) {
    return (
      <div className={styles.sameChannels}>
        <div className={styles.sameChannels__title}>
          <Title>Нет похожих каналов</Title>
        </div>
      </div>
    )
  }

  console.log(sameChannels);
  function redurectByChannelId(channelId) {
    navigate("/posts/channel/" + channelId);
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
          const imageUrl = "https://aviatatravel.com" + channel.logo;
          const channelId = getDigFromString(channel.url);
          console.log(channelId);
          return (
            <SwiperSlide key={channel.url} className={styles.sameChannels__slide}>
              <button
                onClick={() => redurectByChannelId(channelId)}
                type="button"
                className={styles.sameChannels__item}
              >
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
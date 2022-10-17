import React from 'react';
import clsx from "clsx";
import SimpleBar from 'simplebar-react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Badge from "../../components/common/Badge/Index";
import Container from "../../components/common/Container";
import ChannelInfo from '../../components/ChannelInfo';
import ChannelPriceActions from '../../components/ChannelPriceActions';
import GenderCount from '../../components/GenderCount';
import GeoLocation from '../../components/GeoLocation';
import ReviewsSlider from '../../components/ReviewsSlider';
import AdvertisementSlider from '../../components/AdvertisementSlider';

import styles from "./Channel.module.scss";
import SameChannelSlider from '../../components/SameChannelSlider';
import img from "../../assets/img/01.png";
import 'simplebar-react/dist/simplebar.min.css';

const Channel = () => {

  return (
    <div className={styles.channel}>
      <Tabs>
        <div className={styles.channelProfile}>
          <Container classes={styles.channelProfile__container}>
            <div className={styles.channelProfile__header}>
              <Badge
                title={"Дизайн"}
                classes={styles.channelProfile__badge}
              />
              <div className={styles.channelProfile__image}>
                <img src={img} alt="" />
              </div>
              <button type="button" className={clsx(styles.channelProfile__icon, "_icon-bookmark")} />
            </div>
            <div className={styles.channelProfile__content}>
              <h1 className={styles.channelProfile__title}>
                Логово дизайнера
              </h1>
              <div className={clsx(styles.channelProfile__subcribers, "_icon-profile")}>
                23 200
              </div>
              <p className={styles.channelProfile__text}>
                Все необходимые знания, навыки, тренды и полезные в работе инструменты для дизайнера.
              </p>
            </div>
            <div className={styles.channelProfile__body}>
              <TabList className={styles.channelProfile__tabList}>
                <Tab className={styles.channelProfile__item} selectedClassName={styles.channelProfile__item_active}>
                  Информация
                </Tab>
                <Tab className={styles.channelProfile__item} selectedClassName={styles.channelProfile__item_active}>
                  Стоимость
                </Tab>
              </TabList>
            </div>
          </Container>
        </div>
        <TabPanel>
          <div className={styles.channelContent}>
            <Container>
              <ChannelInfo />
            </Container>
          </div>
          <div className={styles.channelSwiper}>
            <Tabs>
              <Container classes={styles.channelSwiper__container}>
                <div className={styles.channelSwiperTabs}>
                  <SimpleBar style={{ maxWidth: 768 }}>
                    <TabList className={styles.channelSwiperTabs__list}>
                      <Tab className={styles.channelSwiperTabs__item} selectedClassName={styles.channelSwiperTabs__item_active}>
                        Пол
                      </Tab>
                      <Tab className={styles.channelSwiperTabs__item} selectedClassName={styles.channelSwiperTabs__item_active}>
                        Гео
                      </Tab>
                      <Tab className={styles.channelSwiperTabs__item} selectedClassName={styles.channelSwiperTabs__item_active}>
                        Отзывы
                      </Tab>
                      <Tab className={styles.channelSwiperTabs__item} selectedClassName={styles.channelSwiperTabs__item_active}>
                        Примеры рекламы
                      </Tab>
                    </TabList>
                  </SimpleBar>
                </div>
              </Container>
              <div className={styles.channelSwiperSlider}>
                <Container>
                  <TabPanel>
                    <GenderCount />
                  </TabPanel>
                  <TabPanel>
                    <GeoLocation />
                  </TabPanel>
                  <TabPanel>
                    <ReviewsSlider />
                  </TabPanel>
                  <TabPanel>
                    <AdvertisementSlider />
                  </TabPanel>
                </Container>
              </div>
            </Tabs>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={clsx(styles.channelContent, styles.channelContent_margin)}>
            <Container>
              <ChannelPriceActions />
            </Container>
          </div>
          <Container>
            <SameChannelSlider />
          </Container>
        </TabPanel>
      </Tabs>

    </div>
  )
}

export default Channel;
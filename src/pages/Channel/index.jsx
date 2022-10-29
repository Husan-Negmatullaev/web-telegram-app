import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import SameChannelSlider from '../../components/SameChannelSlider';
import { ButtonTelLink } from '../../components/common/Button';
import SkeletonChannel from './SkeletonChannel';
import { getDigFormat, isEmpty } from '../../helpers/functions';

import axios from "../../services/axios"
import styles from "./Channel.module.scss";
import 'simplebar-react/dist/simplebar.min.css';

const Channel = () => {
  const [channelData, setChannelData] = React.useState({});
  const [sameChannels, setSameChannels] = React.useState([]);
  const navigate = useNavigate();
  const { channelId } = useParams();

  const isChannelData = isEmpty(channelData);
  const channelImage = "http://64.225.58.67:300" + channelData.logo;

  const goBack = () => {
    navigate(-1);
  };

  React.useEffect(() => {
    fetchChannel(channelId);

    window.scrollTo(0, 0);
  }, [])

  async function fetchChannel(id) {
    const { data } = await axios.get(`/channels/${id}`);

    setChannelData(data.data);
    setSameChannels(data.similar_channels);
  }

  if (isChannelData) {
    return <SkeletonChannel />
  }

  return (
    <div className={styles.channel}>
      <Tabs className={styles.channel__tabs}>
        <div className={styles.channelProfile}>
          <Container classes={styles.channelProfile__container}>
            <div className={styles.channelProfile__header}>
              <div className={styles.channelProfile__actions}>
                <button onClick={goBack} type="button" className={clsx(styles.channelProfile__backIcon, "_icon-angle-left")} />
                <Badge
                  title={channelData.title}
                  classes={styles.channelProfile__badge}
                />
              </div>
              <ButtonTelLink
                link={channelData.telegram_link}
                classes={styles.channelProfile__image}
              >
                <img src={channelImage} alt="" />
              </ButtonTelLink>
              <button type="button" className={clsx(styles.channelProfile__icon, "_icon-bookmark")} />
            </div>
            <div className={styles.channelProfile__content}>
              <h1 className={styles.channelProfile__title}>
                {channelData.title}
              </h1>
              <div className={clsx(styles.channelProfile__subcribers, "_icon-profile")}>
                {getDigFormat(channelData.subscribes_count)}
              </div>
              <p className={styles.channelProfile__text}>
                {channelData.text}
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
              <ChannelInfo
                tgstatLink={channelData.tgstat_link}
                telemetrLink={channelData.telemetr_link}
                cpm={channelData.CPM}
                err={channelData.ERR}
                coverage={channelData.coverage}
              />
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
                    <GenderCount woman={channelData.woman} man={channelData.man} />
                  </TabPanel>
                  <TabPanel>
                    <GeoLocation countries={channelData.countries} />
                  </TabPanel>
                  <TabPanel>
                    <ReviewsSlider reviews={channelData.reviews} />
                  </TabPanel>
                  <TabPanel>
                    <AdvertisementSlider ads={channelData.ads_examples} />
                  </TabPanel>
                </Container>
              </div>
            </Tabs>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={clsx(styles.channelContent, styles.channelContent_margin)}>
            <Container>
              <ChannelPriceActions
                price={channelData.ads_price}
                contactNetwork={channelData.contact_for_network}
                contactSales={channelData.contact_for_sales}
              />
            </Container>
          </div>
          <Container>
            <SameChannelSlider sameChannels={sameChannels} />
          </Container>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Channel;
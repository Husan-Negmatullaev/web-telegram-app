import React from 'react';
import { useParams } from 'react-router-dom';
import clsx from "clsx";
import SimpleBar from 'simplebar-react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useSelector } from 'react-redux/es';

import Badge from "../../components/common/Badge/Index";
import Container from "../../components/common/Container";
import ChannelInfo from '../../components/ChannelInfo';
import ChannelPriceActions from '../../components/ChannelPriceActions';
import GenderCount from '../../components/GenderCount';
import ProgressBars from '../../components/ProgressBars';
import ReviewsSlider from '../../components/ReviewsSlider';
import AdvertisementSlider from '../../components/AdvertisementSlider';
import SameChannelSlider from '../../components/SameChannelSlider';
import { ButtonTelLink } from '../../components/common/Button';
import SkeletonChannel from './SkeletonChannel';

import { getDigFormat, getDigFromString, isEmpty } from '../../helpers/functions';
import { useNavigatePage } from '../../helpers/hooks/useNavigatePage';
import { selectUser } from '../../redux/slices/favorite/selectors';

import axios from "../../services/axios"
import styles from "./Channel.module.scss";
import 'simplebar-react/dist/simplebar.min.css';

const Channel = () => {
  const { userFavourites: { user, list } } = useSelector(selectUser);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [channelData, setChannelData] = React.useState({});
  const [sameChannels, setSameChannels] = React.useState([]);

  const { channelId } = useParams();
  const { goBack } = useNavigatePage();

  const channelImage = "https://aviatatravel.com" + channelData.logo;

  React.useEffect(() => {
    setChannelData({});
    fetchChannel(channelId);
    window.scrollTo(0, 0);

    if (list.length > 0) {
      const findFavorite = list.some(item => {
        return item.channels.find(channel => getDigFromString(channel.url) === Number(channelId));
      })
      setIsFavorite(findFavorite);
    }
  }, [channelId])

  async function fetchChannel(id) {
    const { data } = await axios.get(`/channels/${id}`);

    setChannelData(data.data);
    setSameChannels(data.similar_channels);
  };

  async function sendChannelData(user, channelId) {
    // console.log(user, channelId, "render");
    const bodyFormData = new FormData();
    bodyFormData.append("user_id", user);
    bodyFormData.append("channel_id", channelId);

    setIsLoading(true);

    try {
      if (list.length > 0 && isFavorite) {
        bodyFormData.append("method", "delete");

        await axios({
          method: "post",
          url: "/favorites/",
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
        });

        // console.log(user, channelId, "render and delete");
        setIsFavorite(false)
        return;
      }

      await axios({
        method: "post",
        url: "/favorites/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setIsFavorite(true)
      // console.log(user, channelId, "render and add");
    } catch (error) {
      console.log("Cant send data into into", error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isEmpty(channelData)) {
    return <SkeletonChannel />
  }

  return (
    <div className={clsx(styles.channel, "channel-page")}>
      <Tabs className={styles.channel__tabs}>
        <div className={styles.channelProfile}>
          <Container classes={styles.channelProfile__container}>
            <div className={styles.channelProfile__header}>
              <div className={styles.channelProfile__actions}>
                <button onClick={goBack} type="button" className={clsx(styles.channelProfile__backIcon, "_icon-angle-left")} />
                <Badge
                  title={channelData.category_name}
                  classes={styles.channelProfile__badge}
                />
              </div>
              <ButtonTelLink
                link={channelData.telegram_link}
                classes={styles.channelProfile__image}
              >
                <img src={channelImage} alt="" />
              </ButtonTelLink>
              {isLoading ?
                <div className={styles["lds-ring"]}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                :
                <button
                  type="button"
                  className={
                    clsx(styles.channelProfile__icon, "_icon-bookmark",
                      { [styles.channelProfile__icon_active]: isFavorite })
                  }
                  onClick={() => sendChannelData(user, channelData.id)}
                />}
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
                  ????????????????????
                </Tab>
                <Tab className={styles.channelProfile__item} selectedClassName={styles.channelProfile__item_active}>
                  ??????????????????
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
                        ??????
                      </Tab>
                      <Tab className={styles.channelSwiperTabs__item} selectedClassName={styles.channelSwiperTabs__item_active}>
                        ??????
                      </Tab>
                      <Tab className={styles.channelSwiperTabs__item} selectedClassName={styles.channelSwiperTabs__item_active}>
                        ??????????????
                      </Tab>
                      <Tab className={styles.channelSwiperTabs__item} selectedClassName={styles.channelSwiperTabs__item_active}>
                        ????????????
                      </Tab>
                      <Tab className={styles.channelSwiperTabs__item} selectedClassName={styles.channelSwiperTabs__item_active}>
                        ?????????????? ??????????????
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
                    <ProgressBars bars={channelData.countries} />
                  </TabPanel>
                  <TabPanel>
                    <ProgressBars bars={channelData.ages} />
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
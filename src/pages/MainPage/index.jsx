import React from 'react'
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux/es/';
import { fetchChannels } from '../../redux/slices/channels/asyncActions';
import { selectChannels } from '../../redux/slices/channels/selectors';
import { selectCategories } from '../../redux/slices/categories/selectors';

import Category from '../../components/Category';
import Container from '../../components/common/Container';
import Title from '../../components/common/Title';
import Channels from '../../components/Channels';
import SkeletonChannels from '../../components/Channels/SkeletonChannels';

import styles from "./MainPage.module.scss";

const tg = window.Telegram.WebApp;

const MainPage = () => {
  const dispatch = useDispatch();
  const { channels, status } = useSelector(selectChannels);
  const { categoriesId } = useSelector(selectCategories);
  const isFirstRender = React.useRef(false);
  const isSuccess = status === "success";

  React.useEffect(() => {
    if (channels.length === 0) {
      dispatch(fetchChannels(tg.initDataUnsafe?.user?.id || "503118393"));
    }
    window.scrollTo(0, 0);

    isFirstRender.current = true;
  }, [])

  React.useEffect(() => {
    if (channels.length > 0 && isFirstRender.current) {
      dispatch(fetchChannels(categoriesId));
    };
  }, [categoriesId])

  return (
    <div className={styles.mainPage}>
      <div className={styles.headerPage}>
        <Container>
          <div className={styles.actionTitle}>
            <Title classes={styles.actionTitle__content}>Категории</Title>
            <Link
              type="button"
              className={styles.actionTitle__button}
              to="/filter"
            >
              См. все
            </Link>
          </div>
        </Container>
        <Category />
      </div>
      <div className={styles.listChannel}>
        <Container classes={styles.listChannel__container}>
          <Title classes={styles.listChannel__title}>Список каналов</Title>
          <div className={styles.listChannel__body}>
            {
              isSuccess ?
                channels.map((obj) => (
                  <Channels
                    key={obj.id}
                    title={obj.title}
                    channels={obj.channels}
                    id={obj.id}
                  />
                ))
                :
                [...Array(2)].map((_, index) => <SkeletonChannels key={index} />)
            }
          </div>
        </Container>
      </div>
    </div>
  )
}

export default MainPage;

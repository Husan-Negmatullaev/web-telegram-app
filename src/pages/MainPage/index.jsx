import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux/es/';
import { fetchChannels } from '../../redux/slices/channels/asyncActions';
import { fetchCategories } from '../../redux/slices/categories/asyncActions';
import { selectChannels } from '../../redux/slices/channels/selectors';
import { selectCategories } from '../../redux/slices/categories/selectors';

import Category from '../../components/Category';
import Container from '../../components/common/Container';
import Title from '../../components/common/Title';
import Channels from '../../components/Channels';
import SkeletonChannels from '../../components/Channels/SkeletonChannels';

import styles from "./MainPage.module.scss";

const MainPage = () => {
  const dispatch = useDispatch();
  const { channels, status } = useSelector(selectChannels);
  const { categoriesId } = useSelector(selectCategories);
  const isSuccess = status === "success";

  React.useEffect(() => {
    dispatch(fetchChannels());
  }, [])

  React.useEffect(() => {
    const params = new URLSearchParams();

    categoriesId.forEach(category => {
      if (category) {
        params.append("filter", category);
      }
    });

    dispatch(fetchChannels(params));
  }, [categoriesId])

  return (
    <div className={styles.mainPage}>
      <div className={styles.headerPage}>
        <Container>
          <div className={styles.actionTitle}>
            <Title>Категории</Title>
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
                channels.map((obj) => {
                  return (
                    <Channels
                      key={obj.id}
                      title={obj.title}
                      channels={obj.channels}
                      id={obj.id}
                    />
                  )
                })
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

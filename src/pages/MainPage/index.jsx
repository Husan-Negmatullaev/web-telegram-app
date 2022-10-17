import React from 'react'
import { Link } from "react-router-dom";

import Categories from '../../components/Categories';
import Channels from '../../components/Channels';
import Container from '../../components/common/Container';
import Title from '../../components/common/Title';
import styles from "./MainPage.module.scss";

import { list } from "../../mocks/channel-list";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.headerPage}>
        <Container classes={styles.headerPage__container}>
          <div className={styles.actionTitle}>
            <Title>Категории</Title>
            <Link
              type="button"
              className={styles.actionTitle__button}
              to="/posts/filter"
            >
              См. все
            </Link>
          </div>
        </Container>
        <Categories />
      </div>
      <div className={styles.listChannel}>
        <Container classes={styles.listChannel__container}>
          <Title classes={styles.listChannel__title}>Список каналов</Title>
          <div className={styles.listChannel__body}>
            {list.map((obj, index) => {
              return (
                <Channels
                  key={index}
                  title={obj.title}
                  data={obj.data}
                />
              )
            })}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default MainPage;

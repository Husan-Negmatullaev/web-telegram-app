import React from "react";
// import { Link } from "react-router-dom";

// import ChannelBlog from "../../components/ChannelBlog";
import Channels from "../../components/Channels";
// import Badge from "../../components/common/Badge/Index";
import Container from "../../components/common/Container";
import Title from "../../components/common/Title";

import { list } from "../../mocks/channel-list";
import styles from "./Favourites.module.scss";

const Favourites = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.listChannel}>
      <Container classes={styles.listChannel__container}>
        <Title classes={styles.listChannel__title}>Избранные каналы</Title>
        <div className={styles.listChannel__body}>
          {list.map((obj) => {
            return (
              <Channels
                key={obj.id}
                title={obj.title}
                channels={obj.channels}
                id={obj.id}
              />
            )
          })}
        </div>
      </Container>
    </div >
  )
}

export default Favourites;
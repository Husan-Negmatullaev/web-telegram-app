import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import Channels from "../../components/Channels";
import Container from "../../components/common/Container";
import Title from "../../components/common/Title";
import { fetchFavorites } from "../../redux/slices/favorite/asyncActions";
import { selectUser } from "../../redux/slices/favorite/selectors";

// import { list } from "../../mocks/channel-list";
import styles from "./Favourites.module.scss";
import SkeletonChannels from "../../components/Channels/SkeletonChannels";

const Favourites = () => {
  const dispatch = useDispatch();

  const {
    userFavourites: { list, user },
    status
  } = useSelector(selectUser);

  React.useEffect(() => {
    dispatch(fetchFavorites(user));
    window.scrollTo(0, 0)
  }, [])

  if (list.length === 0 && status === "success") {
    return <div className={styles.listChannel}>
      <Container classes={styles.listChannel__container}>
        <Title classes={styles.listChannel__title}>Вы ничего не выбрали!</Title>
      </Container>
    </div>
  };

  return (
    <div className={styles.listChannel}>
      <Container classes={styles.listChannel__container}>
        <Title classes={styles.listChannel__title}>Избранные каналы</Title>
        <div className={styles.listChannel__body}>
          {
            list.length > 0 ?
              list.map((obj) => {
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
    </div >
  )
}

export default Favourites;
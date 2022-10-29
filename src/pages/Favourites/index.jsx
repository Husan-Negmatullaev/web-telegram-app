import { Link } from "react-router-dom";

import ChannelBlog from "../../components/ChannelBlog";
import Badge from "../../components/common/Badge/Index";
import Container from "../../components/common/Container";
import Title from "../../components/common/Title";

import { list } from "../../mocks/channel-list";
import styles from "./Favourites.module.scss";

const Favourites = () => {
  return (
    <div className={styles.listChannel}>
      <Container classes={styles.listChannel__container}>
        <Title classes={styles.listChannel__title}>Избранные каналы</Title>
        <div className={styles.listChannel__body}>
          {list.map((obj, index) => {
            return (
              <div className={styles.channels}>
                <Badge
                  className={styles.channels__badge}
                  title={obj.title}
                />
                <div className={styles.channels__body}>
                  <Link key={obj.id} to={`/posts/channel/${obj.id}`}>
                    <ChannelBlog
                      subscribers={obj.subscribers}
                      title={obj.title}
                      text={obj.text}
                      imageUrl={obj.imageUrl}
                    />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div >
  )
}

export default Favourites;
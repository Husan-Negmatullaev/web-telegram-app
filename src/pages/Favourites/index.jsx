
import Channels from "../../components/Channels";
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
              <Channels
                key={index}
                title={obj.title}
                data={obj.data}
              />
            )
          })}
        </div>
      </Container>
    </div >
  )
}

export default Favourites;
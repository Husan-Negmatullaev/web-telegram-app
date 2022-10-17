import { Link } from "react-router-dom";

import ChannelBlog from "../ChannelBlog";
import Badge from "../common/Badge/Index";
import styles from "./Channels.module.scss";

const Channels = ({ title, data }) => {

  return (
    <div className={styles.channels}>
      <Badge
        className={styles.channels__badge}
        title={title}
      />
      <div className={styles.channels__body}>
        {
          data.map(obj => {
            return (
              <Link
                key={obj.id}
                to={`/posts/channel/${obj.id}`}
              >
                <ChannelBlog
                  subscribers={obj.subscribers}
                  title={obj.title}
                  text={obj.text}
                  imageUrl={obj.imageUrl}
                />
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Channels;
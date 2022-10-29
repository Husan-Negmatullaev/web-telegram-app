import React from 'react'
import { Link } from "react-router-dom";

import Badge from '../../components/common/Badge/Index';
import ChannelBlog from '../../components/ChannelBlog';

import styles from "./Channels.module.scss";
import { getDigFromString } from '../../helpers/functions';

const Channels = ({ title, channels }) => {
  return (
    <div className={styles.channels}>
      <Badge
        className={styles.channels__badge}
        title={title}
      />
      <div className={styles.channels__body}>
        {channels.map((channel) => {
          const idUrl = getDigFromString(channel.url);
          return (
            <Link key={channel.logo} to={`/posts/channel/${idUrl}`}>
              <ChannelBlog
                {...channel}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Channels

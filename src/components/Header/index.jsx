import React from 'react'
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import clsx from 'clsx';

import styles from "./Header.module.scss";
import Container from '../common/Container';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { channelId, postId } = useParams();
  const isChannelPage = pathname === `/posts/channel/${channelId}`;
  const isPostPage = pathname === `/posts/${postId}`;
  const isFilterPage = pathname === "/posts/filter";
  const isGoBack = !(pathname === "/posts/filter" || isChannelPage || isPostPage);

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className={clsx(styles.header, { [styles.header_channel]: isChannelPage })}>
      <Container classes={styles.header__container}>
        <div className={styles.header__body}>
          <button type="button" className={styles.header__button} disabled={isGoBack} onClick={goBack}>
            {isGoBack ? 'Отмена' : 'Назад'}
          </button>
          <Link to="/" className={styles.header__logo}>
            Name
          </Link>
          <div className={styles.header__menu}>
            {isFilterPage || <button
              type="button"
              className={
                clsx(styles.header__button_icon, "_icon-menu")
              }
            />}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header;
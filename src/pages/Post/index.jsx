import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import clsx from "clsx";

import Container from "../../components/common/Container";

import styles from "./Post.module.scss";

const Post = () => {
  const navigate = useNavigate();
  const { state: { title, text, photo } } = useLocation();

  const imageUrl = "http://64.225.58.67:300" + photo;

  const goBack = () => {
    navigate(-1);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.post}>
      <Container>
        <button onClick={goBack} type="button" className={clsx(styles.post__backIcon, "_icon-angle-left")} />
        <div className={styles.post__image}>
          <img src={imageUrl} alt="" />
        </div>
        <h1 className={styles.post__title}>{title}</h1>
        <div className={styles.post__text}>
          <p>{text}</p>
        </div>
      </Container>
    </div>
  )
}

export default Post;
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import Container from "../../components/common/Container";

import img from "../../assets/img/05.png"
import styles from "./Post.module.scss";

const Post = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.post}>
      <Container>
        <button onClick={goBack} type="button" className={clsx(styles.post__backIcon, "_icon-angle-left")} />
        <div className={styles.post__image}>
          <img src={img} alt="" />
        </div>
        <h1 className={styles.post__title}>Хотите сменить работу и перейти в IT?</h1>
        <div className={styles.post__text}>
          <p>Попробуйте себя в роли продуктового дизайнера.</p>
          <p>Продуктовый дизайнер работает с диджитал-продуктом — сайтом или приложением. Он исследует аудиторию, создает внешний вид сервиса, помогает с продвижением и анализирует результаты. Это востребованная профессия: за 2021 год — всего 600 резюме на 1700 вакансий.</p>
          <p>На курсе Яндекс Практикума «Продуктовый дизайнер» вы:</p>
          <p>
            — изучите дизайн и научитесь работать в Figma;
            — узнаете, как проводить исследования аудитории;
            — создадите продукт с нуля.
          </p>
          <p>Оттачивать навыки вы будете на реальных задачах и накопите сильные кейсы. Пройти путь до первого портфолио помогут эксперты: они проверят работы, проведут мастер-классы и поддержат вас. А ещё помогут составить резюме и сориентируют на рынке труда.</p>
          <p>Не уверены, подходит ли вам профессия? Страшно начинать новое? На курсе есть бесплатная вводная часть:  сделайте первый проект — дизайн музыкального плеера — и получите обратную связь.</p>
        </div>
        <button type="button" className={styles.post__link}>Начать учиться</button>
      </Container>
    </div>
  )
}

export default Post;
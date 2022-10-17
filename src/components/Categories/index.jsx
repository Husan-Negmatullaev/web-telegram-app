import SimpleBar from 'simplebar-react';
import clsx from "clsx"

import Container from '../common/Container';
import 'simplebar-react/dist/simplebar.min.css';
import styles from "./Categories.module.scss"

const Categories = () => {
  return (
    <div className={styles.categories}>
      <Container classes={styles.categories__container}>
        <SimpleBar style={{ maxWidth: 768 }}>
          <ul className={styles.categories__list}>
            <li className={clsx(styles.categories__item, "Categories__active__1Ojoy")}>
              <button type="button" className={styles.categories__button}>
                <span>Все</span>
              </button>
            </li>
            <li className={styles.categories__item}>
              <button type="button" className={styles.categories__button}>
                <span>Дизайн</span>
              </button>
            </li>
            <li className={styles.categories__item}>
              <button type="button" className={styles.categories__button}>
                <span>Образование</span>
              </button>
            </li>
            <li className={styles.categories__item}>
              <button type="button" className={styles.categories__button}>
                <span>IT, Технологии</span>
              </button>
            </li>
          </ul>
        </SimpleBar>
      </Container>
    </div>
  )
}

export default Categories;
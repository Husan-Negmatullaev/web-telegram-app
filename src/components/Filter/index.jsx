import React from "react";
import SimpleBar from 'simplebar-react';
import clsx from "clsx"

import Container from '../common/Container';
import styles from "./Filter.module.scss"
import 'simplebar-react/dist/simplebar.min.css';
import { filterListBtn } from "../../mocks/filter-list";

const Filter = () => {
  // const [isActive, setIsActive] = React.useState(1);

  return (
    <div className={styles.categories}>
      <Container classes={styles.categories__container}>
        <SimpleBar style={{ maxWidth: 768 }}>
          <ul className={styles.categories__list}>
            {
              filterListBtn.map((fitler) => {
                return (
                  <li key={fitler.name} className={styles.categories__item}>
                    <button
                      type="button"
                      className={clsx(styles.categories__button, styles.categories__button_active)}
                    >
                      <span>{fitler.label}</span>
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </SimpleBar>
      </Container>
    </div>
  )
}

export default Filter;
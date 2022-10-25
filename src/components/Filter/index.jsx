import React from "react";
import SimpleBar from 'simplebar-react';

import Container from '../common/Container';
import FilterItem from "../common/FilterItem";

import 'simplebar-react/dist/simplebar.min.css';
import styles from "./Filter.module.scss"
import { filterListBtn } from "../../mocks/filter-list";

const Filter = () => {
  return (
    <div className={styles.categories}>
      <Container classes={styles.categories__container}>
        <SimpleBar style={{ maxWidth: 768 }}>
          <ul className={styles.categories__list}>
            {
              filterListBtn.map((filter) => {
                return (
                  <FilterItem key={filter.id} filter={filter} />
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
import React from 'react'

import Container from '../../components/common/Container';
import FilterCheckbox from '../../components/common/FilterCheckbox';
import Title from '../../components/common/Title';
import styles from "./FilterPage.module.scss";

import { filterList } from "../../mocks/filter-list"

const FilterPage = () => {
  return (
    <div className={styles.filterPage}>
      <Container>
        <div className={styles.filterPage__header}>
          <Title>Отображать</Title>
        </div>
      </Container>
      <form className={styles.filterPageForm}>
        <Container>
          <div className={styles.filterPageForm__body}>
            {
              filterList.map((obj) => {
                return <FilterCheckbox
                  label={obj.label}
                  key={obj.id}
                />
              })
            }
          </div>
        </Container>
      </form>
    </div>
  )
}

export default FilterPage;

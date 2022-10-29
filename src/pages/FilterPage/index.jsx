import React from 'react';
import { useSelector } from 'react-redux/es/exports';

import Container from '../../components/common/Container';
import FilterCheckbox from '../../components/common/FilterCheckbox';
import Title from '../../components/common/Title';
import { Button } from '../../components/common/Button';
import { selectCategories } from '../../redux/slices/categories/selectors';

import styles from "./FilterPage.module.scss";

const FilterPage = () => {
  const { categories, categoriesId } = useSelector(selectCategories);

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
            <FilterCheckbox
              label={"Все"}
              idCategory={0}
              categoriesId={categoriesId}
            />
            {categories.map((obj) => {
              return <FilterCheckbox
                key={obj.id}
                label={obj.title}
                idCategory={obj.id}
                categoriesId={categoriesId}
              />
            })}
          </div>
          <Button
            text={"Применить"}
            classes={styles.filterPageForm__button}
          />
        </Container>
      </form>
    </div>
  )
}

export default FilterPage;

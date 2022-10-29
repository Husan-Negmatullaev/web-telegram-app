import React from "react";
import SimpleBar from 'simplebar-react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories } from '../../redux/slices/categories/selectors';
import { fetchCategories } from "../../redux/slices/categories/asyncActions";

import Container from '../common/Container';
import CategoryItem from "../common/CategoryItem";

import 'simplebar-react/dist/simplebar.min.css';
import styles from "./Category.module.scss"

const Category = () => {
  const { categories, status } = useSelector(selectCategories);
  const dispatch = useDispatch();
  const isSucces = status === "success";

  React.useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <div className={styles.categories}>
      <Container classes={styles.categories__container}>
        <SimpleBar style={{ maxWidth: 768 }}>
          <ul className={styles.categories__list}>
            <CategoryItem
              category={{ title: "Все", id: 0 }}
            />
            {isSucces ?
              categories.map((category) => {
                return (
                  <CategoryItem
                    key={category.id}
                    category={category}
                  />
                )
              })
              :
              null}
          </ul>
        </SimpleBar>
      </Container>
    </div>
  )
}

export default Category;
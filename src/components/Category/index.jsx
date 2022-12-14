import React from "react";
import SimpleBar from 'simplebar-react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories } from '../../redux/slices/categories/selectors';
import { fetchCategories } from "../../redux/slices/categories/asyncActions";

import Container from '../common/Container';
import CategoryItem from "../common/CategoryItem";
import { useHorizontalScroll } from "../../helpers/hooks/useHorizontalScroll";

import 'simplebar-react/dist/simplebar.min.css';
import styles from "./Category.module.scss"

const Category = () => {
  const { categories, categoriesId, status } = useSelector(selectCategories);
  const simpleBarRef = React.useRef(null);
  const dispatch = useDispatch();
  const isSucces = status === "success";

  React.useEffect(() => {
    dispatch(fetchCategories())
  }, []);

  React.useEffect(() => {
    // console.log(simpleBarRef.current);
  }, []);

  return (
    <div className={styles.categories}>
      <Container classes={styles.categories__container}>
        <SimpleBar ref={simpleBarRef} style={{ maxWidth: 768 }}>
          <ul className={styles.categories__list}>
            <CategoryItem
              category={{ title: "Все", id: 0 }}
              categoriesId={categoriesId}
            />
            {isSucces ?
              categories.map((category) => {
                return (
                  <CategoryItem
                    key={category.id}
                    category={category}
                    categoriesId={categoriesId}
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
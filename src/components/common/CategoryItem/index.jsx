import React from 'react'
import clsx from "clsx";
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../../../redux/slices/categories/selectors';

import { addCategoryId } from '../../../redux/slices/categories/slice';
// import { selectCategoryId } from '../../../redux/slices/categories/selectors';

import styles from "./CategoryItem.module.scss";

const CategoryItem = ({ category }) => {
  const dispatch = useDispatch();
  const { categoriesId } = useSelector(selectCategories);

  const isCurrentCategory = categoriesId.some(el => el === category.id)

  const handleClick = () => {
    dispatch(addCategoryId(category.id))
  }

  return (
    <>
      <li className={styles.item}>
        <button
          type="button"
          className={clsx(styles.button, { [styles.button_active]: isCurrentCategory })}
          onClick={handleClick}
        >
          <span>{category.title}</span>
        </button>
      </li>
    </>
  )
}

export default CategoryItem;
import React from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux/es/exports";
import { addCategoryId } from "../../../redux/slices/categories/slice";

import styles from "./FilterCheckbox.module.scss";

const FilterCheckbox = ({ label, idCategory, categoriesId }) => {
  const dispatch = useDispatch();

  const formId = React.useId();
  const inputRef = React.useRef(null);

  const handleClick = () => {
    dispatch(addCategoryId(idCategory));
  };

  React.useEffect(() => {
    inputRef.current.checked = categoriesId.includes(idCategory);
  }, []);

  return (
    <label className={clsx(styles.checkbox)}>
      <input ref={inputRef} className={styles.checkbox__input} type="checkbox" id={formId} name="react" />
      <div onClick={handleClick} className={styles.checkbox__content}>
        <p className={styles.checkbox__text}>{label}</p>
        <div className={styles.checkbox__indicator}>
          <span className="_icon-success"></span>
        </div>
      </div>
    </label>
  )
};

export default FilterCheckbox;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from './../../redux/selectors';
import { setStatusFilter } from '../../redux/filterSlice';
import style from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={style.filterLabel}>
      Find contacts by name
      <input
        className={style.filterInput}
        type="text"
        value={value}
        onChange={e => dispatch(setStatusFilter(e.target.value.toLowerCase()))}
      />
    </label>
  );
};
export default Filter;

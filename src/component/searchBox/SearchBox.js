import React, { Fragment } from 'react';
import './style.css';

const SearchBox = ({ placeholder, searchInput }) => {
  return (
    <Fragment>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={searchInput}
      />
    </Fragment>
  );
};
export default SearchBox;

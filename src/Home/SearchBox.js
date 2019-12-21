import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  searchContainer: {
    padding: '.5rem'
  },
  searchInput: {
    padding: '1rem',
    backgroundColor: '#cdecff',
    borderStyle: 'solid',
    borderWidth: '1px'
  }
}));

const SearchBox = ({ searchChange }) => {
  const classes = useStyles();
  const { searchContainer, searchInput } = classes;

  return (
    <div className={searchContainer}>
      <input
        type="search"
        className={searchInput}
        placeholder="Search games"
        onChange={e => searchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

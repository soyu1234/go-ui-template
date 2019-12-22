// package imports
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { useGameCollection } from '../Hook/index';

// component imports
import { Card } from '../Card/index';

// util imports
import LayoutFeatures from '../constants/constants';

const useStyles = makeStyles(() => ({
  fewCardsBox: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    overflow: 'auto',
    '& > div': {
      flex: '0 0 33.3%',
      maxWidth: 'none',
      border: '0',
      height: '50%',
      maxHeight: '50%'
    },
    '& > :nth-child(4)': {
      flex: '0 0 50%'
    },
    '& > :nth-child(5)': {
      flex: '0 0 50%'
    }
  },
  hundredCardsBox: {
    overflow: 'scroll',
    border: '5px solid black',
    height: '800px'
  }
}));

const List = props => {
  const classes = useStyles();
  const { fewCardsBox, hundredCardsBox } = classes;

  const { collection, layout, searchResult } = props;
  const list = useGameCollection(collection);

  // it filters games by taking search result of search bar.
  const filteredGames = list.filter(game =>
    game.title.toLowerCase().includes(searchResult.toLowerCase())
  );

  return (
    // check layout first, then apply correct css styling
    <div className={layout === LayoutFeatures.LESS_AMOUNT_OF_CARDS ? fewCardsBox : hundredCardsBox}>
      {filteredGames.map((item, index) => (
        <Card data={item} key={index} index={index} layout={layout} />
      ))}
    </div>
  );
};

export default List;

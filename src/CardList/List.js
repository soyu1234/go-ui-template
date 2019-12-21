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
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
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

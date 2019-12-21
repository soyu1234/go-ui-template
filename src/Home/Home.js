// package imports
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// component imports
import { List } from '../CardList/index';
import SearchBox from './SearchBox';

// util imports
import { useGameCollectionRSS } from '../Hook/index';
import LayoutFeatures from '../constants/constants';

const useStyles = makeStyles(() => ({
  // this layout will be using in 5 game cards story component.
  fewCardsLayout: {
    margin: '0',
    height: '100%',
    overflow: 'hidden',
    flexDirection: 'column',
    overflowY: 'auto',
    fontFamily: 'Source Code Pro, monospace'
  },
  // this layout will be using in 100 game cards story component.
  hundredCardsLayout: {
    margin: '0',
    padding: '0',
    textAlign: 'center',
    background: 'linear-gradient(to left, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%)',
    overflowY: 'auto',
    height: '100%'
  }
}));

function Home(props) {
  const classes = useStyles();
  const { data, layout } = props;

  // receives the future from stories list, updates layout regarding to related layout.
  const root =
    layout === LayoutFeatures.LESS_AMOUNT_OF_CARDS
      ? classes.fewCardsLayout
      : classes.hundredCardsLayout;

  const { game } = data;

  const collection = useGameCollectionRSS(game);

  // define searchField state. SearchBox component uses and updates it on every change.
  const [searchField, setSearchField] = useState('');

  return (
    // check layout, then decide whether render search box or not.
    <div className={root}>
      {layout === LayoutFeatures.MUCH_AMOUNT_OF_CARDS ? (
        <SearchBox searchChange={setSearchField} />
      ) : null}
      <List collection={collection} layout={layout} searchResult={searchField} />
    </div>
  );
}

export default Home;

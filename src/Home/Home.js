import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '../CardList/index';
import { useGameCollectionRSS } from '../Hook/index';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0',
    height: '100%',
    overflow: 'hidden',
    flexDirection: 'column',
    overflowY: 'auto',
    fontFamily: 'Source Code Pro, monospace'
  }
}));

function Home(props) {
  const classes = useStyles();
  const { root } = classes;

  const { data } = props;
  const { game } = data;

  const collection = useGameCollectionRSS(game);

  return (
    <div className={root}>
      <List collection={collection} />
    </div>
  );
}

export default Home;

// library imports
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

import { useCard } from '../Hook/index';

// component imports
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

// util imports
import LayoutFeatures from '../constants/constants';

const useStyles = makeStyles(() => ({
  ////  styles of five cards story component starts below ////
  // Card element styles.
  item: {
    overflow: 'hidden',
    color: 'white',
    background: 'black',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '240px',
    position: 'relative',
    '& > img': {
      width: '100%',
      height: '100%'
    },

    '&:hover': {
      cursor: 'pointer',
      '& > img': {
        transform: 'scale(1.1)',
        transition: 'transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95)'
      }
    }
  },
  // Style for game title.
  content: {
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -20%)',
    position: 'absolute',
    color: '#313632',
    fontWeight: '700',
    textAlign: 'center',
    alignItems: 'center'
  },
  button: {
    borderRadius: '20px',
    border: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'none',
    outline: 'none',
    '&:hover': {
      color: 'white'
    }
  },
  playButton: {
    fontSize: '70px',
    textAlign: 'center',

    '&:hover': {
      color: 'red'
    }
  },
  arrowDownButton: {
    fontSize: '30px'
  },
  arrowUpButton: {
    fontSize: '30px',
    color: '#fdfdfd',
    '&:hover': {
      color: 'black'
    }
  },

  ////  styles of five cards story component eds here ////
  ////  hundred card layout styles starts below ////
  hundredCard: {
    textAlign: 'center',
    margin: '.5rem',
    padding: '1rem',
    display: 'inline-block',
    boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )',
    borderWidth: '.25rem',
    borderRadius: '.5rem',
    backfaceVisibility: 'hidden',

    '&:hover': {
      transform: 'translateZ( 0 )',
      transition: 'transform .25s ease-out, -webkit-transform .25s ease-out'
    }
  },
  hundredCardImg: {
    width: '300px',
    height: '300px'
  }
}));

const Card = props => {
  const classes = useStyles();
  const {
    item,
    content,
    button,
    playButton,
    arrowDownButton,
    hundredCard,
    hundredCardImg,
    arrowUpButton
  } = classes;

  const { data, layout } = props;
  const card = useCard(data);

  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  // it checks opacity of the card. Card turns to opaque(1) if its value is true, transparent otherwise(0.7)
  const [hovered, setHovered] = useState(false);
  // shows description of the game when it's true.
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const { url, header } = card;
    setUrl(url);
    setTitle(header);
  }, [card]);
  // check layout and decide whether render 5 cards layout or 100 cards layout.
  // Best practice is to create separate components, however I did not want to create different components for both 5 cards and 100 cards, since project scope finishes here and project won't get more complicated than this.
  return layout === LayoutFeatures.LESS_AMOUNT_OF_CARDS ? (
    <div
      className={item}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      style={hovered ? { opacity: 1 } : { opacity: 0.5 }}>
      <img src={url} style={showDescription ? { opacity: 0.4 } : null} />
      {setHovered ? (
        <div className={content}>
          <a href={data.url}>
            <PlayCircleFilledIcon className={playButton} />
          </a>
          <h2>{!showDescription ? title : null}</h2>
          <span className={button} onClick={() => setShowDescription(!showDescription)}>
            {!showDescription ? (
              <ArrowDownwardIcon className={arrowDownButton} />
            ) : (
              <ArrowUpwardIcon className={arrowUpButton} />
            )}
          </span>
          {showDescription ? (
            <p style={{ color: '#fdfdfd' }}>{data.description.substring(0, 75) + '...'}</p>
          ) : null}
        </div>
      ) : null}
    </div>
  ) : (
    <div className={hundredCard}>
      <img src={url} className={hundredCardImg} />
      <a href={data.url} style={{ display: 'flow-root', color: 'yellow' }}>
        <PlayCircleFilledIcon className={playButton} />
      </a>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;

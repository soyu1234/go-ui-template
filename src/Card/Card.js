import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { useCard } from '../Hook/index';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const useStyles = makeStyles(() => ({
  // Card element styles.
  item: {
    height: '50vh',
    width: 'calc(100% / 3)',
    border: '1px solid white',
    display: 'block',
    padding: 0,
    overflow: 'hidden',
    position: 'relative',
    boxSizing: 'border-box',
    alignItems: 'center',
    textAlign: 'center',
    '&:nth-child(4)': {
      width: '50%'
    },
    '&:nth-child(5)': {
      width: '50%'
    },
    '&:hover': {
      cursor: 'pointer',
      '& > img': {
        transform: 'scale(1.1)',
        transition: 'transform 1.5s cubic-bezier(0.25, 0.45, 0.45, 0.95)'
      }
    }
  },

  // Style for game title.
  content: {
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -20%)',
    position: 'absolute',
    // fontSize: '22px',
    color: '#313632',
    fontWeight: '700'
  },
  button: {
    borderRadius: '20px',
    border: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    color: 'black',
    fontWeight: 'bold',
    textDecoration: 'none',
    outline: 'none',
    '&:hover': {
      color: 'white'
    }
  },
  playButton: {
    fontSize: '50px',
    '&:hover': {
      color: 'red'
    }
  },
  arrowButton: {
    fontSize: '30px'
  }
}));

const Card = props => {
  const classes = useStyles();
  const { item, content, button, playButton, arrowButton } = classes;

  const { data } = props;
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
  return (
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
              <ArrowDownwardIcon className={arrowButton} />
            ) : (
              <ArrowUpwardIcon className={arrowButton} />
            )}
          </span>
          {showDescription ? <p>{data.description.substring(0, 75) + '...'}</p> : null}
        </div>
      ) : null}
    </div>
  );
};

export default Card;

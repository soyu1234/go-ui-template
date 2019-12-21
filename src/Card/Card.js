import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { useCard } from '../Hook/index';

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
        transition: 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)'
      }
    }
  },

  // Style for game title.
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute'
  }
}));

const Card = props => {
  const classes = useStyles();
  const { item, content } = classes;

  const { data } = props;
  const card = useCard(data);

  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  // it checks opacity of the card. Card turns to opaque(1) if its value is true, transparent otherwise(0.7)
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const { url, header } = card;
    setUrl(url);
    setTitle(header);
  }, [card]);
  return (
    <a
      className={item}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      style={hovered ? { opacity: 1 } : { opacity: 0.7 }}>
      <img src={url} />
      <div className={content}>{title}</div>
    </a>
  );
};

export default Card;

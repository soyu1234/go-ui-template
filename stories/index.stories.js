import React from 'react';
import { storiesOf } from '@storybook/react';
import { Home } from '../src/Home/index';
import '@storybook/addon-viewport/register';
import data from './data';

storiesOf('Home', module).add('default', () => {
  // Create new object from original data with different reference, so actual data won't be corrupted.
  const lessData = { ...data };
  lessData.game.amount = 5;
  return <Home data={lessData} />;
});

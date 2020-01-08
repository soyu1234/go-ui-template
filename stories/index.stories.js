// library import section
import React from 'react';
import { storiesOf } from '@storybook/react';
import '@storybook/addon-viewport/register';
// component import section
import { Home } from '../src/Home/index';
import { Footer } from '../src/Footer';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-github';


// utils imports section
import LayoutFeatures from '../src/constants/constants';
import data from './data';

// storiesOf('Home', module).add('5 in 1', () => {
//   // Create new object from original data with different reference, so actual data won't be corrupted.
//   const lessData = { ...data };
//   lessData.game.amount = 5;
//   console.log(LayoutFeatures.LESS_AMOUNT_OF_CARDS);
//   return <Home data={lessData} layout={LayoutFeatures.LESS_AMOUNT_OF_CARDS} />;
// });

// storiesOf('Home', module).add('100 in 1', () => {
//   // Create new object from original data with different reference, so actual data won't be corrupted.
//   const moreData = { ...data };
//   moreData.game.amount = 100;
//   return <Home data={moreData} layout={LayoutFeatures.MUCH_AMOUNT_OF_CARDS} />;
// });

storiesOf('Footer', module).add('footer', () => {
  return <Footer/>
});
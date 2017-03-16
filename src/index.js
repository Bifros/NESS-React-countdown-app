import React from 'react';
import {render} from 'react-dom'; 

import CountdownContainer from './containers/CountdownContainer';

const countDownDeadline = new Date().getTime() + 24 * 60 * 60 * 1000;

render(
  <CountdownContainer deadline={countDownDeadline} />,
  document.getElementById('app')
);
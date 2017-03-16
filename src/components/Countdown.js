import React from 'react';

const Countdown = (props) => (
  <div id="page-wrapper">
    <div id="countdown-container">
      <div id="countdown-title">
        Time remaining till <span id="till">{props.displayDeadline()}</span>
      </div>
      <div id="countdown">
        {props.renderItems()}
      </div>
      <div id="finished">FINISHED</div>
    </div>
  </div>
);

export default Countdown;
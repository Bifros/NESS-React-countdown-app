import React from 'react';

import Countdown from '../components/Countdown';

class CountdownContainer extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      days: 0,
      hours: 0,
      mins: 0,
      sec: 0
    };
  }

  componentWillMount() {
    // Set initial display to avoid fast switching from 0 to real time
    this.tickUntil(this.props.deadline);
  }

  render() {
    return (
      <Countdown 
        renderItems={this.renderItems.bind(this)}
        displayDeadline={this.displayDeadline.bind(this)}
      />
    )
  }

  componentDidMount() {
    setInterval(() => this.tickUntil(this.props.deadline), 1000);
  }

  tickUntil(deadline) {
    let timeLeft = deadline - new Date().getTime();

    if (this.isFinished(timeLeft))
      this.dispalyFinished();
    else
      this.setState({
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours:  Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        sec: Math.floor((timeLeft % (1000 * 60)) / 1000)
      });
  }

  isFinished(timeLeft) {
    return timeLeft <= 0;
  }

  dispalyFinished() {
    document.getElementById('finished').style.opacity = 1;
  }

  renderItems() {
    return (
      <div>
        <div className="count-part" id="days">{this.state.days}</div>
        <div className="counter-separator">:</div>
        <div className="count-part" id="hours">{this.state.hours}</div>
        <div className="counter-separator">:</div>
        <div className="count-part" id="mins">{this.state.mins}</div>
        <div className="counter-separator">:</div>
        <div className="count-part" id="sec">{this.state.sec}</div>
      </div>
    );
  }

  displayDeadline(deadline) {
    return new Date(deadline).toLocaleString('en-us', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

}

export default CountdownContainer;
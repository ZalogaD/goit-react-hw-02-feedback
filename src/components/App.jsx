import React from 'react';
import Statistics from './Statistics/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    if ( totalFeedback === 0 ) {
      return 0;
    }
    return Math.round( (good/totalFeedback) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
    
        <Statistics 
                  good = {good}
                  neutral = {neutral}
                  bad = {bad}
                  totalFeedback = {totalFeedback}
                  positiveFeedbackPercentage = {positiveFeedbackPercentage}
        />
      </>
    );
  }
}

export default App;

import { StatCont, StatItem, StatList} from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, totalFeedback, positiveFeedbackPercentage }) => {
    return (
        <StatCont>
          <StatList>
            <StatItem>Good: {good}</StatItem>
            <StatItem>Neutral: {neutral}</StatItem>
            <StatItem>Bad: {bad}</StatItem>
            <StatItem>TotalFeedback: {totalFeedback}</StatItem>
            <StatItem>Positive feedback:{positiveFeedbackPercentage}%</StatItem>
          </StatList>
        </StatCont>
    );
  };

Statistics.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
}

export default Statistics;

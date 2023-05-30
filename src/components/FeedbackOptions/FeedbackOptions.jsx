import { BtnCont, GoodBtn, NeutralBtn, BadBtn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ( {options, onLeaveFeedback} ) => {
  return (
    <BtnCont>
      <GoodBtn onClick={() => onLeaveFeedback('good')}>Good</GoodBtn>
      <NeutralBtn onClick={() => onLeaveFeedback('neutral')}>Neutral</NeutralBtn>
      <BadBtn onClick={() => onLeaveFeedback('bad')}>Bad</BadBtn>
    </BtnCont>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback:PropTypes.func.isRequired
};

export default FeedbackOptions;
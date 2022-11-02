import React from 'react';
import PropTypes from 'prop-types';
import { Button, DivButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <DivButton>
    {Object.keys(options).map(option => (
      <Button
        key={option}
        name={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    ))}
  </DivButton>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

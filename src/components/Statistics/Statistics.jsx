import React from 'react';
import PropTypes from 'prop-types';
import { List } from './Statistics.styled';
export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <List>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total{total}</li>
      <li>Positive feedback:{positiveFeedback}%</li>
    </List>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

import React from "react"
import PropTypes from "prop-types"
import { Button, DivButton } from "./FeedbackOptions.styled"



export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <DivButton>
    {options.map(option => (
      <Button
        key={option}
        name={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option}
      </Button>
    ))}
  </DivButton>
);

  FeedbackOptions.propTypes = {
     options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  }
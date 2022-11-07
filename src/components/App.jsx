import { useState, useEffect } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export default function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const { good, neutral, bad } = state;
  const options = Object.keys(state);

  const onLeaveFeedback = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
    setTotal(() => total + 1);
  };

  useEffect(() => {
    setPercentage(Math.round((good / total) * 100));
  }, [good, total]);

  return (
    <div className="FeedBack">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {!!total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={percentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

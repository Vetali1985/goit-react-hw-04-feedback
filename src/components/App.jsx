import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export default function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return Number(Math.round((state.good / countTotalFeedback()) * 100));
  };

  const { good, neutral, bad } = state;
  // const keys = Object.keys(state);

  return (
    <div className="FeedBack">
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = e => {
//     this.setState(prevState => ({
//       [e.target.name]: prevState[e.target.name] + 1,
//     }));
//   };

// countTotalFeedback() {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// }
//   countPositiveFeedbackPercentage() {
//     const total = Number(
//       Math.round((this.state.good / this.countTotalFeedback()) * 100)
//     );
//     return total ? total : 0;
//   }

//   render() {
//     const total = this.countTotalFeedback();

//     return (
//       <div className="Feedback">
//         <Section title={'Please leave feetback'}>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title={'Statistics'}>
//           {total ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
// export default App;

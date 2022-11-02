import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from './Section/Section'
import { Notification} from './Notification/Notification'


class App extends Component  {
 state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


   onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
      
    }));
  };
  
  countTotalFeedback(){
    const {good,neutral,bad}=this.state;
    return good+neutral+bad;
  }
  countPositiveFeedbackPercentage() {
    const total = Number(
      Math.round((this.state.good / this.countTotalFeedback()) * 100)
    );
    return total ? total : 0;
  };
  
  render() {
    const total = this.countTotalFeedback()
    
    return (
      <div className="Feedback">

        <Section
          title={'Please leave feetback'}>
          <FeedbackOptions
            options= {Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section
          title={'Statistics'}>
          {total ? (<Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />) :
            (<Notification message="There is no feedback" />)}
        </Section>
      </div>
    );
    
  }
};
export default App;
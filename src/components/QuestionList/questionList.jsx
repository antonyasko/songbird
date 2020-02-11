/* eslint-disable react/forbid-prop-types */
// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './questionList.scss';

// export default class QuestionList extends Component {
export default class QuestionList extends PureComponent {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     activeQuestion: 0,
  //   };
  // }

  render() {
    const { questions, activeQuestion } = this.props;

    return (
      <ul className="question-list">
        {questions.map((question, index) => {
          return (
            <li key={question} className={`menu-item ${index === activeQuestion ? 'active' : ''}`}>
              {question}
            </li>
          );
        })}
      </ul>
    );
  }
}

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
  activeQuestion: PropTypes.number.isRequired,
};

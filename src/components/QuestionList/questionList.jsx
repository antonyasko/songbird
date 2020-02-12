/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './questionList.scss';

export default class QuestionList extends PureComponent {
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

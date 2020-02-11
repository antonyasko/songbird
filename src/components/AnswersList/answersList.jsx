import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import birdsData from '../../birdsData';
import AnswerItem from './AnswerItem';

import './answersList.scss';

export default class AnswersList extends PureComponent {
  render() {
    const { activeQuestion, activeAnswer, changeActiveAnswer, trueAnswerIndex } = this.props;

    return (
      <ul className="answers-list">
        {birdsData[activeQuestion].map((answer, index) => {
          return (
            <AnswerItem
              index={index}
              key={answer.id}
              birdData={answer}
              activeAnswer={activeAnswer}
              activeQuestion={activeQuestion}
              trueAnswerIndex={trueAnswerIndex}
              changeActiveAnswer={changeActiveAnswer}
            />
          );
        })}
      </ul>
    );
  }
}

AnswersList.propTypes = {
  activeQuestion: PropTypes.number.isRequired,
  activeAnswer: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  trueAnswerIndex: PropTypes.number.isRequired,
  changeActiveAnswer: PropTypes.func.isRequired,
};

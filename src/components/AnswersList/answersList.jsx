/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import birdsData from '../../birdsData';
import AnswerItem from './AnswerItem';
import './answersList.scss';

export default class AnswersList extends PureComponent {
  render() {
    const {
      activeQuestion,
      activeAnswer,
      changeActiveAnswer,
      trueAnswerIndex,
      trueAnswerIsFind,
      changeIsFind,
      prelimScore,
      actualScore,
      changeActualScore,
    } = this.props;

    return (
      <ul className="answers-list">
        {birdsData[activeQuestion].map((answer, index) => {
          return (
            <AnswerItem
              index={index}
              key={answer.id}
              birdData={answer}
              prelimScore={prelimScore}
              actualScore={actualScore}
              activeAnswer={activeAnswer}
              changeIsFind={changeIsFind}
              activeQuestion={activeQuestion}
              trueAnswerIndex={trueAnswerIndex}
              trueAnswerIsFind={trueAnswerIsFind}
              changeActualScore={changeActualScore}
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
  changeIsFind: PropTypes.func.isRequired,
  trueAnswerIsFind: PropTypes.bool.isRequired,
  actualScore: PropTypes.number.isRequired,
  changeActualScore: PropTypes.func.isRequired,
};

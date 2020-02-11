/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import birdsData from '../../birdsData';

export default class AnswerItem extends PureComponent {
  constructor(props) {
    super(props);

    this.showBirdDescription = this.showBirdDescription.bind(this);
  }

  showBirdDescription = () => {
    const { index, changeActiveAnswer } = this.props;

    changeActiveAnswer(index);
  };

  render() {
    const { index, birdData, trueAnswerIndex, activeAnswer, activeQuestion } = this.props;
    const trueAnswerId = birdsData[activeQuestion][trueAnswerIndex].id;
    const activeAnswerExist = activeAnswer !== false;
    const classNameForActiveAnswerItem = birdData.id === trueAnswerId ? 'success' : 'fail';
    const classNameForAnswerItem =
      activeAnswerExist && activeAnswer === index ? classNameForActiveAnswerItem : '';

    return (
      <li key={birdData.id} className="answer" onClick={this.showBirdDescription}>
        <span className={`li-btn ${classNameForAnswerItem}`} />
        {birdData.name}
      </li>
    );
  }
}

AnswerItem.propTypes = {
  index: PropTypes.number.isRequired,
  activeAnswer: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
};

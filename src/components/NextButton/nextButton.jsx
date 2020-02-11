import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import birdData from '../../birdsData';
import './nextButton.scss';

export default class NextButton extends PureComponent {
  constructor(props) {
    super(props);

    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel = () => {
    const { changeActiveQuestion } = this.props;

    changeActiveQuestion();
  };

  render() {
    const { trueAnswerIndex, activeAnswer } = this.props;

    return activeAnswer === trueAnswerIndex ? (
      <button
        type="button"
        id="next-level"
        className="active-next-button"
        onClick={this.changeLevel}
      >
        Следующий уровень
      </button>
    ) : (
      <button type="button" id="next-level" className="inactive-next-button">
        Следующий уровень
      </button>
    );
  }
}

NextButton.propTypes = {
  // activeQuestion: PropTypes.number.isRequired,
  changeActiveQuestion: PropTypes.func.isRequired,
  trueAnswerIndex: PropTypes.number.isRequired,
  activeAnswer: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
};

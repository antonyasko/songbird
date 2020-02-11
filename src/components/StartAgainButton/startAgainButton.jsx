import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import birdData from '../../birdsData';
import './startAgainButton.scss';

export default class StartAgainButton extends PureComponent {
  constructor(props) {
    super(props);

    this.startNewGame = this.startNewGame.bind(this);
  }

  startNewGame = () => {
    const { startGameAgain } = this.props;

    startGameAgain();
  };

  render() {
    // const { trueAnswerIndex, activeAnswer } = this.props;

    return (
      <button type="button" id="start-again-button" onClick={this.startNewGame}>
        Попробовать ещё раз!
      </button>
    );
  }
}

StartAgainButton.propTypes = {
  // activeQuestion: PropTypes.number.isRequired,
  startGameAgain: PropTypes.func.isRequired,
  // trueAnswerIndex: PropTypes.number.isRequired,
  // activeAnswer: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
};

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
    return (
      <button type="button" id="start-again-button" onClick={this.startNewGame}>
        Попробовать ещё раз!
      </button>
    );
  }
}

StartAgainButton.propTypes = {
  startGameAgain: PropTypes.func.isRequired,
};

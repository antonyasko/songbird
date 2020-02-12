import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
    const { trueAnswerIsFind } = this.props;

    return trueAnswerIsFind ? (
      <button
        type="button"
        id="next-level"
        className="active-next-button"
        onClick={this.changeLevel}
      >
        Дальше
      </button>
    ) : (
      <button type="button" id="next-level" className="inactive-next-button">
        Дальше
      </button>
    );
  }
}

NextButton.propTypes = {
  changeActiveQuestion: PropTypes.func.isRequired,
  trueAnswerIsFind: PropTypes.bool.isRequired,
};

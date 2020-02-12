import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import img from '../../../assets/images/bird-winner.jpg';
import './finishMessage.scss';

export default class FinishMessage extends PureComponent {
  render() {
    const { actualScore } = this.props;

    return actualScore !== 30 ? (
      <p id="finish-message">
        <span id="first-finish-message">Поздравляем!</span>
        <br />
        Вы прошли викторину и набрали&nbsp;
        <span className="bold-text">{actualScore}</span>
        &nbsp;баллов из&nbsp;
        <span className="bold-text">30</span>
        &nbsp;возможных.
      </p>
    ) : (
      <p id="finish-title">
        Вы победили!!!
        <img id="finish-image" src={img} alt="bird-winner" />
      </p>
      // <img src={aaa} alt="unknown-bird" />
    );
  }
}

FinishMessage.propTypes = {
  actualScore: PropTypes.number.isRequired,
};

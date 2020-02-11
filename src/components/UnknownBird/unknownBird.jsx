import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import img from '../../../assets/images/bird.jpg';
import birdData from '../../birdsData';
import './unknownBird.scss';

export default class UnknownBird extends PureComponent {
  render() {
    const { trueAnswerIndex, activeQuestion } = this.props;

    return (
      <div id="unknown-bird">
        <img id="unknown-bird-image" src={img} alt="unknown-bird" />
        <div id="unknown-bird-audio">
          <p id="unknown-bird-name">******</p>
          <audio controls>
            <source src={birdData[activeQuestion][trueAnswerIndex].audio} type="audio/mpeg" />
            <track kind="captions" />
          </audio>
        </div>
      </div>
    );
  }
}

UnknownBird.propTypes = {
  trueAnswerIndex: PropTypes.number.isRequired,
  activeQuestion: PropTypes.number.isRequired,
};

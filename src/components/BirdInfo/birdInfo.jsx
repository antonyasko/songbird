import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import birdData from '../../birdsData';
import './birdInfo.scss';

export default class BirdInfo extends PureComponent {
  render() {
    const { activeQuestion, activeAnswer } = this.props;

    return activeAnswer === false ? (
      <div id="bird-info-description">Послушайте плеер. Выберите птицу из списка.</div>
    ) : (
      <div id="bird-info">
        <div className="bird-title">
          <img
            className="bird-image"
            src={birdData[activeQuestion][activeAnswer].image}
            alt="bird"
          />
          <div className="bird-audio">
            <p className="bird-name">{birdData[activeQuestion][activeAnswer].name}</p>
            <p className="bird-species">{birdData[activeQuestion][activeAnswer].species}</p>
            <audio controls>
              <source src={birdData[activeQuestion][activeAnswer].audio} type="audio/mpeg" />
              <track kind="" />
            </audio>
          </div>
        </div>
        <p className="bird-description">{birdData[activeQuestion][activeAnswer].description}</p>
      </div>
    );
  }
}

BirdInfo.propTypes = {
  activeQuestion: PropTypes.number.isRequired,
  activeAnswer: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
};

/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class AnswerItem extends PureComponent {
  constructor(props) {
    super(props);

    this.showBirdDescription = this.showBirdDescription.bind(this);
  }

  showBirdDescription = () => {
    const {
      index,
      trueAnswerIndex,
      trueAnswerIsFind,
      changeActiveAnswer,
      changeIsFind,
      prelimScore,
      changeActualScore,
    } = this.props;

    changeActiveAnswer(index);

    if (index === trueAnswerIndex && !trueAnswerIsFind) {
      changeIsFind();
      changeActualScore(prelimScore);
    }
    if (index !== trueAnswerIndex && !prelimScore.includes(index) && !trueAnswerIsFind) {
      prelimScore.push(index);
    }
  };

  render() {
    const {
      index,
      birdData,
      trueAnswerIndex,
      trueAnswerIsFind,
      activeAnswer,
      prelimScore,
    } = this.props;

    let classNameForAnswerItem;
    if (!trueAnswerIsFind && !activeAnswer) {
      classNameForAnswerItem = '';
    }
    if (trueAnswerIsFind && trueAnswerIndex === index) {
      classNameForAnswerItem = 'success';
    }
    if (prelimScore.includes(index)) {
      classNameForAnswerItem = 'fail';
    }

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
  changeActiveAnswer: PropTypes.func.isRequired,
  changeActualScore: PropTypes.func.isRequired,
  changeIsFind: PropTypes.func.isRequired,
  trueAnswerIndex: PropTypes.number.isRequired,
  trueAnswerIsFind: PropTypes.bool.isRequired,
  activeAnswer: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
};

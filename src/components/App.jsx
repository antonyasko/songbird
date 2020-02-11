/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-access-state-in-setstate */
import React, { PureComponent } from 'react';
import QuestionList from './QuestionList/questionList';
import AnswersList from './AnswersList/answersList';
import UnknownBird from './UnknownBird/unknownBird';
import BirdInfo from './BirdInfo/birdInfo';
// import birdsData from '../birdsData';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.questions = [
      'Разминка',
      'Воробьиные',
      'Лесные птицы',
      'Певчие птицы',
      'Хищные птицы',
      'Морские птицы',
    ];

    this.state = {
      activeQuestion: 0,
      trueAnswerIndex: Math.floor(Math.random() * Math.floor(6)),
      activeAnswer: false,
    };

    this.changeActiveQuestion = this.changeActiveQuestion.bind(this);
    this.changeActiveAnswer = this.changeActiveAnswer.bind(this);
  }

  changeActiveQuestion() {
    this.setState(prevState => ({
      activeAnswer: false,
      activeQuestion: prevState.activeQuestion + 1,
    }));
  }

  changeActiveAnswer(index) {
    this.setState({
      activeAnswer: index,
    });
  }

  render() {
    const { activeQuestion, trueAnswerIndex, activeAnswer } = this.state;

    return (
      <div className="container">
        <header className="jumbotron header">
          <div className="first-line">
            <h1>
              song
              <span>bird</span>
            </h1>
            <p className="score">
              Счёт:&nbsp;
              <output name="result">0</output>
            </p>
          </div>
          <QuestionList
            questions={this.questions}
            activeQuestion={activeQuestion}
            trueAnswerIndex={trueAnswerIndex}
          />
        </header>
        <UnknownBird
          questions={this.questions}
          activeQuestion={activeQuestion}
          trueAnswerIndex={trueAnswerIndex}
        />
        <div id="answers-block">
          <AnswersList
            activeQuestion={activeQuestion}
            trueAnswerIndex={trueAnswerIndex}
            activeAnswer={activeAnswer}
            changeActiveAnswer={this.changeActiveAnswer}
          />
          <BirdInfo activeAnswer={activeAnswer} activeQuestion={activeQuestion} />
        </div>
        <button type="button" id="next-level" className="inactive-next-button">
          Следующий уровень
        </button>
      </div>
    );
  }
}

export default App;

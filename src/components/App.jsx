import React, { PureComponent } from 'react';
import QuestionList from './QuestionList/questionList';
import AnswersList from './AnswersList/answersList';
import UnknownBird from './UnknownBird/unknownBird';
import BirdInfo from './BirdInfo/birdInfo';
import NextButton from './NextButton/nextButton';
import StartAgainButton from './StartAgainButton/startAgainButton';

// import birdsData from '../birdsData';
const maxMark = 5;

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
      trueAnswerIsFind: false,
      prelimScore: [],
      actualScore: 0,
    };

    this.changeActiveQuestion = this.changeActiveQuestion.bind(this);
    this.changeActiveAnswer = this.changeActiveAnswer.bind(this);
    this.startGameAgain = this.startGameAgain.bind(this);
    this.changeIsFind = this.changeIsFind.bind(this);
    this.changeActualScore = this.changeActualScore.bind(this);
  }

  changeActiveQuestion() {
    this.setState(prevState => ({
      trueAnswerIsFind: false,
      activeAnswer: false,
      prelimScore: [],
      activeQuestion: prevState.activeQuestion + 1,
      trueAnswerIndex: prevState.trueAnswerIndex * 0 + Math.floor(Math.random() * Math.floor(6)),
    }));
  }

  startGameAgain() {
    this.setState({
      activeAnswer: false,
      trueAnswerIsFind: false,
      activeQuestion: 0,
      prelimScore: [],
      actualScore: 0,
      trueAnswerIndex: Math.floor(Math.random() * Math.floor(6)),
    });
  }

  changeActiveAnswer(index) {
    this.setState({
      activeAnswer: index,
    });
  }

  changeIsFind() {
    this.setState({
      trueAnswerIsFind: true,
    });
  }

  changeActualScore(preScore) {
    this.setState(prevState => ({
      actualScore: prevState.actualScore + maxMark - preScore.length,
    }));
  }

  render() {
    const {
      activeQuestion,
      trueAnswerIndex,
      activeAnswer,
      trueAnswerIsFind,
      prelimScore,
      actualScore,
    } = this.state;

    return activeQuestion <= 5 ? (
      <div className="container">
        <header className="header">
          <div className="first-line">
            <h1>
              song
              <span>bird</span>
            </h1>
            <p className="score">
              Счёт:&nbsp;
              <output name="result">{actualScore}</output>
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
          activeAnswer={activeAnswer}
          trueAnswerIsFind={trueAnswerIsFind}
        />
        <div id="answers-block">
          <AnswersList
            activeQuestion={activeQuestion}
            activeAnswer={activeAnswer}
            changeActualScore={this.changeActualScore}
            changeActiveAnswer={this.changeActiveAnswer}
            trueAnswerIndex={trueAnswerIndex}
            trueAnswerIsFind={trueAnswerIsFind}
            changeIsFind={this.changeIsFind}
            prelimScore={prelimScore}
            actualScore={actualScore}
          />
          <BirdInfo activeAnswer={activeAnswer} activeQuestion={activeQuestion} />
        </div>
        <NextButton
          activeQuestion={activeQuestion}
          trueAnswerIndex={trueAnswerIndex}
          trueAnswerIsFind={trueAnswerIsFind}
          activeAnswer={activeAnswer}
          // changeActiveAnswer={this.changeActiveAnswer}
          changeActiveQuestion={this.changeActiveQuestion}
        />
      </div>
    ) : (
      <div className="container">
        <header className="header">
          <div className="first-line">
            <h1>
              song
              <span>bird</span>
            </h1>
            <p className="score">
              Счёт:&nbsp;
              <output name="result">{actualScore}</output>
            </p>
          </div>
        </header>
        <div id="finish-block">
          <p id="finish-title">Поздравляем!</p>
          <p id="finish-message">
            Вы прошли викторину и набрали&nbsp;
            <span>{actualScore}</span>
            &nbsp;из&nbsp;
            <span>30</span>
            &nbsp;возможных баллов.
          </p>
          <StartAgainButton startGameAgain={this.startGameAgain} />
        </div>
      </div>
    );
  }
}

export default App;

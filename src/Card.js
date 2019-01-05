import React, { Component } from 'react';
import './styles/_Card.scss';


export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: '',
      answeredCorrect: false
    };
  }

  selectAnswer = (event) => {
    let answer = event.target.value;
    this.checkAnswer();
    this.setState({
      selectedAnswer: answer
    });
  };

  checkAnswer() {
    if (this.state.selectedAnswer === this.props.singleCommand.correctAnswer) {
      this.setState({
        answeredCorrect: true 
      })
    }
  }


  render() {
    return (
      <div className="card-container">
        <div className="question-container">
          <h2>{this.props.singleCommand.question}</h2>
          <h3>{this.props.singleCommand.gitCommand}</h3>
        </div>
        {
          this.props.singleCommand.possibleAnswers.map((answer, index) => {
            return <button className="possible-answer-buttons" key={index} value={answer} onClick={this.selectAnswer}>{answer}</button>;

          })}
      </div>
    );
  }
}
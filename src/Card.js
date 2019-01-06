import React, { Component } from 'react';
import './styles/_Card.scss';


export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answeredCorrect: false
    };
  }

  checkForAnswer = (event) => {
    let userSelectedAnswer = event.target.value;
    let correctAnswer = this.props.singleCommand.correctAnswer;

    if (correctAnswer === userSelectedAnswer) {
      this.setState({
        answeredCorrect: true
      });
    }
  };


  render() {
    if (this.state.answeredCorrect === false) {
      return (
        <div className="card-container">
          <div className="question-container">
            <h2>{this.props.singleCommand.question}</h2>
            <h3>{this.props.singleCommand.gitCommand}</h3>
          </div>
          {
            this.props.singleCommand.possibleAnswers.map((answer, index) => {
              return (
                <li>
                  <input key={index} type="checkbox" label="form" value={answer} onClick={this.checkForAnswer}/>

                  {answer}

                </li>
              );      
            })
          }
        </div>
      );
    } else {
      return (
        <div>
              CORRECT!!!
        </div>
      );
    }
  }
}

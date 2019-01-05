import React, { Component } from 'react';
import './styles/_Card.scss';


export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    
    return (
      <div className="card-container">
        <h2>{this.props.singleCommand.question}</h2>
        <h3>{this.props.singleCommand.gitCommand}</h3>
        {this.props.singleCommand.possibleAnswers.map((answers) => {
          return <button>{answers}</button>
        })}
      </div>
    );
  }
}
import React, { Component } from 'react';
import './styles/_CardContainer.scss';
import Card from './Card.js';


export default class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  nextCard = (event) => {
    if (this.state.counter >= 30) {
      this.setState({
        counter: 0
      });
    } else {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  }

  previousCard = (event) => {
    if (this.state.counter === 0) {
      this.setState({
        counter: 30
      });
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }

  render() {
    return (
      <div className='main-card-container'>
        {this.props.dataStuff.reduce((arr, singleCommand) => {
          return <Card singleCommand={this.props.dataStuff[this.state.counter]} />;
        }, [])}
        <div className="controls">
          <button onClick={this.previousCard} className="previous-button">Previous</button>
          <button onClick={this.nextCard} className="next-button">Next</button>
        </div>
      </div>
    );
  }
}


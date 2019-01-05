import React, { Component } from 'react';
import './styles/_CardContainer.scss';
import Card from './Card.js';


export default class CardContainer extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className='main-card-container'>
        <Card />
      </div>
    );
  }
}
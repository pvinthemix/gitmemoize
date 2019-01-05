import React, { Component } from 'react';
import './App.scss';
import CardContainer from './CardContainer.js';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gitData: []
    };
  }

  componentDidMount() {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/pvGitCommands')
      .then(response => response.json())
      .then(git => {
        this.setState({
          gitData: git.pvGitCommands
        });
      })
      .catch(error => console.log(error));
  }


  render() {
    console.log(this.state.gitData);
    return (
      <div className="App">
        <h1>gitToStudying</h1>
        <CardContainer dataStuff={this.state.gitData}/>
      </div>
    );
  }
}
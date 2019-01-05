import React, { Component } from 'react';
import './App.scss';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gitData: [],
    };
  }

  componentDidMount() {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/pvGitCommands')
      .then(response => response.json())
      .then(gitData => {
        this.setState({
          gitData: gitData.pvGitCommands
        });
      })
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}
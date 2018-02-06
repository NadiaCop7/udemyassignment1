import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './User/userInput';
import './User/userOutput';

class App extends Component {
  constructor() {
  super();
  this.state = {name:''}
  this.nameEntry = this.nameEntry.bind(this);
  this.afterEntry = this.nameClick.bind(this);
 }

  nameEntry = (event) => {
    this.setState({name: event.target.value});
  }

  nameClick = () => {
    alert("Hello " + this.state.name);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nadias React App</h1>s
        </header>
        <h3>Hi! I'm computer! Whats your name?</h3>
        <input className="textbox" type="text" onChange={this.nameEntry}></input>

        <button className="button" onClick={this.nameClick}>Enter</button>

      </div>
    );
  }
}

export default App;

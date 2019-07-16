import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import User from './components/User'
import Clock from './components/Clock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to codaisseur.
          </p>
              <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              >
              Learn React
            </a>
        </header>

        <main>
          <Title content = 'some simple title' />
          <LightSwitch/>
          <User content = 'AIAIAIA'></User>
          <Clock/>
        </main>
      </div>
    );
  }
}

export default App;

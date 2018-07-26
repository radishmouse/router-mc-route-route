import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route} from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <NavBar />

        <Route path="/" exact={true} component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cats" component={Cats} />


      </div>
    );
  }
}

const Landing = (props) => {
  return (
    <div>
      <h1>This is the landing page</h1>
    </div>
  );
}

const Home = (props) => {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

const About = (props) => {
  return (
    <div>
      <h1>About!</h1>
    </div>
  );
}

const Cats = (props) => {
  return (
    <div>
      <h1>It's Cats!</h1>
    </div>
  );
}




export default App;

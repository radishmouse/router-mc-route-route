import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route} from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <Route path="/" exact={true} component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cats" component={Cats} />
        <Route path="/cats/:cat" component={SpecificCat} />
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
  console.log(props);
  return (
    <div>
      <h1>It's Cats!</h1>
    </div>
  );
}

const SpecificCat = (props) => {
  console.log(props);
  return (
    <div>
      <h1>It's a single specific cat!</h1>
      <h2>{props.match.params.cat}</h2>
    </div>
  );
}


export default App;

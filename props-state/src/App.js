import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Parent/>
      </div>
    );
  }
}

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars : ['BMW', 'MERC', 'CITY', 'AUDI']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      {
        cars: this.state.cars.reverse()
      }
    )
  }

  render(){
    return(
      <div>
        <h2 onClick={this.handleClick}>Click here to reverse cars</h2>
        <Cars msg="cars are cool" coolCars={this.state.cars} />
      </div>
    )
  }
}

class Cars extends Component{
  render() {
    return (
      <div>
        <h3>I am from Cars Component</h3>
        <h5>{this.props.msg}</h5>
        <div>
          {this.props.coolCars.map((item, i) => {
            return <p key={i}>{item}</p>
          })}
        </div>
      </div>
    )
  }
}

export default App;

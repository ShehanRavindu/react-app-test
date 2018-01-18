import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import ListItem from './components/ListItem';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data  : [
        {
          id : "E1",
          name : "Cmder"
        },
        {
          id : "W3",
          name : "Hyper"
        }
      ],
      name : "Shalitha"
    }

    this.setStateHandler = this.setStateHandler.bind(this);
  }
  
setStateHandler() {
  this.setState({name : this.state.name == 'Shalitha' ? 'Suranga' : 'Shalitha'});
}

  render() {
    let hello = 'Hello React!';


    return (
      <div className="App">
        <h1>{ hello }</h1>
        <br/>
        <Button name={this.state.name} handler={this.setStateHandler}/>
        <br/>
        {
          this.state.data.map((item, i) => <ListItem key={i} data={item}/>)
        }
      </div>
    );
  }
}

export default App;

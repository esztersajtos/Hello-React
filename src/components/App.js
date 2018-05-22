import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 2
    }
  }

  handleIncrement() {
    this.setState({
      count:this.state.count + 1
    });
  }

  handleDecrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return  (
      <div className="App">
        <h1>Simple Golden Acorn App With States</h1>
        <button onClick={() => this.handleIncrement()}>Buy</button>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.handleDecrement()}>Eat</button>
      </div>
    )
  }
}

export default App;

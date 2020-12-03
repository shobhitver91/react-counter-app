import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = {
    counters: [
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0},
    ]
  }

  handleIncrement = counter => {
    console.log('increment', counter.id);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters: counters})
  }


  handleDecrement = counter => {
    console.log('decrement', counter.id);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    if (counters[index].value > 0) {
        counters[index].value--;
        this.setState({ counters: counters})
    }
}

  handleDelete = counterId => {
    console.log('Event Handler Called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters})
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
        });
      console.log('reset', counters);
      this.setState({counters: counters});

  }

  render () {
  return (
    <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters
         onReset={this.handleReset}
         onIncrement={this.handleIncrement}
         onDelete={this.handleDelete}
         onDecrement={this.handleDecrement}
         counters={this.state.counters}/>
      </main>
    </React.Fragment>
  );
  }
}

export default App;

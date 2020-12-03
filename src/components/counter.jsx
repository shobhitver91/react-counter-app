import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     count: this.props.counter.value,
    //     tags: ['tag1', 'tag2', 'tag3']
    // };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     console.log("Constructor", this);
    // }

    formatCount() {
        const count  = this.props.counter.value;
        return count === 0 ? 'Zero' : count;
    }

    // handleIncrement = product => {
    //     // console.log(product);
    //     this.setState({ count: this.state.count + 1});
    //     // console.log('Increment Clicked', this.state.count);
    // }
    
    // handleDecrement = product => {
    //     // console.log('Event Handler Called', counterId);
    //     if (this.state.count > 0) this.setState({ count: this.state.count - 1});
    //     // this.setState({counters})
    //   };

    render() { 
        // console.log('props', this.props);

    return <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={ () => this.props.onIncrement(this.props.counter ) } className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={ () => this.props.onDecrement(this.props.counter ) } className="btn btn-warning btn-sm">Decrement</button>
        <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
    </React.Fragment>;
    }
   

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;
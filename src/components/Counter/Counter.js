import React, { Component } from 'react';
import CounterControls from './CounterControls';

export default class Counter extends Component {
  static propTypes = {};

  static defaultProps = { initialValue: 0 };

  state = {
    value: this.props.initialValue,
    isShow: false,
  };

  handleIncrement = evt => {
    console.log('Increment');
    console.log(evt.target);
    console.log(this.props);

    this.setState((prevState, props) => {
      return {
        value: prevState.value + props.step,
      };
    });
  };
  handleDecrement = evt => {
    console.log('Decrement');
    console.log(evt.target);
    console.log(this);

    this.setState((prevState, props) => {
      return {
        value: prevState.value - props.step,
      };
    });
  };

  terminal = () => {
    this.setState(prevState => ({ isShow: !prevState.isShow }));
  };

  replenish = () => {
    this.props.replenishment(this.state.value);
    this.setState({ value: 0 });
  };

  render() {
    return (
      <div>
        <button onClick={this.terminal}>
          {this.state.isShow ? 'hide' : 'show'} terminal
        </button>
        {this.state.isShow && (
          <>
            <CounterControls
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
            <button onClick={this.replenish}>replenish</button>
            <br />
            <span>{this.state.value}</span>
          </>
        )}
      </div>
    );
  }
}

import React, { Component } from 'react';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes'

export default class App extends Component {

	constructor(props) {
		super(props);
		const { store } = this.props

		this.state = {
			counter: store.getState(),
			store: store
		}
	}

	increment() {
		this.state.store.dispatch({ type: INCREMENT_COUNTER });

    this.setState({
      counter: this.props.store.getState()
    });
	}

	decrement() {
		this.state.store.dispatch({ type: DECREMENT_COUNTER });

    this.setState({
      counter: this.props.store.getState()
    });
	}

  render() {
    return (
    	<div>
    		<h1>Simple Counter:</h1>
    		<div>
    			<h2>{this.state.counter}</h2>
    			<button onClick={ this.increment.bind(this) }>++</button>
    			<button onClick={ this.decrement.bind(this) }>--</button>
    		</div>
    	</div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
    React.PropTypes.array
  ])
};

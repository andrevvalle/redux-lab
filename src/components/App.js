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
	}

	decrement() {
		this.state.store.dispatch({ type: DECREMENT_COUNTER });
	}

  render() {
    return (
    	<div>
    		<h1>Simple Counter:</h1>
    		<div>
    			<h2>{this.props.store.getState()}</h2>
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

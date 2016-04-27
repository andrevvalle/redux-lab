import expect from 'expect';

import { createStore } from 'redux';
import ReducerIncrement from '../reducers/reducerIncrement';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';


describe('Increment and Drecrement Test', () => {

	const store = createStore(ReducerIncrement);
	let counter = store.getState();

	it('Increment and Decrement one', () => {
		store.dispatch({ type: INCREMENT_COUNTER });
		expect(store.getState()).toEqual(1);

		afterEach(() => {
			store.dispatch({ type: DECREMENT_COUNTER });
		});
	});

	it('Increment and Decrement two', () => {
		store.dispatch({ type: INCREMENT_COUNTER });
		store.dispatch({ type: INCREMENT_COUNTER });
		expect(store.getState()).toEqual(2);

		afterEach(() => {
			store.dispatch({ type: DECREMENT_COUNTER });
			store.dispatch({ type: DECREMENT_COUNTER });
		});
	});
});
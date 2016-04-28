import expect from 'expect';

import { createStore } from 'redux';
import ReducerIncrement from '../reducers/reducerIncrement';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';


describe('Increment and Drecrement Test', () => {

	const store = createStore(ReducerIncrement);
	let counter = store.getState();

	beforeEach(() => {
		expect(store.getState()).toEqual(0);
	});

	it('Increment and Decrement one', () => {
		store.dispatch({ type: INCREMENT_COUNTER });
		expect(store.getState()).toEqual(1);

		store.dispatch({ type: DECREMENT_COUNTER });
	});

	it('Increment and Decrement two', () => {
		store.dispatch({ type: INCREMENT_COUNTER });
		store.dispatch({ type: INCREMENT_COUNTER });
		expect(store.getState()).toEqual(2);

		store.dispatch({ type: DECREMENT_COUNTER });
		store.dispatch({ type: DECREMENT_COUNTER });
	});

	afterEach(() => {
		expect(store.getState()).toEqual(0);
	});
});
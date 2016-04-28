import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import { createStore } from 'redux';
import ReducerIncrement from '../reducers/reducerIncrement';

import App from '../components/App';

describe('App Component', () => {

	let renderer = '';

	beforeEach(() => {
		const store = createStore(ReducerIncrement);
		renderer = TestUtils.createRenderer();
		renderer.render(<App store={ store }/>);
	});

	it('Node <h1> - Component App.js checked', () => {
		const actual = renderer.getRenderOutput();
		const expected = <h1>Simple Counter:</h1>;

		expect(actual).toIncludeJSX(expected);
	});

	it('Node <h2> - Component App.js checked', () => {
		const actual = renderer.getRenderOutput();
		const expected = 0;

		let verify = actual.props.children[1].props.children[0].props.children;

		expect(verify).toIncludeJSX(expected);
	});
});
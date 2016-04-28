import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import { createStore } from 'redux';
import ReducerIncrement from '../reducers/reducerIncrement';

import App from '../components/App';

describe('CoolComponent', () => {

	let store = '';

	beforeEach(() => {
		store = createStore(ReducerIncrement);
	});

	it('Node <h1> - Component App.js checked', () => {

		const renderer = TestUtils.createRenderer();
		renderer.render(<App store={ store }/>);

		const actual = renderer.getRenderOutput();
		const expected = <h1>Simple Counter:</h1>;

		expect(actual).toIncludeJSX(expected);
	});
});
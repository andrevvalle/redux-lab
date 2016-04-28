import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import ReducerIncrement from './reducers/reducerIncrement';

const store = createStore(ReducerIncrement);
const render = () => {
	ReactDOM.render(
		<App store={ store } />,
		document.getElementById('root')
	);
};

store.subscribe(render);
render();
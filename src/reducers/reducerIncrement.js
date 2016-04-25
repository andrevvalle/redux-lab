
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';
import { incrementCounter, decrementCounter } from '../actions/actionsIncrement';

export default function ProductReducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return incrementCounter(state, action);

        case DECREMENT_COUNTER:
            return decrementCounter(state, action);

        default:
            return state;
    }
}
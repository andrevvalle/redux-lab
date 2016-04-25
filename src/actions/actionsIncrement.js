export function incrementCounter(state, action) {
    console.log(state, action);
    return state + 1;
}

export function decrementCounter(state, action) {
    console.log(state, action);
    return state - 1;
}
let INITIAL_STATE = {
    count: 0
}
const CounterReducer = (state = INITIAL_STATE, action) => {
    console.log('INSIDE REDUCER..')
    let newState = {...state}
    switch (action.type){
        case 'INCREMENT':
             newState.count++;
             return newState;
        case 'DECREMENT':
            newState.count--;
             return newState; 
        default:
            return state;       
    }
}

export default CounterReducer;
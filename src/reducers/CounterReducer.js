const CounterReducer = (data = 0, action) => {
    console.log('INSIDE REDUCER..')
    switch (action.type){
        case 'INCREMENT':
            return data+1;
        case 'DECREMENT':
            return data-1;    
    }
}

export default CounterReducer;
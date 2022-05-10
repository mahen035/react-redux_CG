import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/CounterAction';
import {useState} from 'react';

function App() {
 // const counter = useSelector(state => state)

 const color = useSelector(state => state)
  let dispatch = useDispatch();
  console.log('IN APP JS')

   const handleClick= (e) => {
    dispatch({
      type: 'CHANGE_COLOR',
      payload: e.target.value
    })
    //setColor(e.target.value)
  }

  return (
    <div className="App">

        <h2>My Favourite color is {color}</h2>
        <input type='radio' name="favColor" value= "Red" onClick={handleClick}/>Red
        <input type='radio' name="favColor" value= "Blue" onClick={handleClick}/>Blue
        <input type='radio' name="favColor" value= "Green" onClick={handleClick}/>Green


         {/*  <h2>Counter: {counter}</h2>
          <button onClick={() => dispatch(increment())}>INCREMENT</button>
          <button onClick={() => dispatch(decrement())}>DECREMENT</button> */}
    </div>
  );
}

export default App;

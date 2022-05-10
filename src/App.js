import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/CounterAction';

function App() {
  const counter = useSelector(state => state)
  let dispatch = useDispatch();
  console.log('IN APP JS')
  return (
    <div className="App">
          <h2>Counter: {counter}</h2>
          <button onClick={() => dispatch(increment())}>INCREMENT</button>
          <button onClick={() => dispatch(decrement())}>DECREMENT</button>
    </div>
  );
}

export default App;

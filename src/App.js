import { useSelector, useDispatch } from 'react-redux';
import { increment } from './features/counter/counterSlice';
import './App.css';

function App() {
  const count = useSelector(state => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter App</h1>

      <p>Count: {count}</p>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
}

export default App;

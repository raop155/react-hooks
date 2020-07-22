import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';



const App = (props) => {
  const { startCount } = props;
  const [count, setCount] = new useState(startCount);

  const addCount = () => {
    setCount(count + 1);
  }

  const minusCount = () => {
    setCount(count - 1);
  }

  const resetCount = () => {
    setCount(startCount);
  }

  return (
    <div>
      <p>
        The current count is {count}
      </p>
      <button onClick={minusCount}>-1</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={addCount}>+1</button>
    </div>
  )
}

App.defaultProps = {
  startCount: 0
};

ReactDOM.render(
  <React.StrictMode>
    <App startCount={0} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../actions/counter';
import logo from '../logo.svg';
import { selectCounter } from '../selectors';
import './Main.css';

const Main: FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);

  return (
    <main className="Main">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Counter: {counter}
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </main>
  );
};

export default Main;

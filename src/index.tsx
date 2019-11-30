import * as Comlink from 'comlink';
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import Worker from 'worker-loader!./worker/worker';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import WorkerInterface from './worker/WorkerInterface';

const worker = Comlink.wrap<WorkerInterface>(new Worker());
worker.add(40, 2).then(console.dir);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

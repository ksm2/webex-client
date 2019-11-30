import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import createRemoteStore from './client/createRemoteStore';
import App from './components/App';
import createRouter from './createRouter';
import * as serviceWorker from './serviceWorker';
import './index.css';
import './marine.css';

const main = async () => {
  const store = await createRemoteStore();
  const router = createRouter(store);

  ReactDOM.render(
    <RouterProvider router={router}>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>,
    document.getElementById('root'),
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.register();
};

main().catch((err) => {
  console.error(err.stack);
});

import { Store } from 'redux';
import { reduxPlugin } from 'redux-router5';
import createRouter5, { Route, Router } from 'router5';
import browserPlugin from 'router5-plugin-browser';

const createRouter = (store: Store): Router => {
  const routes: Route[] = [
    { name: 'rooms', path: '/r' },
    { name: 'rooms.show', path: '/:id' },
  ];

  const router = createRouter5(routes);
  router.usePlugin(
    browserPlugin({
      useHash: false,
    }),
  );


// You need a router instance and a store instance
  router.usePlugin(reduxPlugin(store.dispatch));

  router.start();

  return router;
};

export default createRouter;

import { createStore, compose } from 'redux';
import rootReducer from './reducers/game';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/game', () => {
      const nextReducer = require('./reducers/game');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}


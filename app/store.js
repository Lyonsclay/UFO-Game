import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const createNewStore = compose()(createStore);

export default function configureStore(initialState) {
  const store = createNewStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}


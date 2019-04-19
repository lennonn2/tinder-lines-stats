import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const configureStore = lines => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    {
      lines,
      selected: {}
    },
    composeEnhancers(
      applyMiddleware(thunk)
    )
  );
  return store;
};

export default configureStore;
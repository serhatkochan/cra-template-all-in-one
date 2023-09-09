import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import selectors from './selectors';
import actions from './actions';
import services from './services';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
];

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

const dispatch = (action) => {
  return store.dispatch(action);
};
export { dispatch, selectors, actions, services };

export default store;

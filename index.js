import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import sharePriceSaga from './saga';

const reducer = (state = '', action) => {
  console.log('action is', action);
  return action.payload;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sharePriceSaga);

store.subscribe(() => {
  console.log('store changed!!', store.getState());
});

export default store;

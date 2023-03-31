import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './user/userReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
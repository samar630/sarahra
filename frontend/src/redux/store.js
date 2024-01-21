import { createStore, applyMiddleware } from 'redux' 
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; 
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/index'


import rootReducer from './reducer'

const sagaMiddleware = createSagaMiddleware()
const initalState = {};
const persistConfig = {
  key: "root",
  storage: storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  initalState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// Run redux-saga
sagaMiddleware.run(rootSaga)

export default store
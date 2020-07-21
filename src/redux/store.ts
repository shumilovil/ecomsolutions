import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { loginPageReducer } from "./loginPageReducer";
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from "./sagas";


const rootReducer = combineReducers({
    loginPage: loginPageReducer
});


type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();

const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(saga)));

saga.run(sagaWatcher);

export default store;
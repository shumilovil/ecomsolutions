import { combineReducers, createStore, compose } from "redux";
import { loginPageReducer } from "./loginPage-reducer";

const rootReducer = combineReducers({
    loginPage: loginPageReducer
});


type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,  composeEnhancers());

export default store;
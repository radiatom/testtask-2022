import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer.js";

const redusers = combineReducers({
  reducer: reducer,
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  redusers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);


window.store = store;

export default store;
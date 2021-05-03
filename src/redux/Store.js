import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import getReducer from "./Reducer";

const store = createStore(getReducer, applyMiddleware(thunk));

export default store;

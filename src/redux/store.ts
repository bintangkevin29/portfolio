import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootState from "./root.reducer";

const middleware = [logger];
const store = createStore(rootState, applyMiddleware(...middleware));

export default store;

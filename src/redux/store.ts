import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootState from "./root.reducer";

const middleware = [logger];
const store = createStore(rootState, applyMiddleware(...middleware));

export const persistor = persistStore(store);

export default store;

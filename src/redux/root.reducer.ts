import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import miscReducer from "./misc/misc.reducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitellist: ["misc"],
};

const rootState = combineReducers({
  misc: miscReducer,
});

export type RootState = ReturnType<typeof rootState>;

export default persistReducer(persistConfig, rootState);

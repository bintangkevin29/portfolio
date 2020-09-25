import { combineReducers } from "redux";
import miscReducer from "./misc/misc.reducer";

const rootState = combineReducers({
  misc: miscReducer,
});

export type RootState = ReturnType<typeof rootState>;

export default rootState;

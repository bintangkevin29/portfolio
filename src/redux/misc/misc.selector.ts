import { createSelector } from "reselect";
import { RootState } from "../root.reducer";
import { MiscState } from "./misc";

const miscState = (state: RootState): MiscState => state.misc;

export const selectFirstVisit = createSelector([miscState], (data) => data.misc.firstVisit);

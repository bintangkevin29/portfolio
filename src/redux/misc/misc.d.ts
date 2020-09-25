export interface MiscState {
  misc: {
    firstVisit: boolean;
  };
}

export type MiscActionTypes = {
  type: "MISC_HAS_VISITED";
};

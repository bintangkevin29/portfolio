import { MiscActionTypes, MiscState } from "./misc";

const INIT_STATE: MiscState = {
  misc: {
    firstVisit: true,
  },
};

const miscReducer = (state = INIT_STATE, action: MiscActionTypes): MiscState => {
  switch (action.type) {
    case "MISC_HAS_VISITED":
      return {
        ...state,
        misc: {
          ...state.misc,
          firstVisit: false,
        },
      };
    default:
      return state;
  }
};

export default miscReducer;

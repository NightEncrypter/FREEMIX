import { InitialState, Payload } from "~/interfaces/main";
import { SIDEBARFALSE, SIDEBARTRUE } from "./types";

export default (state: InitialState, action: Payload) => {
  switch (action.type) {
    case SIDEBARTRUE:
      return {
        ...state,
        sidebar: action.payload.sidebar,
      };
    case SIDEBARFALSE:
      return {
        ...state,
        sidebar: action.payload.sidebar,
      };

    default:
      return state;
  }
};

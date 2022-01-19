import { useReducer } from "react";
import { InitialState } from "~/interfaces/main";
import mainReducer from "./mainReducer";
import SidebarContext from "./themeContext";
import { SIDEBARFALSE, SIDEBARTRUE } from "./types";

interface INITIALSTATE {
  sidebar: boolean;
}
export const MainContext = (props: any) => {
  const initialState: InitialState = {
    sidebar: false,
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  const toggleTrue = (action: boolean) => {
    dispatch({
      type: SIDEBARTRUE,
      payload: { sidebar: true },
    });
  };
  const toggleFalse = (action: boolean) => {
    dispatch({
      type: SIDEBARFALSE,
      payload: { sidebar: false },
    });
  };
  return (
    <SidebarContext.Provider
      value={{ sidebar: state.sidebar, toggleTrue, toggleFalse }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

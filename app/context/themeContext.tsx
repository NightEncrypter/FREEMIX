import { createContext } from "react";

interface AppContextInterface {
  sidebar: boolean;
  toggleTrue: Function;
  toggleFalse: Function;
}

const sidebarContext = createContext<AppContextInterface | null>(null);

export default sidebarContext;

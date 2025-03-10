import { createContext } from "react";

type SideBarContextType = {
    expanded: boolean
}

export const SideBarContext = createContext<SideBarContextType>({
    expanded: false
});
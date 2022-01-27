import { createContext } from "react";
import usePoll from "../hooks/usePoll";


export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const allContext = usePoll();
    return (
        <StateContext.Provider value={allContext}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;
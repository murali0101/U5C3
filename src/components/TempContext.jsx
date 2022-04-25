import { createContext, useState } from "react";

export const TempContext=createContext()
export const TempContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    function toggleAuth() { 
        setIsAuth((p) => {
            return (!p)
        })
    }
return <TempContext.Provider value={{isAuth,toggleAuth}}>{children}</TempContext.Provider>
}
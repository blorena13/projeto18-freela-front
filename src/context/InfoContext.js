import { createContext } from "react";
import { useState } from "react";

export const InfoContext = createContext();

export const InfoProvider =({ children}) => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState({name: "", bio: "", profileImage: ""});
    return (
        <InfoContext.Provider 
        value={{
            token, setToken,
            user, setUser
            }}>
            {children}
        </InfoContext.Provider>
    )
}
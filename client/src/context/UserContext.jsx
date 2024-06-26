import { createContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";


export const UserContext = createContext({})
export const AuthenticationContext = createContext({})

export function UserContextProvider({children}){
    const [userInfo, setUserInfo] = useLocalStorage("user", {first_name: "GUEST" , last_name : ""})
    const [authentication, setAuthentication] = useLocalStorage("auth", {guest: true, isLoggedIn: false})
    return (
        <AuthenticationContext.Provider value={{authentication, setAuthentication}}>
            <UserContext.Provider value={{userInfo, setUserInfo}}>
                {children}
            </UserContext.Provider>
        </AuthenticationContext.Provider>
    )
}
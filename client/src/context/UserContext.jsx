import { createContext, useState } from "react";

export const UserContext = createContext({})
export const AuthenticationContext = createContext({})

export function UserContextProvider({children}){
    const [userInfo, setUserInfo] = useState({})
    const [authentication, setAuthentication] = useState({guest: false, isLoggedIn: false})

    return (
        <AuthenticationContext.Provider value={{authentication, setAuthentication}}>
            <UserContext.Provider value={{userInfo, setUserInfo}}>
                {children}
            </UserContext.Provider>
        </AuthenticationContext.Provider>
    )
}
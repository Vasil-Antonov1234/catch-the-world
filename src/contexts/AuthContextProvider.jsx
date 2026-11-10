import { useState } from "react"
import AuthContext from "./AuthContext.js";

export default function AuthContextProvider({children}) {
    // const user = [user, setUser] = useState(null);

    async function onLogin() {

    };

    async function onLogout() {

    };

    // const isAuthenticated = !!user?.accessToken;
    const isAuthenticated = true

    const AuthContextValues = {
        onLogin,
        onLogout,
        isAuthenticated
    };

    return (
        <AuthContext.Provider value={AuthContextValues}>
            {children}
        </AuthContext.Provider>
    )
}
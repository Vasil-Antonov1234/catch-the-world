import { createContext } from "react";

const AuthContext = createContext({
    user: {
        id: -1,
        accessToken: "",
        email: ""
    },
    onLogin() {},
    onLogout() {},
    isAuthenticated: false,
    isPending: false
});

export default AuthContext;
import { createContext } from "react";

const AuthContext = createContext({
    auth: null,
    onLogin(email, password) {},
    onLogout() {},
    onRegister(email, password) {},
    isAuthenticated: false,
    isPending: false,
    user: {}
});

export default AuthContext;
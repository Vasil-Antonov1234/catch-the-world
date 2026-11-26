import { useContext, useEffect, useState } from "react"
import { getErrorMessage } from "../utils/error.util.js";
import AuthContext from "./AuthContext.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppContext from "./AppContext.js";
import { authApi } from "../api/index.js";
import { Alert } from "react-native";
import useSecureState from "../hooks/useSecureState.js";
import { setAccessToken } from "../api/api.js";

export default function AuthContextProvider({ children }) {
    const [auth, setAuth] = useSecureState("auth", null);
    const [isPending, setIsPending] = useState(false);
    const { clearWishlist, resetTheme } = useContext(AppContext);

    async function onLogin(email, password) {
        setIsPending(true);

        try {
            const result = await authApi.login(email, password);

            setAuth(result);

            console.log(result);

            setAccessToken(result.access_token);
        } catch (error) {
            Alert.alert(getErrorMessage(error));
        } finally {
            setIsPending(false);
        };
    };

    async function onLogout() {
        
        try {
            await authApi.logout(auth.access_token);
            
            setAuth(null);
            clearWishlist();
            resetTheme();
            setAccessToken(null)
            await AsyncStorage.removeItem("wishList");
            await AsyncStorage.removeItem("manualDarkTheme");
        } catch (error) {
            Alert.alert(getErrorMessage(error));
        };
    };

    async function onRegister(email, password, fullName) {
        setIsPending(true);

        try {

            const result = await authApi.register(email, password, fullName);

            setAuth(result);
        } catch (error) {
            Alert.alert("Register fail", getErrorMessage(error));
        } finally {
            setIsPending(false);
        };
    }

    const isAuthenticated = !!auth?.access_token;

    const AuthContextValues = {
        onLogin,
        onLogout,
        onRegister,
        isAuthenticated,
        auth,
        isPending
    };

    return (
        <AuthContext.Provider value={AuthContextValues}>
            {children}
        </AuthContext.Provider>
    )
}
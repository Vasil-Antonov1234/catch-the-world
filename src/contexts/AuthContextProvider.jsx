import { useContext, useEffect, useState, useRef } from "react"
import { getErrorMessage } from "../utils/error.util.js";
import AuthContext from "./AuthContext.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppContext from "./AppContext.js";
import { authApi } from "../api/index.js";
import { Alert } from "react-native";
import useSecureState from "../hooks/useSecureState.js";
import { auth, setAccessToken, setAuthHandlers } from "../api/api.js";
import { refresh } from "@react-native-community/netinfo";

export default function AuthContextProvider({ children }) {
    const [session, setSession] = useSecureState("auth", null);
    const [isPending, setIsPending] = useState(false);
    const { clearWishlist, resetTheme } = useContext(AppContext);

    const sessionRef = useRef(null);

    useEffect(() => {
        setAuthHandlers({
            refresh: async () => {
                const current = sessionRef.current;

                if (!current?.refresh_token) {
                    throw new Error("No refresh token");
                };

                console.log("try to sent refresh token")
                const response = await auth.post("/token?grant_type=refresh_token", {
                    refresh_token: current.refresh_token,
                });

                sessionRef.current = response.data;
                setSession(JSON.stringify(response.data));
                setAccessToken(response.data.access_token);

                return response.data.access_token;
            },
            onExpired: onLogout
        });
    }, []);

    async function onLogin(email, password) {
        setIsPending(true);

        try {
            const result = await authApi.login(email, password);

            setSession(result);
            setAccessToken(result.access_token);
        } catch (error) {
            Alert.alert(getErrorMessage(error));
        } finally {
            setIsPending(false);
        };
    };

    async function onLogout() {

        try {
            await authApi.logout(session.access_token);

            await AsyncStorage.removeItem("wishList");
            await AsyncStorage.removeItem("manualDarkTheme");
        } catch (error) {
            Alert.alert(getErrorMessage(error));
        } finally {
            sessionRef.current = null;
            setSession(null);
            clearWishlist();
            resetTheme();
            setAccessToken(null);
        };
    };

    async function onRegister(email, password, fullName) {
        setIsPending(true);

        try {

            const result = await authApi.register(email, password, fullName);

            setSession(result);
        } catch (error) {
            Alert.alert("Register fail", getErrorMessage(error));
        } finally {
            setIsPending(false);
        };
    }

    const isAuthenticated = !!session?.access_token;

    const AuthContextValues = {
        onLogin,
        onLogout,
        onRegister,
        isAuthenticated,
        auth: session,
        isPending,
        user: session?.user?.user_metadata
    };

    return (
        <AuthContext.Provider value={AuthContextValues}>
            {children}
        </AuthContext.Provider>
    )
}
import { useContext, useEffect, useState } from "react"
import { getErrorMessage } from "../utils/error.util.js";
import AuthContext from "./AuthContext.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppContext from "./AppContext.js";
import { authApi } from "../api/index.js";
import { Alert } from "react-native";
import useSecureState from "../hooks/useSecureState.js";

export default function AuthContextProvider({ children }) {
    const [auth, setAuth] = useSecureState("auth", null);
    const [isPending, setIsPending] = useState(false);
    const { clearWishlist } = useContext(AppContext);

    useEffect(() => {

        (async () => {
            try {
                setIsPending(true);
                const userData = await AsyncStorage.getItem("auth");


                if (userData) {
                    setAuth(JSON.parse(userData));
                };

            } catch (error) {
                Alert.alert(error);
            } finally {
                setIsPending(false);
            }
        })();

    }, []);

    async function onLogin(email, password) {
        setIsPending(true);

        try {
            const result = await authApi.login(email, password);

            setAuth(result);

            await AsyncStorage.setItem("auth", JSON.stringify(result));
        } catch (error) {
            Alert.alert(getErrorMessage(error));
        } finally {
            setIsPending(false);
        };
    };

    async function onLogout() {
        setAuth(null);
        clearWishlist();

        try {
            await AsyncStorage.removeItem("auth");
            await AsyncStorage.removeItem("wishList");
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
import { useContext, useEffect, useState } from "react"
import AuthContext from "./AuthContext.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppContext from "./AppContext.js";

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { clearWishlist } = useContext(AppContext);

    useEffect(() => {

        (async () => {
            try {
                setIsPending(true);
                const userData = await AsyncStorage.getItem("auth");

                
                if (userData) {
                    setUser(JSON.parse(userData));
                };

            } catch (error) {
                alert(error);
            } finally {
                setIsPending(false);
            }
        })();

    }, []);

    async function onLogin(email) {
        setIsPending(true);

        setUser({
            id: 1,
            email,
            accessToken: "dummy-access-token"
        });

        try {
            await AsyncStorage.setItem("auth", JSON.stringify({
                id: 1,
                email,
                accessToken: "dummy-access-token"
            }))
        } catch (error) {
            alert(error.message);
        } finally {
            setIsPending(false);
        };
    };

    async function onLogout() {
        setUser(null);
        clearWishlist();

        try {
            await AsyncStorage.removeItem("auth");
            await AsyncStorage.removeItem("wishList");
        } catch (error) {
            alert(error.message);
        };
    };

    const isAuthenticated = !!user?.accessToken;

    const AuthContextValues = {
        onLogin,
        onLogout,
        isAuthenticated,
        user,
        isPending
    };

    return (
        <AuthContext.Provider value={AuthContextValues}>
            {children}
        </AuthContext.Provider>
    )
}
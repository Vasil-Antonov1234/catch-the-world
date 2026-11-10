import { useEffect, useState } from "react"
import AuthContext from "./AuthContext.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {

        (async () => {
            try {
                const userData = await AsyncStorage.getItem("auth");

                
                if (userData) {
                    setUser(JSON.parse(userData));
                };

            } catch (error) {
                alert(error);
            };
        })();

    }, []);

    async function onLogin(email) {
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
            alert(error);
        };
    };

    async function onLogout() {
        setUser(null);

        try {
            await AsyncStorage.removeItem("auth");
        } catch (error) {
            alert(error)
        }
    };

    const isAuthenticated = !!user?.accessToken;

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
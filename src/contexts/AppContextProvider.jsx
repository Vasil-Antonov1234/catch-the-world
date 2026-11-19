import AppContext from "./AppContext.js";
import { useState, useMemo } from "react";
import usePersistedState from "../hooks/usePersistedState.js";
import { Platform } from "react-native";

export default function AppContextProvider({ children }) {

    const [wishList, setWishList] = usePersistedState("wishList", []);
    const [isDarkTheme, setIsDarkTheme] = usePersistedState("isDarkTheme", false);

    function addToWishlist(item) {
        setWishList((state) => [...state, item]);
    };

    function removeFromWishlist(index) {
        setWishList((state) => state.filter((x, i) => i !== index));
    };

    function clearWishlist() {
        setWishList([]);
    };

    function resetTheme() {
        setIsDarkTheme(false);
    };

    function toggleTheme() {
        setIsDarkTheme((state) => !state);
    };

    const lightTheme = useMemo(() => ({
        colors: {
            // Brand
            primary: '#0B4F6C',
            accent: '#E85D3F',

            // Surfaces
            background: '#FAF5EC',
            surface: '#FFFFFF',
            backgroundDarck: "#6b7a8681",
            LightBlue: "#d7e5eb",
            shadowColor: '#000000',
            golden: "#F59E0B",

            // Text
            textPrimary: '#1F2A33',
            textSecondary: '#6B7A86',
            textOnPrimary: '#FFFFFF',
            link: '#0000EE',

            // Feedback
            success: '#3E8E6B',
            error: '#D64545',

            // Transperant
            transperant: "rgba(255,255,255,0.70)",
            accentTransperant: '#e85e3f80'
        },
        fonts: Platform.select({
            ios: {
                regular: 'System',
                bold: 'System',
            },
            android: {
                regular: 'Roboto',
                bold: 'Roboto',
            },
            default: {
                regular: 'System',
                bold: 'System',
            },
        })

    }), []);

    const darckTheme = useMemo(() => ({
        colors: {
            // Brand
            primary: '#0B4F6C',
            accent: '#E85D3F',

            // Surfaces
            background: '#1F2A33',
            surface: '#2C3E50',
            backgroundDarck: "#6b7a8681",
            LightBlue: "#d7e5eb",
            shadowColor: '#000000',
            golden: "#F59E0B",

            // Text
            textPrimary: '#FFFFFF',
            textSecondary: '#B0B0B0',
            textOnPrimary: '#FFFFFF',

            // Feedback
            success: '#3E8E6B',
            error: '#D64545',

            // Transperant
            transperant: "rgba(255,255,255,0.70)",
            accentTransperant: '#e85e3f80'
        },
        fonts: Platform.select({
            ios: {
                regular: 'System',
                bold: 'System',
            },
            android: {
                regular: 'Roboto',
                bold: 'Roboto',
            },
            default: {
                regular: 'System',
                bold: 'System',
            },
        })
    }), []);

    const AppContextValues = {
        wishList,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isDarkTheme,
        resetTheme,
        toggleTheme,
        theme: isDarkTheme ? darckTheme : lightTheme
    };

    return (
        <AppContext.Provider value={AppContextValues}>
            {children}
        </AppContext.Provider>
    );
}
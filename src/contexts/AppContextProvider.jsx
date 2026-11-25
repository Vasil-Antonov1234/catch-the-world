import AppContext from "./AppContext.js";
import { useState, useMemo, useEffect } from "react";
import usePersistedState from "../hooks/usePersistedState.js";
import { Platform } from "react-native";
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from "react-native";
import { setBackgroundColorAsync } from "expo-system-ui";
import useReduceState from "../hooks/useReduceState.js";


export default function AppContextProvider({ children }) {

    const [wishList, setWishList] = usePersistedState("wishList", []);
    const [manualDarkTheme, setManualDarkTheme] = usePersistedState("manualDarkTheme", null);
    const colorScheme = useColorScheme();
    const isDarkTheme = manualDarkTheme ?? colorScheme === 'dark';

    // const { data, dispatch} = useReduceState();

    const lightTheme = useMemo(() => ({
        ...DefaultTheme,
        dark: false,
        colors: {
            ...DefaultTheme.colors,
            // Brand
            primary: '#0B4F6C',
            accent: '#E85D3F',
            logo: '#E85D3F',

            // Surfaces
            background: '#FAF5EC',
            surface: '#FFFFFF',
            backgroundDarck: "#6b7a86c5",
            LightBlue: "#d7e5eb",
            shadowColor: '#000000',
            golden: "#F59E0B",

            // Text
            textPrimary: '#1F2A33',
            textSecondary: '#6B7A86',
            textOnSecondary: '#bfcad3',
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
        ...DarkTheme,
        dark: true,
        colors: {
            ...DarkTheme.colors,
            // Brand
            primary: '#b7c8cf',
            accent: '#f1cab4',
            logo: '#E85D3F',

            // Surfaces
            background: '#1F2A33',
            surface: '#2C3E50',
            backgroundDarck: "#b0c9ddb9",
            LightBlue: "#205f7a",
            shadowColor: '#000000',
            golden: "#F59E0B",

            // Text
            textPrimary: '#FFFFFF',
            textSecondary: '#B0B0B0',
            textOnSecondary: '#5d5f61',
            textOnPrimary: '#000000',
            link: '#b8b8eb',

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

    useEffect(() => {
        setBackgroundColorAsync(isDarkTheme ? darckTheme.colors.background : lightTheme.colors.background);
    }, [isDarkTheme]);

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
        setManualDarkTheme(null);
    };

    function toggleTheme() {
        setManualDarkTheme((state) => !state);
    };


    const AppContextValues = {
        wishList,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isDarkTheme,
        resetTheme,
        toggleTheme,
        theme: isDarkTheme ? darckTheme : lightTheme,
        // data,
        // dispatch
    };

    return (
        <AppContext.Provider value={AppContextValues}>
            {children}
        </AppContext.Provider>
    );
}
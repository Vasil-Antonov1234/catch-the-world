import AppContext from "./AppContext.js";
import { useState } from "react";
import usePersistedState from "../hooks/usePersistedState.js";

export default function AppContextProvider({ children }) {
    
    const [wishList, setWishList] = usePersistedState("wishList", []);

    function addToWishlist(item) {
        setWishList((state) => [...state, item]);
    };

    function removeFromWishlist(index) {
        setWishList((state) => state.filter((x, i) => i !== index));
    };

    const AppContextValues = {
        wishList,
        addToWishlist,
        removeFromWishlist
    };

    return (
        <AppContext.Provider value={AppContextValues}>
            {children}
        </AppContext.Provider>
    );
}
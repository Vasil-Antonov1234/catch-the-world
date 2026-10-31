import AppContext from "./AppContext.js";
import data from "../../data.json";
import { useState } from "react";

export default function AppContextProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activePlace, setActivePlace] = useState(null);
    const [places, setPlaces] = useState(data);

    function searchPlacesHandler() {

        const filteredPlaces = data.filter((place) => place.name.toLowerCase().includes(searchQuery.toLowerCase()) || place.location.toLowerCase().includes(searchQuery.toLowerCase()));

        setPlaces(filteredPlaces);
    };

    const AppContextValues = {
        places,
        searchPlacesHandler,
        searchQuery,
        setSearchQuery,
        activePlace,
        setActivePlace
    }

    return (
        <AppContext.Provider value={AppContextValues}>
            {children}
        </AppContext.Provider>
    );
}
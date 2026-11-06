import AppContext from "./AppContext.js";
import data from "../../data.json";
import { useState } from "react";

export default function AppContextProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [masterCities, setMasterCities] = useState(data);
    const [cities, setCities] = useState(data);
    const [placeId, setPlaceId] = useState(data.length);
    const [isEdit, setIsEdit] = useState(false);
    const [isSearching, setIsSearching] = useState(false);

    function searchPlacesHandler(query) {
        const filteredPlaces = masterCities.filter((place) => place.name.toLowerCase().includes(query.toLowerCase()) || place.location.toLowerCase().includes(query.toLowerCase()));
        setCities(filteredPlaces);
        setIsSearching(true);
    };

    function resetSearchHandler() {
        setCities(masterCities);
        setIsSearching(false);
    }

    function addPlaceHandler(place) {

        if (isEdit) {
            deletePlaceHandler(place.id);
        };

        if (!isEdit) {
            place.id = placeId + 1;
            setPlaceId(state => state + 1);
        };

        setMasterCities(state => [...state, place]);
        setCities(masterCities);
        setIsEdit(false);
    };

    function wantToVisitHandler(placeId) {
        setCities(state => state.map(place => place.id === placeId ? { ...place, wantToVisit: !place.wantToVisit } : place));
    };

    function deletePlaceHandler(id) {
        setMasterCities(state => state.filter((place) => place.id !== id));
        setCities(masterCities);
        setIsSearching(false);
    };

    const AppContextValues = {
        cities,
        masterCities,
        isSearching,
        setIsSearching,
        searchPlacesHandler,
        addPlaceHandler,
        setIsEdit,
        wantToVisitHandler,
        deletePlaceHandler,
        resetSearchHandler
    };

    return (
        <AppContext.Provider value={AppContextValues}>
            {children}
        </AppContext.Provider>
    );
}
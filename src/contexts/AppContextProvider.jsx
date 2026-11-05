import AppContext from "./AppContext.js";
import data from "../../data.json";
import { useState } from "react";

export default function AppContextProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activePlace, setActivePlace] = useState(data[0]);
    const [places, setPlaces] = useState(data);
    const [placeId, setPlaceId] = useState(data.length);
    const [isEdit, setIsEdit] = useState(false);

    function searchPlacesHandler() {
        const filteredPlaces = data.filter((place) => place.name.toLowerCase().includes(searchQuery.toLowerCase()) || place.location.toLowerCase().includes(searchQuery.toLowerCase()));

        setPlaces(filteredPlaces);
    };

    function pressHandler(place) {
        setActivePlace(place);
    };

    function addPlaceHandler(place) {

        if (isEdit) {
            deletePlaceHandler(place.id);
        };

        if (!isEdit) {
            place.id = placeId + 1;
            setPlaceId(state => state + 1);
        };

        setPlaces(state => [...state, place]);
        setIsEdit(false);
        setActivePlace(null);
    };

    function wantToVisitHandler(placeId) {
        setPlaces(state => state.map(place => place.id === placeId ? { ...place, wantToVisit: !place.wantToVisit } : place));
    };

    function deletePlaceHandler(id) {
        setPlaces(state => state.filter((place) => place.id !== id));
        setActivePlace(null);
    };

    const AppContextValues = {
        places,
        searchPlacesHandler,
        searchQuery,
        setSearchQuery,
        activePlace,
        pressHandler,
        addPlaceHandler,
        setIsEdit,
        wantToVisitHandler,
        deletePlaceHandler
    };

    return (
        <AppContext.Provider value={AppContextValues}>
            {children}
        </AppContext.Provider>
    );
}
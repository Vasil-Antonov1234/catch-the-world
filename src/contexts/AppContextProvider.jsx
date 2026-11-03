import AppContext from "./AppContext.js";
import data from "../../data.json";
import { useState } from "react";

export default function AppContextProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activePlace, setActivePlace] = useState(null);
    const [places, setPlaces] = useState(data);
    const [placeId, setPlaceId] = useState(data.length);

    function searchPlacesHandler() {

        const filteredPlaces = data.filter((place) => place.name.toLowerCase().includes(searchQuery.toLowerCase()) || place.location.toLowerCase().includes(searchQuery.toLowerCase()));

        setPlaces(filteredPlaces);
    };

    function pressHandler(place) {
        setActivePlace(place);
    };

    function addPlaceHandler(place) {
        // places.push({...place, id: places.length + 1});
        place.id = placeId + 1;
        setPlaceId(state => state + 1);
        setPlaces(state => [...state, place]);
    };

    function wantToVisitHandler(placeId) {
        setPlaces(state => state.map(place => place.id === placeId ? { ...place, wantToVisit: !place.wantToVisit } : place));
        console.log(places)
    };

    const AppContextValues = {
        places,
        searchPlacesHandler,
        searchQuery,
        setSearchQuery,
        activePlace,
        pressHandler,
        addPlaceHandler,
        wantToVisitHandler
    };

    return (
        <AppContext.Provider value={AppContextValues}>
            {children}
        </AppContext.Provider>
    );
}
import { createContext } from "react";

const AppContext = createContext({
    cities: [],
    masterCities: [],
    isSearching: false,
    setIsSearching() {},
    searchPlacesHandler() {},
    setActivePlace() {},
    addPlaceHandler() {},
    wantToVisitHandler() {},
    deletePlaceHandler() {},
    setIsEdit() {},
    resetSearchHandler() {}
});

export default AppContext;
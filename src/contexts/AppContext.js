import { createContext } from "react";
// import places from "../../data.json";

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
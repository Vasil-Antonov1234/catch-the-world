import { createContext } from "react";
// import places from "../../data.json";

const AppContext = createContext({
    cities: [],
    searchQuery: "",
    activePlace: null,
    searchPlacesHandler() {},
    setSearchQuery() {},
    setActivePlace() {},
    pressHandler() {},
    addPlaceHandler() {},
    wantToVisitHandler() {},
    deletePlaceHandler() {},
    setIsEdit() {},
    resetSearchHandler() {}
});

export default AppContext;
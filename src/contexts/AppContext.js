import { createContext } from "react";
// import places from "../../data.json";

const AppContext = createContext({
    places: [],
    searchQuery: "",
    activePlace: null,
    searchPlacesHandler() {},
    setSearchQuery() {},
    setActivePlace() {},
    pressHandler() {},
    addPlaceHandler() {},
    wantToVisitHandler() {},
    deletePlaceHandler() {},
    setIsEdit() {}
});

export default AppContext;
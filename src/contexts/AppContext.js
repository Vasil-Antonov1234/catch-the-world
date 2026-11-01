import { createContext } from "react";
// import places from "../../data.json";

const AppContext = createContext({
    places: [],
    searchQuery: "",
    activePlace: null,
    searchPlacesHandler() {},
    setSearchQuery() {},
    setActivePlace() {},
    pressHandler() {}
});

export default AppContext;
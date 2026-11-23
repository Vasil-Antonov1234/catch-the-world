import { createContext } from "react";

const AppContext = createContext({
   wishList: [],
   addToWishlist() { },
   removeFromWishlist() { },
   clearWishlist() { },
   isDarkTheme: false,
   resetTheme() { },
   toggleTheme() { },
   theme: {},
   data: [],
   dispatch() {}
});

export default AppContext;
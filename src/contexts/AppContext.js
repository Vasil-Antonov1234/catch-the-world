import { createContext } from "react";

const AppContext = createContext({
   wishList: [],
   addToWishlist() {},
   removeFromWishlist() {},
   clearWishlist() {}
});

export default AppContext;
import { createContext } from "react";

const AppContext = createContext({
   wishList: [],
   addToWishlist() {},
   removeFromWishlist() {}
});

export default AppContext;
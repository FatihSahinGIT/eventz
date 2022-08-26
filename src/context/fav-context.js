import { useState, createContext } from "react";

const FavContext = createContext({
  fav: [],
  favAmount: 0,
  addFav: (favEvent) => {},
  removeFav: (id) => {},
});

export const FavContextProvider = (props) => {
  const [fav, setFav] = useState([]);

  const addFavHandler = (favEvent) => {
    setFav((prev) => {
      return prev.concat(favEvent);
    });
  };

  const removeFavHandler = (id) => {
    setFav((prev) => {
      return prev.filter((event) => event.id !== id);
    });
  };

  const context = {
    fav: fav,
    favAmount: fav.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
};

export default FavContext;

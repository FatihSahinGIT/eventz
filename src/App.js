import "./index.css";

import Nav from "./comp/UI/Nav";

import { Route, Switch } from "react-router-dom";

import AllEvents from "./comp/Pages/AllEvents";
import FavoriteEvents from "./comp/Pages/FavoriteEvents";

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <Switch>
        <Route path="/eventz" exact>
          <AllEvents />
        </Route>
        <Route path="/favorite">
          <FavoriteEvents />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

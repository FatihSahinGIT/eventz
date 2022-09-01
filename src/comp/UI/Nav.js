import React from "react";

import { Link } from "react-router-dom";

import classes from "../style/Nav.module.css";

import { useContext } from "react";
import FavContext from "../../context/fav-context";

const Nav = () => {
  const favCtx = useContext(FavContext);

  return (
    <header className={classes.navcontainer}>
      <div>
        <h1 className={classes.navlogo}>
          <Link to="/">eventz</Link>
        </h1>
      </div>

      <nav>
        <ul className={classes.navcontent}>
          <li>
            <Link to="/eventz">All Events</Link>
          </li>
          <li>
            <Link to="/favorite">
              Favorite Events{" "}
              <span className={classes.badge}>{favCtx.favAmount}</span>{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

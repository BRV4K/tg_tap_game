//@ts-nocheck

import "./Navbar.scss";
// import React from "react";
import { NavLink } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
import Heroes from "./NavbarItems/Heroes";
import React from "react";
import Upgrade from "./NavbarItems/Upgrade";
import Game from "./NavbarItems/Game";
import Quest from "./NavbarItems/Quest";
import Friends from "./NavbarItems/Friends";
import styles from "./navbar.module.css";
import './Navbar.scss'

function Navbar() {
  return (
    <div className={styles.container}>
      <NavLink className={styles.item + " text-decoration-none"} to="/heroes">
        {({ isActive }) => (
          <>
            <div className={"w-100 d-flex justify-content-center"}>
              <Heroes active={isActive} />
            </div>
            <div className={`p-0 m-0 ${isActive ? 'navbar-text-active' :'navbar-text'}`}>Герои</div>
          </>
        )}
      </NavLink>

      <NavLink className={styles.item}>
        {({ isActive }) => (
          <>
            <div className={"w-100 d-flex justify-content-center"}>
              <Upgrade active={isActive} disable={true} />
            </div>
            <div className={`p-0 m-0 navbar-text`} style={{ opacity: 0.3}}>Улучшения</div>
          </>
        )}
      </NavLink>

      <NavLink className={"game"} to="/">
        {({ isActive }) => <Game active={isActive} />}
      </NavLink>

      <NavLink className={styles.item + " text-decoration-none"} to={'/quest'}>
        {({ isActive }) => (
          <>
            <div className={"w-100 d-flex justify-content-center"}>
              <Quest active={isActive} />
            </div>
            <div className={`p-0 m-0 ${isActive ? 'navbar-text-active' :'navbar-text'}`}>Задания</div>
          </>
        )}
      </NavLink>

      <NavLink className={styles.item + " text-decoration-none"} to="/refferal">
        {({ isActive }) => (
          <>
            <div className={"w-100 d-flex justify-content-center"}>
              <Friends active={isActive} />
            </div>
            <div className={`p-0 m-0 ${isActive ? 'navbar-text-active' :'navbar-text'}`}>Друзья</div>
          </>
        )}
      </NavLink>
    </div>
  );
}

export default Navbar;

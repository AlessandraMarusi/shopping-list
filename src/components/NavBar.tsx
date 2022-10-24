import { NavLink } from "react-router-dom";
import "../styles/navbarStyle.scss";

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/shopping-list" end>
          Lista
        </NavLink>
        {/* <NavLink to="/ProductAdd">Add Producto WoW</NavLink> */}
        <NavLink to="/recipe-list">Recipes List</NavLink>
        <NavLink to="/cat-facts">Cat Facts!</NavLink>
      </nav>
    </header>
  );
};
export default NavBar;

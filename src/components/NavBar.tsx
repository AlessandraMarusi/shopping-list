import { NavLink } from "react-router-dom";
import "../styles/navbarStyle.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" end>
        Lista
      </NavLink>
      {/* <NavLink to="/ProductAdd">Add Producto WoW</NavLink> */}
      <NavLink to="/RecipeList">Recipes List</NavLink>
      <NavLink to="/CatFacts">Cat Facts!</NavLink>
    </div>
  );
};
export default NavBar;

import { NavLink } from "react-router-dom";

const NavBar = () => {
  /* #region STYLE */
  const navBarStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "--myWhite",
    backgroundColor: "--myBlack",
    width: "50%",
    margin: "0 auto",
    height: "10vh",
  };
  /* #endregion */

  return (
    <div style={navBarStyle}>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/ProductAdd">Add Producto WoW</NavLink>
      <NavLink to="/page2">Page 2</NavLink>
    </div>
  );
};
export default NavBar;

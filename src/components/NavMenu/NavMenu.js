import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="nav">
      <ul className="nav--ul">
        <li>
          <NavLink className="nav--link" to="/" exact="true">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav--link" to="/users" exact="true">
            Users list
          </NavLink>
        </li>
        <li>
          <NavLink className="nav--link" to="/contact" exact="true">
            Contact form
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;

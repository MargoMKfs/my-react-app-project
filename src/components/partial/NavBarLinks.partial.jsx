import { NavLink } from "react-router-dom";

const NavBarLinksPartial = ({ url, label }) => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link active"
        aria-current="page"
        id="a-color"
        to={url}
      >
        {label}
      </NavLink>
    </li>
  );
};
export default NavBarLinksPartial;

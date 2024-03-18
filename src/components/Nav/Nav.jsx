import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Nav.module.css";

export default function Nav() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={buildLinkClass}>
        About
      </NavLink>
      <NavLink to="/products" className={buildLinkClass}>
        Products
      </NavLink>
    </nav>
  );
}

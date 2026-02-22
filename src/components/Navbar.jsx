import { NavLink } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../State/globalContext";

function Navbar() {
  const user = useContext(GlobalContext).user;

  return (
    <nav className="bg-light py-4">
      <div className="container text-center">

        <h1 className="fw-bold text-dark mb-3">
          Prime Gaming Supply
        </h1>

        <ul className="nav justify-content-center">

          <li className="nav-item fw-bold text-dark mb-3">
            <NavLink to="/home" className="nav-link">Home</NavLink>
          </li>

          <li className="nav-item fw-bold text-dark mb-3">
            <NavLink to="/catalog" className="nav-link">Catalog</NavLink>
          </li>

          <li className="nav-item fw-bold text-dark mb-3">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>

          <li className="nav-item fw-bold text-dark mb-3">
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </li>

          <li className="nav-item fw-bold text-dark mb-3">
            <NavLink to="/admin" className="nav-link">Admin</NavLink>
          </li>

          <li className="nav-item fw-bold text-dark mb-3">
            <span className="nav-link">{user.name}</span>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
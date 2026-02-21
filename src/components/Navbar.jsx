import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-light py-4">
      <div className="container text-center">

        <h1 className="fw-bold text-dark mb-3">
          Prime Gaming Supply
        </h1>

        <ul className="nav justify-content-center">

          <li className="nav-item">
            <NavLink to="/home" className="nav-link">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/catalog" className="nav-link">Catalog</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/admin" className="nav-link">Admin</NavLink>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
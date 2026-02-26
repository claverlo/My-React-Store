import { NavLink } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../State/globalContext";
import { IconUser, IconShoppingCart } from "@tabler/icons-react";

function Navbar() {
  const { user, cart } = useContext(GlobalContext);

  function getTotalItems() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].quantity;
    }
    return sum;
  }

return (
  <nav
    className="py-4"
    style={{ backgroundColor: "#fdfdfd00" }}
  >
    <div className="container-fluid">
      <h1 className="text-center mt-1 mb-2">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span className="bg-dark text-white px-5 py-3 rounded-pill shadow-lg fw-bold d-inline-block">
            Prime Gaming Supply
            <br />
            <span className="fs-2 fw-normal">
              Welcome Gamers
            </span>
          </span>
        </NavLink>
      </h1>

        <div className="d-flex align-items-center justify-content-between">

          <div className="flex-fill"></div>

          <ul className="nav">
            <li className="nav-item fw-bold">
              <NavLink to="/" className="nav-link text-dark fw-bold">Home</NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink to="/catalog" className="nav-link text-dark fw-bold">Catalog</NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink to="/about" className="nav-link text-dark fw-bold">About</NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink to="/contact" className="nav-link text-dark fw-bold">Contact</NavLink>
            </li>
            <li className="nav-item fw-bold">
              <NavLink to="/admin" className="nav-link text-dark fw-bold">Admin</NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-4">
            <span className="nav-link text-dark d-flex align-items-center gap-1 fw-bold">
              <IconUser size={18} />
              {user.name}
            </span>

            <NavLink
              to="/cart"
              className="nav-link text-dark d-flex align-items-center gap-1 fw-bold"
            >
              <IconShoppingCart size={18} />
              Cart ({getTotalItems()})
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
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
    <>
      <div className="w-100 d-flex justify-content-center align-items-center py-3 position-relative">

        <div
          className="d-flex align-items-center gap-2"
          style={{
            position: "absolute",
            top: "5px",
            right: "20px",
            fontWeight: "bold",
            zIndex: 100
          }}
        >
          <IconUser size={18} />
          {user.name}
        </div>

        <NavLink
          to="/"
          className="d-flex align-items-center gap-3 text-decoration-none"
        >
          <div className="d-flex align-items-center gap-2">

            <span className="fw-bold text-dark" style={{ fontSize: "2.5rem" }}>H</span>

            <img
              src="https://cdn-icons-png.flaticon.com/512/889/889455.png"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://cdn-icons-png.flaticon.com/512/889/889455.png"
              style={{ width: "40px", height: "40px" }}
            />

            <span className="fw-bold text-dark" style={{ fontSize: "2.5rem" }}>PS</span>

            <span className="fw-bold text-dark ms-2" style={{ fontSize: "2.5rem" }}>
              AUTHORITY
            </span>

          </div>
        </NavLink>
      </div>

      <nav className="py-4" style={{ backgroundColor: "#8d121200" }}>
        <div className="container-fluid position-relative">
          <ul
            className="nav position-absolute top-50 start-50 translate-middle"
            style={{ zIndex: 2 }}
          >
            <li className="nav-item fw-bold">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  "nav-link text-dark fw-bold " + (isActive ? "text-decoration-underline" : "")
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item fw-bold">
              <NavLink 
                to="/catalog" 
                className={({ isActive }) => 
                  "nav-link text-dark fw-bold " + (isActive ? "text-decoration-underline" : "")
                }
              >
                Catalog
              </NavLink>
            </li>

            <li className="nav-item fw-bold">
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  "nav-link text-dark fw-bold " + (isActive ? "text-decoration-underline" : "")
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item fw-bold">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  "nav-link text-dark fw-bold " + (isActive ? "text-decoration-underline" : "")
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item fw-bold">
              <NavLink 
                to="/admin" 
                className={({ isActive }) => 
                  "nav-link text-dark fw-bold " + (isActive ? "text-decoration-underline" : "")
                }
              >
                Admin
              </NavLink>
            </li>
          </ul>

          <div className="d-flex justify-content-end align-items-center gap-5">
            <NavLink
              to="/cart"
              className="nav-link text-dark d-flex align-items-center gap-1 fw-bold"
            >
              <IconShoppingCart size={18} />
              Cart ({getTotalItems()})
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar; 
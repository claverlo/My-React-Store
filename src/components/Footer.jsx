import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-white pt-5 pb-3 w-100"
      style={{ backgroundColor: "#111" }}
    >
      <div className="container">

        <div className="row text-start">

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Hoops Authority</h5>
            <p className="text-secondary">
              Your go-to shop for premium basketball gear, jerseys, and street-ready style.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>

            <p className="mb-1">
              <NavLink to="/catalog" className="text-secondary text-decoration-none">
                Shop
              </NavLink>
            </p>

            <p className="mb-1">
              <NavLink to="/about" className="text-secondary text-decoration-none">
                About Us
              </NavLink>
            </p>

            <p className="mb-1">
              <NavLink to="/contact" className="text-secondary text-decoration-none">
                Contact
              </NavLink>
            </p>

            <p className="mb-1">
              <NavLink to="/contact" className="text-secondary text-decoration-none">
                Support
              </NavLink>
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Contact</h6>
            <p className="mb-1">Phone: 1-800-800-8000</p>
            <p className="mb-1">Email: support@hoopsauthority.com</p>
            <p className="mb-1">X: @HoopsAuthority</p>
            <p className="mb-1">Instagram: @HoopsAuthorityOfficial</p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center text-secondary">
          © 2026 Hoops Authority. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
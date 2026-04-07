import { useContext } from "react";
import GlobalContext from "../State/globalContext";
import steph from "../Images/stephcurry.jpg";
import profileBg from "../Images/profile.jpg";
import { IconMapPin } from "@tabler/icons-react";

function Profile() {
  const { user } = useContext(GlobalContext);

  return (
    <div className="position-relative min-vh-100 pt-5 pb-3">

      <img
        src={profileBg}
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", zIndex: 0 }}
        alt=""
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>

        <div className="row justify-content-center mt-5">

          <div className="col-lg-15">

            <div
              className="card p-3 shadow-lg border-0 rounded-4 text-center mx-auto"
              style={{ width: "75%", maxWidth: "700px" }}
            >

              <img
                src={steph}
                className="rounded-circle mx-auto mb-3"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />

              <h4 className="mb-1">Stephen Curry</h4>
              <p className="text-muted mb-1">{user.email}</p>

              <h6 className="text-primary fw-bold mb-3">Premium Member</h6>

              <div className="mb-4">
                <h6 className="mb-0">12 Orders</h6>
              </div>

              <hr />

              <p className="mb-1 fw-semibold">
                Signed in as <span className="text-dark">Steph30</span>
              </p>
              <p className="text-muted small mb-3">{user.email}</p>

              <div className="d-flex justify-content-center gap-3 mb-4">
                <span className="text-primary" style={{ cursor: "pointer" }}>
                  Switch Account
                </span>
                <span className="text-danger" style={{ cursor: "pointer" }}>
                  Sign Out
                </span>
              </div>

              <button className="btn btn-dark w-50 mx-auto mb-4">
                Edit Profile
              </button>

              <hr />

              <h5 className="mb-3 d-flex align-items-center justify-content-center gap-2">
                <IconMapPin size={20} />
                Shipping Address
              </h5>

              <div className="text-center mt-3">

                <p className="mb-1">
                  {user.address.street}
                </p>

                <p className="mb-0">
                  {user.address.city}, {user.address.state} {user.address.zip}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;
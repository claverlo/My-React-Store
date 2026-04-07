import { useContext } from "react";
import GlobalContext from "../State/globalContext";
import steph from "../Images/stephcurry.jpg";

function Profile() {
  const { user } = useContext(GlobalContext);

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-2">My Profile</h2>
      <p className="text-center text-muted">Your personal information</p>

      <div className="row mt-4">

        <div className="col-md-4">
          <div className="card p-4 shadow text-center">

            <img
              src={steph}
              className="rounded-circle mx-auto mb-3"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />

            <h5>{user.firstName} {user.lastName}</h5>
            <p className="text-muted">{user.email}</p>

            <button className="btn btn-outline-primary mt-2">
              Edit Profile
            </button>

          </div>
        </div>

        <div className="col-md-8">
          <div className="card p-4 shadow text-center">

            <h5 className="mb-3">Shipping Address</h5>
            <hr />

            <p><strong>Street:</strong> {user.address.street}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>State:</strong> {user.address.state}</p>
            <p><strong>ZIP:</strong> {user.address.zip}</p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;
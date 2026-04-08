import { useContext, useState } from "react";
import GlobalContext from "../State/globalContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, getCoupon } = useContext(GlobalContext);
  const [discount, setDiscount] = useState("");
  const [discountValue, setDiscountValue] = useState(0);
  const navigate = useNavigate();

  const TAX_RATE = 0.08;

  function getSubtotal() {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  }

  function applyDiscount() {
    const found = getCoupon(discount.toUpperCase());

    if (found) {
      setDiscountValue(found.percent / 100);
    } else {
      setDiscountValue(0);
      alert("Invalid code");
    }
  }

  const subtotal = getSubtotal();
  const discountAmount = subtotal * discountValue;
  const afterDiscount = subtotal - discountAmount;
  const tax = afterDiscount * TAX_RATE;
  const finalTotal = afterDiscount + tax;

  return (
    <div className="container mt-5">

    <div className="d-flex justify-content-between mb-3">
        <button
          className="btn btn-success"
          onClick={() => navigate("/catalog")}
        >
          Continue Shopping
        </button>
      </div>

      <h2 className="text-center mb-4">Checkout</h2>

      <div className="card p-4 shadow">

        <h5>Order Summary</h5>

        {cart.map(item => (
          <div key={item._id} className="d-flex justify-content-between">
            <span>{item.title} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}

        <hr />

        <div className="d-flex justify-content-between">
          <strong>Subtotal:</strong>
          <strong>${subtotal.toFixed(2)}</strong>
        </div>

        <div className="d-flex justify-content-between text-success">
          <span>Discount:</span>
          <span>- ${discountAmount.toFixed(2)}</span>
        </div>

        <div className="d-flex justify-content-between">
          <span>Tax (8%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className="d-flex justify-content-between mt-2">
          <strong>Total:</strong>
          <strong>${finalTotal.toFixed(2)}</strong>
        </div>

        <hr />

        <div className="mt-3">
          <label>Discount Code</label>
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
            <button className="btn btn-dark" onClick={applyDiscount}>
              Apply
            </button>
          </div>
        </div>

        <button className="btn btn-success mt-4 w-100">
          Place Order
        </button>

        <div className="mt-3">
          <button className="btn w-100 mb-2" style={{ background: "#ffc439", fontWeight: "bold" }}>
            Pay with PayPal
          </button>

          <button className="btn w-100 mb-2" style={{ background: "black", color: "white", fontWeight: "bold" }}>
            Apple Pay
          </button>

          <button className="btn w-100" style={{ background: "#0d6efd", color: "white", fontWeight: "bold" }}>
            Pay with Card
          </button>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
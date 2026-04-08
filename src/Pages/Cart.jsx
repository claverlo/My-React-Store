import { useContext } from 'react'
import GlobalContext from '../State/globalContext'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { cart, removeProductFromCart, setProductQuantity, clearCart } = useContext(GlobalContext)
  const navigate = useNavigate()

  function getCartTotal() {
    let total = 0
    cart.forEach(item => {
      total += (item.price || 0) * (item.quantity || 0)
    })
    return total.toFixed(2)
  }

  return (
    <div className="bg-light p-4" style={{ minHeight: "100vh" }}>

      <div className="d-flex justify-content-end gap-2 mb-3 ">
        <button
          className="btn btn-success"
          onClick={() => navigate("/catalog")}
        >
          Continue Shopping
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            clearCart()
          }}
        >
          Clear All
        </button>
      </div>

      {cart.length === 0 && (
        <h4 className="text-center">Cart is empty</h4>
      )}

      {cart.map(product => (
        <div
          key={product._id + "-" + (product.size || "nosize")}
          className="bg-white border rounded mb-3 p-4 d-flex justify-content-between align-items-center"
        >

          <div className="d-flex align-items-center">
            <img
              src={
                Array.isArray(product.image)
                  ? product.image[0]
                  : product.image || ""
              }
              width={100}
              alt={product.title}
              className="me-4"
            />
            <div>
              <h5 className="mb-0">{product.title}</h5>
              {product.size && (
                <small className="text-muted">Size: {product.size}</small>
              )}
            </div>
          </div>

          <div className="d-flex align-items-end gap-4">

            <div>
              <label className="form-label">Quantity</label>
              <input
                type="number"
                min="1"
                step="1"
                value={product.quantity}
                onChange={(e) => {
                  let val = Number(e.target.value)
                  if (val >= 1) {
                    setProductQuantity(product._id, val, product.size)
                  }
                }}
                className="form-control"
                style={{ width: "90px" }}
              />
            </div>

            <div>
              <label className="form-label">Price</label>
              <input
                type="text"
                value={`$${Number(product.price || 0).toFixed(2)}`}
                disabled
                className="form-control"
                style={{ width: "120px" }}
              />
            </div>

            <div>
              <label className="form-label">
                Subtotal <br />
                (Tax calculated at checkout)
              </label>
              <input
                type="text"
                value={`$${((product.price || 0) * (product.quantity || 0)).toFixed(2)}`}
                disabled
                className="form-control"
                style={{ width: "140px" }}
              />
            </div>

            <button
              className="btn btn-danger"
              onClick={() => removeProductFromCart(product._id, product.size)}
            >
              Delete
            </button>

          </div>

        </div>
      ))}

      <div className="d-flex justify-content-between align-items-center mt-4 p-3 bg-white border rounded">
        <h3 className="mb-0">
          Cart Subtotal: <strong>${getCartTotal()}</strong>
        </h3>

        <button
          className="btn btn-success btn-lg"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>

    </div>
  )
}

export default Cart
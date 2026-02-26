import { useContext } from 'react'
import GlobalContext from '../State/globalContext'

function Cart() {
  const { cart, deleteProductFromCart, setProductQuantity } = useContext(GlobalContext)

  function getCartTotal() {
    let total = 0
    cart.forEach(item => {
      total += item.price * item.quantity
    })
    return total.toFixed(2)
  }

  return (
    <div className="bg-light p-4" style={{ minHeight: "100vh" }}>


      {cart.map(product => (
        <div
          key={product._id}
          className="bg-white border rounded mb-3 p-4 d-flex justify-content-between align-items-center"
        >

       
          <div className="d-flex align-items-center">
            <img
              src={product.image}
              width={100}
              alt={product.title}
              className="me-4"
            />

            <h5 className="mb-0">{product.title}</h5>
          </div>

          <div className="d-flex align-items-end gap-4">

            <div>
              <label className="form-label">Quantity</label>
              <input
                type="number"
                min="1"
                step="1"
                value={product.quantity}
                onChange={(e) =>
                  setProductQuantity(product._id, Number(e.target.value))
                }
                className="form-control"
                style={{ width: "90px" }}
              />
            </div>

            <div>
              <label className="form-label">Price Per Item</label>
              <input
                type="text"
                value={`$${Number(product.price).toFixed(2)}`}
                disabled
                className="form-control"
                style={{ width: "120px" }}
              />
            </div>

            <div>
              <label className="form-label">Total Price</label>
              <input
                type="text"
                value={`$${(product.price * product.quantity).toFixed(2)}`}
                disabled
                className="form-control"
                style={{ width: "140px" }}
              />
            </div>

            <button
              className="btn btn-danger"
              onClick={() => deleteProductFromCart(product._id)}
            >
              Delete
            </button>

          </div>

        </div>
      ))}

      <div className="d-flex justify-content-between align-items-center mt-4 p-3 bg-white border rounded">
        <h3 className="mb-0">
          Cart Total: <strong>${getCartTotal()}</strong>
        </h3>

        <button className="btn btn-success btn-lg">
          Checkout
        </button>
      </div>

    </div>
  )
}

export default Cart
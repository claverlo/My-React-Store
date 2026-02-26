import QuantityPicker from './QuantityPicker';
import { useState, useContext } from 'react';
import GlobalContext from '../State/globalContext';

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const globalAdd = useContext(GlobalContext).addProductToCart;

  function handleQuantityChange(qty) {
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  function onAdd() {
    let fixedProduct = { ...props.data };
    fixedProduct.quantity = quantity;
    globalAdd(fixedProduct);
  }

  return (
    <div className="products card h-100 w-100 border-0 shadow-sm">
      <div className="card-body d-flex flex-column">

        <img
          className="card-img-top img-fluid mb-3"
          style={{ height: "250px", objectFit: "contain" }}
          src={props.data.image}
          alt={props.data.title}
        />

        <h5 className="title text-center">
          {props.data.title}
        </h5>

        <div className="prices text-center">
          <label>Price: ${props.data.price.toFixed(2)}</label>
          <br />
          <label>Total: ${getTotal()}</label>
        </div>

        <div className="mt-auto text-center">
          <QuantityPicker onChange={handleQuantityChange} />
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-dark w-50 mt-3"
            onClick={onAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
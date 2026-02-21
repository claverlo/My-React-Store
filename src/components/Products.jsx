
import QuantityPicker from './QuantityPicker';
import { useState } from 'react';

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(qty) {
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

   return (
 <div
  className="products card h-100 w-100 shadow-sm border-0"
  style={{ backgroundColor: "#f3e8ff" }}
>
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

    </div>
  </div>
);
}

export default Product;

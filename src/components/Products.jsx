import QuantityPicker from './QuantityPicker';
import { useState, useContext } from 'react';
import GlobalContext from '../State/globalContext';

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const globalAdd = useContext(GlobalContext).addProductToCart;

  function handleQuantityChange(qty) {
    setQuantity(qty);
  }

  function handleSizeChange(e) {
    setSelectedSize(e.target.value);
  }

  function getSelectedSizeData() {
    if (!props.data.sizes || !selectedSize) return null;
    return props.data.sizes.find(
      s => s.label.toString() === selectedSize.toString()
    );
  }

  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  function onAdd() {
    const sizeData = getSelectedSizeData();

    if (props.data.sizes && !selectedSize) {
      alert("Please select a size");
      return;
    }

    if (sizeData && sizeData.stock === 0) {
      return;
    }

    let fixedProduct = { ...props.data };
    fixedProduct.quantity = quantity;
    fixedProduct.size = selectedSize;

    fixedProduct.image = Array.isArray(props.data.images)
      ? props.data.images[props.imgIndex ?? 0]
      : props.data.image;

    globalAdd(fixedProduct);
  }

  const selectedSizeData = getSelectedSizeData();

  const currentImage = props.data.images
    ? props.data.images[props.imgIndex ?? 0]
    : props.data.image;

  return (
    <div className="products card h-100 w-100 border-0 shadow-sm">
      <div className="card-body d-flex flex-column position-relative">

        <div style={{ position: "relative" }}>
          <img
            className="card-img-top img-fluid mb-2"
            style={{ height: "250px", objectFit: "contain", cursor: "pointer" }}
            src={currentImage}
            alt={props.data.title}
            onMouseEnter={props.onHover}
            onMouseMove={props.onHoverMove}
            onMouseLeave={props.onHoverLeave}
          />

          {props.data.images && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (props.onPrevImage) props.onPrevImage();
                }}
                style={{
                  position: "absolute",
                  left: "0",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  padding: "5px 10px"
                }}
              >
                ‹
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (props.onNextImage) props.onNextImage();
                }}
                style={{
                  position: "absolute",
                  right: "0",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  border: "none",
                  padding: "5px 10px"
                }}
              >
                ›
              </button>
            </>
          )}
        </div>

        <h5 className="title text-center">
          {props.data.title}
        </h5>

        <div className="prices text-center">
          <label>Price: ${props.data.price.toFixed(2)}</label>
          <br />
          <label>Total: ${getTotal()}</label>
        </div>

        {props.data.sizes && (
          <select className="form-select mt-2" onChange={handleSizeChange}>
            <option value="">Select Size</option>
            {props.data.sizes.map(size => (
              <option
                key={size.label}
                value={size.label}
                disabled={size.stock === 0}
              >
                {size.label} {size.stock === 0 ? "(Sold Out)" : ""}
              </option>
            ))}
          </select>
        )}

        {selectedSizeData && selectedSizeData.stock === 0 && (
          <p className="text-danger text-center fw-bold mt-2">
            SOLD OUT
          </p>
        )}

        <div className="mt-auto text-center">
          <QuantityPicker onChange={handleQuantityChange} />
        </div>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-dark w-50 mt-3"
            onClick={onAdd}
            disabled={selectedSizeData && selectedSizeData.stock === 0}
          >
            {selectedSizeData && selectedSizeData.stock === 0 ? "Sold Out" : "Add"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Product;
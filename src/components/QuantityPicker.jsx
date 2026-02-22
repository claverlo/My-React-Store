import { useState } from "react";

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);

    function handleDecrease() {
        let nextVal = quantity - 1;
        if (nextVal > 0) {
            setQuantity(nextVal);
            props.onChange(nextVal);
        }
    }

    function handleIncrease() {
        let nextVal = quantity + 1;
        setQuantity(nextVal);
        props.onChange(nextVal);
    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <button style={{ marginRight: "12px" }} onClick={handleDecrease}>-</button>

            <label style={{ fontWeight: "bold", margin: "0 6px" }}>
                {quantity}
            </label>

            <button style={{ marginLeft: "12px" }} onClick={handleIncrease}>+</button>
        </div>
    );

}

export default QuantityPicker;

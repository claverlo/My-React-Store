import { useState } from 'react';

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
        <div className='d-flex justify-content-center align-items-center gap-2'>
            <button className="btn-minus btn btn-outline-dark" onClick={handleDecrease} disabled={quantity === 1}>-</button>
            <label>{quantity}</label>
            <button className="btn-plus btn btn-outline-dark" onClick={handleIncrease} >+</button>
        </div>
    )
}

export default QuantityPicker;
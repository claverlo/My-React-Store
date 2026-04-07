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

    function handleChange(e) {
        let val = e.target.value;

        if (val === "") {
            setQuantity("");
            return;
        }

        let num = parseInt(val);

        if (!isNaN(num) && num > 0) {
            setQuantity(num);
            props.onChange(num);
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center gap-2'>

            <style>
                {`
                /* REMOVE NUMBER INPUT ARROWS */
                input[type=number]::-webkit-inner-spin-button,
                input[type=number]::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                input[type=number] {
                    -moz-appearance: textfield;
                }
                `}
            </style>

            <button
                className="btn-minus btn btn-outline-dark"
                onClick={handleDecrease}
                disabled={quantity <= 1}
            >
                -
            </button>

            <input
                type="number"
                value={quantity}
                onChange={handleChange}
                className="form-control text-center"
                style={{ width: "70px" }}
                min="1"
            />

            <button
                className="btn-plus btn btn-outline-dark"
                onClick={handleIncrease}
            >
                +
            </button>

        </div>
    );
}

export default QuantityPicker;
import { useState } from 'react'
import GlobalContext from './globalContext'

function GlobalProvider(props) {
    // const [state, setState] = useState(initialValue)
    const [user, setUser] = useState({ name: 'Leomar', id: 64 }) // Create a state variable for the user, with default username and ID
    const [cart, setCart] = useState([]) // Create a state variable for the cart, initially an empty array.

    function addProductToCart(product) {
        console.log("Add Product to Cart", product)
        setCart([...cart, product])
    }

    function clearCart() {
        setCart([])
    }

    function removeProductFromCart(productId) { // Remove a product from cart by ID
        console.log('Removing product with id', productId)

        const updatedCart = cart.filter(item => item._id !== productId); // filter out the product with the matching ID
        setCart(updatedCart) // Update the cart state with the filtered list
    }


    return (
        <GlobalContext.Provider value={{
            user: user,
            cart: cart,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;
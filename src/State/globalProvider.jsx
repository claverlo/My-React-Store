import { useState } from 'react'
import GlobalContext from './globalContext'

function GlobalProvider(props) {
    const [user, setUser] = useState({ name: 'Leomar', id: 64 })
    const [cart, setCart] = useState([])

    function addProductToCart(product) {
        const existingIndex = cart.findIndex(item => item._id === product._id)

        if (existingIndex !== -1) {
            const updatedCart = [...cart]
            updatedCart[existingIndex] = {
                ...updatedCart[existingIndex],
                quantity: updatedCart[existingIndex].quantity + product.quantity
            }
            setCart(updatedCart)
        } else {
            setCart([...cart, product])
        }
    }

    function clearCart() {
        setCart([])
    }

    function removeProductFromCart(productId) {
        const index = cart.findIndex(item => item._id === productId)
        if (index === -1) return

        const updatedCart = [...cart]
        const item = updatedCart[index]

        if (item.quantity > 1) {
            updatedCart[index] = { ...item, quantity: item.quantity - 1 }
        } else {
            updatedCart.splice(index, 1)
        }

        setCart(updatedCart)
    }

    function deleteProductFromCart(productId) {
        const updatedCart = cart.filter(item => item._id !== productId)
        setCart(updatedCart)
    }

    function setProductQuantity(productId, newQty) {
        if (!Number.isFinite(newQty)) return
        if (newQty < 1) {
            deleteProductFromCart(productId)
            return
        }

        const updatedCart = cart.map(item => {
            if (item._id === productId) {
                return { ...item, quantity: newQty }
            }
            return item
        })

        setCart(updatedCart)
    }

    return (
        <GlobalContext.Provider value={{
            user: user,
            cart: cart,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart,
            deleteProductFromCart: deleteProductFromCart,
            setProductQuantity: setProductQuantity,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;
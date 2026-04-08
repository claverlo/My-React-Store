import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props) {

  const [user, setUser] = useState({
    firstName: "Stephen",
    lastName: "Curry",
    id: 64,
    email: "Step30@icloud.com.com",
    address: {
      street: "123 Rich People road",
      city: "San Francisco",
      state: "CA",
      zip: "15326"
    }
  });

  const [cart, setCart] = useState([]);
  const [coupons, setCoupons] = useState([]);

  function addCoupon(coupon) {
    setCoupons(prev => [...prev, coupon]);
  }

  function getCoupon(code) {
    return coupons.find(c => c.code === code);
  }

  function addProductToCart(product) {
    if (product.stock === 0) {
      alert("This size is sold out");
      return;
    }

    let copy = [...cart];

    let found = false;

    for (let i = 0; i < copy.length; i++) {
      if (copy[i]._id === product._id && copy[i].size === product.size) {
        copy[i].quantity += product.quantity;
        found = true;
      }
    }

    if (!found) {
      copy.push(product);
    }

    setCart(copy);
  }

  function removeProductFromCart(productId, size) {
    let filtered = cart.filter(p => !(p._id === productId && p.size === size));
    setCart(filtered);
  }

  function setProductQuantity(productId, quantity, size) {
    let copy = [...cart];

    for (let i = 0; i < copy.length; i++) {
      if (copy[i]._id === productId && copy[i].size === size) {
        copy[i].quantity = quantity;
      }
    }

    setCart(copy);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <GlobalContext.Provider
      value={{
        user,
        cart,
        addProductToCart,
        removeProductFromCart,
        setProductQuantity,
        clearCart,
        coupons,
        addCoupon,
        getCoupon
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
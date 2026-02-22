import { createContext } from "react";

// GlobalContext defines context structure
const GlobalContext = createContext({
  user: {}, // Default user is an empty object, can store user info like name, email etc.
  cart: [], // Default cart is an empty array, will hold product objects later.

  // addProductToCart: function(){},
  addProductToCart: () => {}, // Placeholder function to add a product to the cart.
  clearCart: () => {}, // Placeholder function to remove all items from the cart.
  removeProductFromCart: () => {} // Placeholder function to remove a specific product from the cart.
})

// Export the context so it can be used in other components.
export default GlobalContext
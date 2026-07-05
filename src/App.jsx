import  PLANTS  from "./data.js";
import PlantList from "./Plants/PlantList.jsx";
import Cart from "./Cart/Cart.jsx";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
 
/** Add Functions **/  
  function addToCart(plant) {
    const itemInCart = cart.find((item) => item.id === plant.id);
  
    if (itemInCart) {//if card is already in cart, increase quantity by 1
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else { //if card is not in cart, add it with quantity of 1
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  }
  
  function updateCartQuantity(plantId, amount) {
    setCart(
      cart
        .map((item) =>
          item.id === plantId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  /** CLEAR CART */

  function clearCart() {
    setCart([]);
  }

  /** Render **/
  return (
<div className="container">
  <PlantList
    plants={PLANTS}
    addToCart={addToCart}
  />

 <Cart
  cart={cart}
  updateCartQuantity={updateCartQuantity}
  clearCart={clearCart}
/>
</div>
  );
}

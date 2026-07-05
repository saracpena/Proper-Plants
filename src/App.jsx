import { PLANTS } from "./data.js";
import PlantList from "./Plants/PlantList.jsx";
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

  /** Render **/
  return (
    <div className="app">
      <header>
        <h1>Plant Shop</h1>
        <p>Cart: {cart.length} items</p>
      </header>
      <div className="container">
        <PlantList plants={PLANTS} addToCart={addToCart} />
        {/* Here is the plant data, and here is the function to add a plant to the cart. */}  
      </div>
    </div>
  );
}

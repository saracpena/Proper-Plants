//! Remember: 
/*plants = plant-related UI
cart = cart-related UI
App = state/control center
data.js = hard-coded plant data */

export default function PlantCard({ cart, updateCartQuantity }) {

if (!cart) {
    return null; // Return null if cart is not provided
  }

  const { id, name, price, quantity } = cart;

  return (
    <li className="cart-item">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => updateCartQuantity(id, -1)}>-</button>
      <button onClick={() => updateCartQuantity(id, 1)}>+</button>
    </li>
  );

}
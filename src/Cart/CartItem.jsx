//! Remember: 
/*plants = plant-related UI
cart = cart-related UI
App = state/control center
data.js = hard-coded plant data */

export default function CartItem({ item, updateCartQuantity }) {
  return (
    <li className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
      </div>

      <div className="cart-actions">
        <button onClick={() => updateCartQuantity(item.id, -1)}>-</button>
        <button onClick={() => updateCartQuantity(item.id, 1)}>+</button>
      </div>
    </li>
  );
}
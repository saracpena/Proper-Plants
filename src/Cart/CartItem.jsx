//! Remember: 
/*plants = plant-related UI
cart = cart-related UI
App = state/control center
data.js = hard-coded plant data */

export default function CartItem({ item, updateCartQuantity }) {
  return (
    <li>
      <span>{item.name}</span>
      <span>Quantity: {item.quantity}</span>

      <button onClick={() => updateCartQuantity(item.id, 1)}>
        +
      </button>

      <button onClick={() => updateCartQuantity(item.id, -1)}>
        -
      </button>
    </li>
  );
}
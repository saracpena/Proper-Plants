//! Remember: 
/*plants = plant-related UI
cart = cart-related UI
App = state/control center
data.js = hard-coded plant data */

export default function Cart({ cart, updateCartQuantity }) {
  return (
    <section>
      <h2>Cart</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <button onClick={() => updateCartQuantity(item.id, 1)}>+</button>
            <button onClick={() => updateCartQuantity(item.id, -1)}>-</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
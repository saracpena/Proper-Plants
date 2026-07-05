//! Remember: 
/*plants = plant-related UI
cart = cart-related UI
App = state/control center
data.js = hard-coded plant data */
import CartItem from "./CartItem.jsx";

export default function Cart({ cart, updateCartQuantity }) {
  return (
    <section>
      <h2>Cart</h2>

      <ul className="cart-list">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateCartQuantity={updateCartQuantity}
          />
        ))}
      </ul>
    </section>
  );
}
//! Remember: 
/*plants = plant-related UI
cart = cart-related UI
App = state/control center
data.js = hard-coded plant data */
import CartItem from "./CartItem.jsx";

export default function Cart({ cart, updateCartQuantity, clearCart }) {
  return (
    <section className="cart">
      <div className="cart-header">
        <h2>Cart</h2>

        {cart.length > 0 && (
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        )}
      </div>

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
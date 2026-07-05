//! Remember: 
/*plants = plant-related UI
cart = cart-related UI
App = state/control center
data.js = hard-coded plant data */

export default function PlantCard({ plant, addToCart }) {
  return (
    <li className="plant-card">
      <p>{plant.image}</p>
      <h3>{plant.name}</h3>

      <button onClick={() => addToCart(plant)}>
        Add to Cart
      </button>
    </li>
  );
}
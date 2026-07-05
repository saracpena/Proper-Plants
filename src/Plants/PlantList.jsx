//! Remember: 
/*plants = plant-related UI
cart = cart-related UI
App = state/control center
data.js = hard-coded plant data */

import PlantCard from "./PlantCard.jsx";

export default function PlantList({ plants, addToCart }) {
  return (
    <section>
      <h2>Our Plants</h2>

      <ul className="plant-list">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </section>
  );
}
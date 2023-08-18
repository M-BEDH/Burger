import React from 'react';
import './Panier.css';
/**
 * Renders the shopping cart component.
 *
 * @param {Object} props - The props object containing cart items, removeItemFromCart function, and number of items in cart.
 * @param {Array} props.cartItems - An array of cart items.
 * @param {Function} props.removeItemFromCart - A function to remove an item from the cart.
 * @param {number} props.numberOfItemsInCart - The number of items in the cart.
 * @return {JSX.Element} The rendered shopping cart component.
 */
function Panier({ cartItems, removeItemFromCart, numberOfItemsInCart }) {
  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  return (
    <div className="Cart">
      <h2>Panier ({numberOfItemsInCart} articles)</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>Burger ID: {item.burgerId}</p>
            <p>Choix: {item.selectedAccompagnements.join(', ')}</p>
            <button onClick={() => handleRemoveItem(item.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Panier;

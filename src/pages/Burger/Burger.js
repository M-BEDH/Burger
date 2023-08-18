import React, { useState, useEffect } from 'react';
import burgers from '../../data/burger.json';
import './Burger.css';
import { useParams } from 'react-router-dom';
import Panier from '../../components/Panier/Panier';

/**
 * Toggles the given `acc` in the `selectedAccompagnements` array.
 *
 * @param {any} acc - The value to toggle in the `selectedAccompagnements` array.
 * @return {undefined} This function does not return anything.
 */
function Burger() {
  const params = useParams();
  const burger = burgers.find((burger) => burger.id === params.id);

  const [selectedAccompagnements, setSelectedAccompagnements] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  /**
   * Toggles the given `acc` in the `selectedAccompagnements` array.
   *
   * @param {any} acc - The value to toggle in the `selectedAccompagnements` array.
   * @return {undefined} This function does not return anything.
   */
  const toggleAccompagnement = (acc) => {
    if (selectedAccompagnements.includes(acc)) {
      setSelectedAccompagnements(
        selectedAccompagnements.filter((item) => item !== acc)
      );
    } else {
      setSelectedAccompagnements([...selectedAccompagnements, acc]);
    }
  };

  /**
   * Adds the selected item to the cart.
   *
   * @return {void}
   */
  function addToCart() {
    if (selectedAccompagnements.length === 0) {
      alert('Veuillez sélectionner au moins un accompagnement.');
      return;
    }

    const newCartItem = {
      id: `${burger.id}-${selectedAccompagnements.join('-')}`,
      burgerId: burger.id,
      selectedAccompagnements: selectedAccompagnements,
    };
    const updatedCartItems = [...cartItems, newCartItem];
    setCartItems(updatedCartItems);
    setSelectedAccompagnements([]);
    setCartVisible(true);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }

  /**
   * Removes an item from the cart.
   *
   * @param {number} itemId - The ID of the item to be removed.
   * @return {undefined} This function does not return any value.
   */
  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  /**
   * Toggles the visibility of the cart.
   *
   * @return {void}
   */
  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const numberOfItemsInCart = cartItems.length;
  const isAddToCartDisabled = selectedAccompagnements.length === 0;

  return (
    <div className="BurgerPage">
      <h1>{burger.title}</h1>
      <div className="imgBG">
        <img src={burger.pictures} alt={burger.title} />
      </div>
      <p className="price">{burger.price}</p>
      <p className="description">{burger.description}</p>
      <p className="accompagnement">
        {burger.accompagnement.map((accompagnement) => (
          <label key={`${burger.id}-`}>
            <input
              type="checkbox"
              checked={selectedAccompagnements.includes(accompagnement)}
              onChange={() => toggleAccompagnement(accompagnement)}
            />
            {accompagnement}
          </label>
        ))}
      </p>
      <button onClick={addToCart} disabled={isAddToCartDisabled}>
        Ajouter au panier
      </button>
      <button onClick={toggleCartVisibility}>
        {cartVisible
          ? 'Cacher le panier'
          : `Voir le panier (${numberOfItemsInCart})`}
      </button>

      {cartVisible && (
        <Panier
          cartItems={cartItems}
          removeItemFromCart={removeItemFromCart}
          numberOfItemsInCart={numberOfItemsInCart}
        />
      )}
    </div>
  );
}

export default Burger;

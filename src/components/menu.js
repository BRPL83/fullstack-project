import React, { useState } from 'react';
import './menu.css';
import foodData from '../components/foodData';
import Carrello from '../components/carrello';

function Counter({ onQuantityChange }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
      onQuantityChange(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onQuantityChange(count - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement} className="button-round button-minus">-</button>
      <span style={{ color: count === 0 ? 'grey' : 'green' }}>{count}</span>
      <button onClick={increment} className="button-round button-plus">+</button>
    </div>
  );
}

function Menu() {
  const [items] = useState(foodData);
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (item) => {
    if(quantity > 0) {
      setSelectedItems([...selectedItems, {...item, quantity}]);
      setQuantity(0);
    }
  };

  return (
    <div className="menu-container">
      <div className="container mt-5 pt-5 mb-5 pb-5">
        <div className="col text-center mx-auto pb-5">
          <h1 className="text-white">Menu</h1>
          <p className="text-white">
            Esplora il nostro menu con un semplice click! Dalle specialità classiche alle creazioni
            esotiche, c'è qualcosa per tutti i gusti. Ordina comodamente e preparati a gustare
            un'esperienza culinaria straordinaria!
          </p>
          <p className="text-white">Per qualsiasi accortezza alimentare il nostro staff è disponibile prima dell'ordine.</p>
        </div>
        <div className="row">
          {items.map((item) => (
            <div className="col-lg-4 col-md-6 mb-3" key={item.id}>
              <div className="card">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text"><strong>Prezzo:</strong> {item.price} €</p> {/* Aggiunta del prezzo */}
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="quantity">
                      <Counter onQuantityChange={setQuantity} />
                    </div>
                    <button onClick={() => addToCart(item)} className="btn btn-primary">
                      Aggiungi al carrello
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Carrello selectedItems={selectedItems} />
      </div>
    </div>
  );
}

export default Menu;







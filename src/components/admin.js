import React, { useState, useEffect } from 'react';
import './admin.css'; // Assicurati di avere il file admin.css con lo stile desiderato
//import Carrello from '../components/carrello.js';

function Admin() {
  const [orders, setOrders] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated === 'true') {
      setAuthenticated(true);
      setShowLoginForm(false);
    }
  }, []);

  //const handleOrderConfirmation = (item) => {
  //  setOrders([...orders, item]);
  //};

  const handleOrderCompletion = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1); // Rimuove l'ordine dalla lista
    setOrders(updatedOrders);
  };

  const handleOrderCancellation = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1); // Rimuove l'ordine dalla lista
    setOrders(updatedOrders);
  };

  const handleLogin = () => {
    // Simulazione di controllo delle credenziali, potresti aggiungere la logica qui
    // Se le credenziali sono corrette, nascondi il form, mostra l'alert e setta l'autenticazione a true
    setAuthenticated(true);
    localStorage.setItem('authenticated', 'true');
    setShowLoginForm(false);
    setTimeout(() => {
      setShowLoginForm(true);
    }, 3000);
    alert('Credenziali corrette! Benvenuto e buon lavoro Chef!');
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem('authenticated');
    setShowLoginForm(true);
  };

  return (
    <div className="admin-container">
      {authenticated && (
        <div>
          <div className="background-image"></div>
          <div className="orders-list">
            <h2>Ordini</h2>
            <ul>
              {orders.map((order, index) => (
                <li key={index}>
                  {order.name} - Quantità: {order.quantity}
                  <div>
                    <button onClick={() => handleOrderCompletion(index)}>Fatto</button>
                    <button onClick={() => handleOrderCancellation(index)}>Elimina</button>
                  </div>
                </li>
              ))}
            </ul>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}
      {!authenticated && showLoginForm && (
        <div className="login-form">
          <h2>Accedi</h2>
          <form onSubmit={handleLogin}>
          <div>
          <label className="email-label">E-mail:</label>
          <input type="email" required />
          </div>
          <div>
          <label htmlFor="password">Password:</label>
            <input type="password" id="password" required/>
          </div>
            <button type="submit">Accedi</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Admin;




// carrello.js
import React from 'react';
import './carrello.css';
import Visa from '../images/visa.jpg';
import Mastercard from '../images/mastercard.jpg';
import AmericanExpress from '../images/americanexpress.jpg';
import UnionPay from '../images/unionpay.jpg';
import DinersClubInternational from '../images/dinnersclub.jpg';
import PayPal from '../images/paypal.jpg';
import PagoBancomat from '../images/pagobancomat.jpg';

function Carrello({ selectedItems }) {
  const handlePayment = (event) => {
    event.preventDefault();
    alert('Transazione riuscita!');
  };

  // Calcola il prezzo totale degli articoli nel carrello solo se selectedItems è definito e non vuoto
  const totalPrice = selectedItems && selectedItems.length > 0 ? 
    selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0) : 0;

  return (
    <div className="carrello-container">
      <h1>Carrello</h1>
      <ul>
        {selectedItems && selectedItems.length > 0 ? (
          selectedItems.map((item, index) => (
            <li key={index}>
              {item.name} - Quantità: {item.quantity} - Prezzo: {item.price} €
            </li>
          ))
        ) : (
          <li>Nessun elemento nel carrello</li>
        )}
      </ul>
      <p><strong>Prezzo totale:</strong> {totalPrice.toFixed(2)} €</p> {/* Mostra il prezzo totale */}
      <div className="payment-form">
        <h2>Dettagli pagamento</h2>
        <form onSubmit={handlePayment}>
          <label htmlFor="cardNumber">Numero carta di credito:</label>
          <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required />
          <label htmlFor="expiry">Scadenza (MM/YY):</label>
          <input type="text" id="expiry" placeholder="MM/YY" required />
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" placeholder="123" required />
          <div className="card-logos">
            <img className="card-logo" src={Visa} alt="Visa" />
            <img className="card-logo" src={Mastercard} alt="Mastercard" />
            <img className="card-logo" src={AmericanExpress} alt="American Express" />
            <img className="card-logo" src={UnionPay} alt="Union Pay" />
            <img className="card-logo" src={DinersClubInternational} alt="Diners Club International" />
            <img className="card-logo" src={PayPal} alt="Pay Pal" />
            <img className="card-logo" src={PagoBancomat} alt="Pago Bancomat" />
          </div>
          <button type="submit">Conferma Pagamento</button>
        </form>
      </div>
    </div>
  );
}

export default Carrello;






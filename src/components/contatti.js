import React, { useState } from 'react';
import backgroundImage from '../images/contatti.jpg'; // Importa l'immagine

function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    cellulare: '',
    messaggio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui puoi inserire la logica per inviare i dati del form
    alert('Il tuo messaggio è stato inviato, ti risponderemo il prima possibile!');
    // Resetta il form dopo l'invio
    setFormData({
      nome: '',
      cognome: '',
      email: '',
      cellulare: '',
      messaggio: ''
    });
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
    <div className="container"style={{ marginTop: '80px' }}>
      <div className="row">
        <div className="col-md-6">
          <h1>Contatti</h1>
          <br/>
          <p>Indirizzo: P.zza San Babila, 123 - Milano - Italia</p>
          <p>Telefono: +39 02 456789</p>
          <p>Email: info@elysiumrestaurant.com</p>
          <p>Orari di apertura: Lunedì - Domenica 11:00 - 23:00</p>
          <p>Come raggiungerci:</p>
          <ul>
            <li>Dall'aeroporto: Prendere l'autostrada A1 in direzione del centro città.</li>
            <br/>
            <li>Dall'autostrada: Uscire all'uscita 123 e seguire le indicazioni per il centro città.</li>
            <br/>
            <li>Dalla stazione ferroviaria: Il bus numero 456 fino alla fermata "Piazza San Babila".</li>
          </ul>
          <p>Sedi nel mondo:</p>
          <ul>
            <li>Parigi - Francia</li>
            <br/>
            <li>Monaco - Principato di Monaco</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Per info compila il form qui sotto:</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input type="text" className="form-control" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="cognome" className="form-label">Cognome</label>
              <input type="text" className="form-control" id="cognome" name="cognome" value={formData.cognome} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="cellulare" className="form-label">Cellulare</label>
              <input type="tel" className="form-control" id="cellulare" name="cellulare" value={formData.cellulare} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="messaggio" className="form-label">Messaggio</label>
              <textarea className="form-control" id="messaggio" name="messaggio" value={formData.messaggio} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Inoltra</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contatti;



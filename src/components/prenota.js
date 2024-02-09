import React, { useState } from 'react';
import './prenota.css'; // File CSS per lo stile personalizzato

const Prenota = () => {
  const [dataPrenotazione, setDataPrenotazione] = useState('');
  const [oraPrenotazione, setOraPrenotazione] = useState('');
  const [prenotato, setPrenotato] = useState(false);

  const handlePrenota = () => {
    setPrenotato(true);
    // Resetta il calendario e l'ora
    setDataPrenotazione('');
    setOraPrenotazione('');
  };

  return (
    <div className="prenota-container">
      <div className="calendario">
        <h2>Seleziona la data e l'ora della prenotazione:</h2>
        <br/>
        <p>Scegli il tuo giorno ed ora in cui desideri pranzare/cenare da noi. Ricordati che siamo aperti dalle ore 11:00 alle ore 23:00. Per particolari accortezze puoi inviarci un messaggio tramite il form Contatti e ti risponderemo il prima possibile o se preferisci chiamaci allo +39 02 456789 A presto!</p>
        <input
          type="date"
          value={dataPrenotazione}
          onChange={(e) => setDataPrenotazione(e.target.value)}
        />
        <input
          type="time"
          value={oraPrenotazione}
          onChange={(e) => setOraPrenotazione(e.target.value)}
        />
      </div>
      <button className="prenota-button" onClick={handlePrenota}>Prenota</button>
      {prenotato && (
        <div className="alert">
          Hai prenotato! Ti abbiamo inviato un e-mail di conferma. A presto!
        </div>
      )}
    </div>
  );
};

export default Prenota;

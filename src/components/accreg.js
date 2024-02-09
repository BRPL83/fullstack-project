import React, { useState } from 'react';
import './accreg.css';

const AccReg = () => {
  const [registrationData, setRegistrationData] = useState({
    nome: '',
    cognome: '',
    email: '',
    nuovaPassword: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    tavolo: '',
  });

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Qui potresti gestire la logica per inviare i dati al server o salvarli localmente
    // In questo esempio, mostriamo solo un alert
    alert('Ti sei registrato con successo');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Qui potresti gestire la logica per accedere, verificando le credenziali
    // In questo esempio, mostriamo solo un alert
    alert('Benvenuto! Ora è possibile ordinare dal menu!');
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <div className="accreg-container"> 
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-white text-center">Registrazione</h2>
          <form onSubmit={handleRegistrationSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control"
                placeholder="Nome"
                name="nome"
                value={registrationData.nome}
                onChange={handleRegistrationChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Cognome"
                name="cognome"
                value={registrationData.cognome}
                onChange={handleRegistrationChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={registrationData.email}
                onChange={handleRegistrationChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Nuova Password"
                name="nuovaPassword"
                value={registrationData.nuovaPassword}
                onChange={handleRegistrationChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Registrati
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h2 className="text-white text-center">Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tavolo"
                name="tavolo"
                value={loginData.tavolo}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="d-flex justify-content-end"> 
            <button type="submit" className="btn btn-primary">
              Accedi
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AccReg;

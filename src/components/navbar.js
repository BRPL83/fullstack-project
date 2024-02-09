import React, { useState } from 'react';
import './navbar.css';
import logo from '../images/elysium.png';

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -4; // Regola questo valore se necessario per posizionare la sezione desiderata correttamente
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsNavCollapsed(true); // Chiudi il menu a scomparsa dopo aver fatto clic su un collegamento
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-start">
          <span className="navbar-brand me-auto">
            <img src={logo} alt="" className="d-inline-block align-text-top"/>
          </span>
        </div>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={handleNavCollapse} 
          aria-expanded={!isNavCollapsed ? true : false} // Aggiorna l'attributo aria-expanded in base allo stato del menu a scomparsa
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="true" onClick={() => scrollToSection('carousel-section')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection('noi-section')}>Noi</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection('menu-section')}>Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection('contatti-section')}>Contatti</a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="input-group-text me-2" onClick={() => scrollToSection('carrello-section')}>
                <i className="bi bi-cart2"></i>
              </li>
              <li className="nav-link me-2" onClick={() => scrollToSection('accreg-section')}>Acc/Reg</li> 
              <li className="nav-link me-2" onClick={() => scrollToSection('prenota-section')}>Prenota</li> 
              <li className="nav-link" onClick={() => scrollToSection('admin-section')}>Admin</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
















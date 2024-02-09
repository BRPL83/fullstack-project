import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import Noi from './components/noi';
import Menu from './components/menu';
import Contatti from './components/contatti';
import Carrello from './components/carrello';
import AccReg from './components/accreg';
import Prenota from './components/prenota';
import Admin from './components/admin';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <div id="carousel-section">
        <Carousel />
      </div>
      <div id="noi-section">
        <Noi />
      </div>
      <div id="menu-section">
        <Menu />
      </div>
      <div id="contatti-section"> {/* Assicurati che questo ID sia univoco */}
        <Contatti />
      </div>
      <div id="carrello-section"> {/* Assicurati che questo ID sia univoco */}
        <Carrello />
      </div>
      <div id="accreg-section"> {/* Assicurati che questo ID sia univoco */}
        <AccReg />
      </div>
      <div id="prenota-section"> {/* Assicurati che questo ID sia univoco */}
        <Prenota />
      </div>
      <div id="admin-section"> {/* Assicurati che questo ID sia univoco */}
        <Admin />
      </div>
      <Footer />
    </div>
  );
}

export default App;



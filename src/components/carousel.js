import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video1 from '../video/video1.mp4';
import Video2 from '../video/video2.mp4';
import Video3 from '../video/video3.mp4';
import Video4 from '../video/video4.mp4';
import './carousel.css';

function MyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
    }, 5000); // Intervallo di 5 secondi

    return () => clearInterval(interval);
  }, []); // Aggiunto array vuoto come dipendenza per eseguire l'effetto solo una volta all'avvio

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const videos = [Video1, Video2, Video3, Video4];

  const slideContent = [
    {
      title: 'Benvenuto!',
      text: "Siamo entusiasti di farti provare i nostri piatti prelibati e offrirti un'esperienza gastronomica indimenticabile.",
    },
    {
      title: 'Delizia i tuoi sensi...',
      text: "Dai un'occhiata al nostro menu ricco di sapori autentici insieme ai dei vini rinomati di livello internazionale.",
    },
    {
      title: 'Esplora i nostri piatti...',
      text: "Da piatti tradizionali a creazioni moderne, offriamo una vasta gamma di prelibatezze culinarie per soddisfare tutti i gusti.",
    },
    {
      title: 'Goditi il nostro servizio impeccabile...',
      text: "Sia che tu stia pianificando una cena romantica, un pranzo di lavoro o un evento speciale, siamo a tua completa disposizione.",
    },
  ];

  return (
    <div className="carousel-container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide custom-carousel"
        data-bs-ride="carousel"
        data-bs-interval="false" // Disabilita lo scorrimento automatico
      >
        <div className="carousel-inner">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            >
              <video className="d-block w-100" autoPlay muted loop>
                <source src={video} type="video/mp4"/>
              </video>
              <div className="carousel-caption d-flex justify-content-center align-items-center">
                <div className="text-center text-white"> {/* Aggiunta la classe text-white per il colore del testo */}
                  <h2>{slideContent[index].title}</h2>
                  <p>{slideContent[index].text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyCarousel;










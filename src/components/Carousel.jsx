import './Carousel.css';

/**
 * File: Carousel.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-07-11
 * Last modified: 2025-07-11
 * Description: Component that displays a responsive Bootstrap carousel for featured content.
 */

function Carousel() {
  return (
    <>
      {/* Banner carousel */}
      <section className="py-4 bg-light">
        <div className="container-fluid px-0">
          <div id="carouselSeduca" className="carousel slide" data-bs-ride="carousel">
            
            {/* Indicators */}
            <div className="carousel-indicators pb-4">
                <button
                type="button"
                data-bs-target="#carouselSeduca"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselSeduca"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselSeduca"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselSeduca"
                data-bs-slide-to="3"
                aria-label="Slide 4"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselSeduca"
                data-bs-slide-to="4"
                aria-label="Slide 5"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselSeduca"
                data-bs-slide-to="5"
                aria-label="Slide 6"
                ></button>
            </div>
  
            {/* Carousel-inner here */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/E-books.png" className="d-block w-100 carousel-img" alt="Banner 1" />
              </div>
              <div className="carousel-item">
                <img src="/campus_virtual1.png" className="d-block w-100 carousel-img" alt="Banner 2"/>
              </div>
              <div className="carousel-item">
                <img src="/inteligencia_artificial.png" className="d-block w-100 carousel-img" alt="Banner 3"/>
              </div>
              <div className="carousel-item">
                <img src="/licenciaturas_getion.png" className="d-block w-100 carousel-img" alt="Banner 4"/>
              </div>
              <div className="carousel-item">
                <img src="/aviso_privacidad.png" className="d-block w-100 carousel-img" alt="Banner 5"/>
              </div>
              <div className="carousel-item">
                <img src="/profexce_2020.jpg" className="d-block w-100 carousel-img" alt="Banner 6"/>
              </div>
            </div>

            {/* Navigation controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselSeduca" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselSeduca" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </section>
    </>
    );
}

export default Carousel;

import { Link } from 'react-router-dom';
import { NavBar, Footer } from '../layouts';
import '../home/styles/Home.css';
import './styles/ProductDetail.css';

export const ProductDetail = () => {


  return (

    <>

      <NavBar />

      <main className='product-main'>

        {/* FIRST SECTION */}

        <section className='product-first-section'>

          <div className='product-first-section-container'>

            <div className='product-first-section-item-one'>

              <img
                src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/producto/HombreBebiendo.png`}
                alt="Imagen del planeta Tierra"
                title='Imagen del planeta Tierra'
              />

            </div>

            <div className='product-first-section-item-two'>

              <h2> SmartBlue </h2>

              <p> El dispositivo IoT que te ofrece toda la información del agua que usas en casa. </p>

              <button> Reserva tu SmartBlue </button>

            </div>

          </div>

        </section>

        {/* SECOND SECTION */}

        <section className='product-second-section'>

          <div className='product-second-section-container'>

            <div className='product-second-section-top'>

              <div>

                <img
                  src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/home/gota.png`}
                  alt="Icono gota"
                  title='Icono gota'
                />

              </div>

              <p> <span> SmartBlue </span> ahorra agua </p>

            </div>

            <div className='product-second-section-bottom'>

              <div>

                <p> <span> 40% </span> </p>

                <p> del ahorro del agua que antes desperdiciabas </p>

              </div>

              <div>

                <p> <span> 50% </span> </p>

                <p> de los hogares no sabe cuánta agua gasta </p>

              </div>

              <div>

                <p> <span> 136 </span> </p>

                <p> consumo medio de los hogares (L/hab/días) </p>

              </div>

            </div>

          </div>

        </section>

        {/* THIRD SECTION */}

        <section className='results-product'>

          <h2> Ahorra en casa hasta un 40% </h2>

          <div className='results-container'>

            <div className='results-product-img'>

              <img
                src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/show-results/smart-blue.png`}
                alt="Foto de producto"
                title="Foto de producto"
              />

            </div>

            <div className='results-product-item'>

              <p> Los sensores ultrasónicos de alta precisión SmartBlue  miden el agua con una precisión de una gota. Pueden capturar datos en cada punto de la infraestructura de agua de un edificio, desde la fuente hasta el uso. </p>

              <article>

                <div>

                  <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/show-results/check.png`} alt="Icono" title="Icono" />

                </div>

                <p> Sensor ultrasónico </p>

              </article>

              <article>

                <div>

                  <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/show-results/check.png`} alt="Icono" title="Icono" />

                </div>

                <p> Detección precisa </p>

              </article>

              <article>

                <div>

                  <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/show-results/check.png`} alt="Icono" title="Icono" />

                </div>

                <p> Acceso a datos en la nube </p>

              </article>

              <button > Resérvalo ya </button>

            </div>

          </div>

        </section>

        {/* FOURTH SECTION */}

        <section className='home-fourth-section'>

          <div className='home-fourth-container'>

            <div className='home-fourth-item-one'>

              <img
                src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/home/Producto1XL.png`}
                alt="Espacio de trabajo"
                title='Espacio de trabajo'
              />

            </div>

            <div className='home-fourth-item-two'>

              <p> Con <span> SmartBlue </span> ahorrarás hasta un 40 % de agua en casa </p>

              <Link to='/product'> Resérvalo YA </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>

  );

};
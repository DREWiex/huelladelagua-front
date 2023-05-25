import { Link } from 'react-router-dom';
import { Footer, Header } from '../layouts';
import './styles/HomeAlt.css';

export const Home = () => {



  return (

    <>

      <Header />

      <main className='home-main'>

        {/* FIRST SECTION */}

        <section className='home-first-section'>

          <div className='home-first-section-img'>

            <img
              src="/public/assets/imgs/home/planeta.png"
              alt="Imagen del planeta Tierra"
              title='Imagen del planeta Tierra'
            />

          </div>

          <div className='home-first-section-container'>

            <p> <span> ¿Quieres formar parte del cambio? </span> </p>

            <p> Únete al #RetoBlue </p>

            <Link to='/quiz'> Calcula tu huella hídrica </Link>

          </div>

        </section>

        {/* SECOND SECTION */}

        <section className='home-second-section'>

          <div className='home-second-section-container'>

            <div className='home-second-section-top'>

              <div>

                <img
                  src="/public/assets/imgs/home/gota.png"
                  alt="Icono gota"
                  title='Icono gota'
                />

              </div>

              <p> Juntos somos más fuertes </p>

            </div>

            <div className='home-second-section-bottom'>

              <div>

                <p> <span> 97% </span> </p>

                <p> del agua del mundo es agua salada </p>

              </div>

              <div>

                <p> <span> 3% </span> </p>

                <p> es agua dulce </p>

              </div>

              <div>

                <p> <span> 650mm </span> </p>

                <p> de litros de agua se desperdicia </p>

              </div>

            </div>

          </div>

        </section>

        {/* THIRD SECTION */}

        <section className='home-third-section'>

          <div>

            <img src="" alt="Burbujas en el agua" title='Burbujas en el agua' />

          </div>

          <div>

            <h3> Únete al <span> Reto BLUE </span> </h3>

            <p> Cada gota cuenta, y juntos podemos hacerlo. El Reto Blue es una <span> iniciativa que promueve acciones sostenibles </span> para conservar el agua. ¿Sabías que pequeñísimos cambios en nuestra vida cotidiana tienen un <span> enorme impacto </span> ? </p>

            <p> Únete al <span> #retoblue </span> y juntos hagamos del agua nuestra prioridad. </p>

          </div>

        </section>

        {/* FOURTH SECTION */}

        <section className='home-fourth-section'>

          <div>

            <img src="" alt="Espacio de trabajo" title='Espacio de trabajo' />

          </div>

          <div>

            <p> <span> SmartBlue 24/7 </span> el servicio de vigilancia que te avisa de tus fugas de agua </p>

            <Link to='/product'> Quiero saber más </Link>

          </div>

        </section>

      </main>

      <Footer />

    </>

  );

};
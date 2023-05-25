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

          <div className='home-first-section-container'>

            <div className='home-first-section-item-one'>

              <img
                src="/public/assets/imgs/home/planeta.png"
                alt="Imagen del planeta Tierra"
                title='Imagen del planeta Tierra'
              />

            </div>

            <div className='home-first-section-item-two'>

              <p> <span> ¿Quieres formar parte del cambio? </span> </p>

              <p> Únete al #RetoBlue </p>

              <Link to='/quiz'> Calcula tu huella hídrica </Link>

            </div>

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

              <p> Cada gota cuenta </p>

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

          <div className='home-third-section-img'>

            <img src="/public/assets/imgs/home/AguaProfunda2.png" alt="Burbujas en el agua" title='Burbujas en el agua' />

          </div>

          <div className='home-third-section-container'>

            <h2> Blue </h2>

            <h3> Únete al <span> Reto BLUE </span> </h3>

            <p> Cada gota cuenta, y juntos podemos hacerlo. El Reto Blue es una <strong> iniciativa que promueve acciones sostenibles </strong> para conservar el agua. ¿Sabías que pequeñísimos cambios en nuestra vida cotidiana tienen un <span> enorme impacto </span> ? </p>

            <p> Únete al <strong> #retoblue </strong> y juntos hagamos del agua nuestra prioridad. </p>

          </div>

        </section>

        {/* FOURTH SECTION */}

        <section className='home-fourth-section'>

          <div className='home-fourth-container'>

            <div className='home-fourth-item-one'>

              <img
                src="/public/assets/imgs/home/Producto1XL.png"
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
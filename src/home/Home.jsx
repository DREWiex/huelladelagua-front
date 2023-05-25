import { NavBar } from '../layouts/NavBar';
import './styles/Home.css';

export const Home = () => {


  return (

    <>

      <NavBar />

      <main className='body'>


        <section className='primeraSection'>

          <div className='cajaTitulo'>

            <h1 className='tituloHome'>
              ¿Quieres formar <br />
              parte del cambio?

            </h1>
            <h1 className='arroba'>
              Únete al <br />
              #MovimientoBlue
            </h1>
            <button className='boton'>Calcula tu huella hidrica</button>
          </div>

          <div className='cajaFoto'>
            <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/icons/Planetas1.png`} alt="Icon" title='Icon' />
          </div>

          <div className='gif'>
            <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/icons/waterCircle.gif`} alt="Icon" title='Icon' />
          </div>

          <div className='blue'>
            <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/icons/BlueMask.png`} alt="Icon" title='Icon' />
          </div>
        </section>



        <section className='segundaSection'>

          <div className='contenedorPorcentajes'>

            <div className='gotaPorcentajes'>
              <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/icons/Vector.png`} alt="Icon" title='Icon' />
            </div>

            <div className='divTitulo2'>
              <h2 className='tituloPorcentajes' >Juntos somos más fuertes</h2>
            </div>



            <div className='porcentajes'>

              <div>
                <h2>97%</h2>

                <p>Del agua del mundo es <br />
                  agua salada </p>
              </div>

              <div>
                <h2>3%</h2>
                <p>Es agua dulce </p>
              </div>

              <div>
                <h2>650MM</h2>
                <p className='ml-3'> de litros de agua se desperdician </p>
              </div>

            </div>
          </div>

        </section>



        <section className='terceraSection'>

          <div>

            <h2 className='azul font100 colorAzul' >Blue</h2>

            <div>
              <img className='agua' src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/icons/agua.png`} alt="Icon" title='Icon' />
            </div>

            <div>
              <p className='titulo3 '>Únete al  <span className='colorAzul2'>Reto BLUE</span> </p>
            </div>
            <br />
            <div>
              <p className='parrafo3 '>Cada gota cuenta, y juntos podemos hacerlo. El movimiento Blue es una  iniciativa que promueve acciones sostenibles para conservar el agua. ¿Sabías que pequeñísimos cambios en nuestra vida cotidiana tienen un enorme  impacto en la conservación del agua?

                Únete al #MovimientoBlue 💦 Hagamos juntos, del agua, nuestra prioridad.</p>
            </div>

          </div>

          <div className='imagenLista'>
            <img className='deepWater' src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/icons/bajoElMar.png`} alt="Icon" title='Icon' />
          </div>


        </section>



        <section className='cuartaSection'>

          <div className='nakamura'>
            <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/icons/nakamura.png`} alt="Icon" title='Icon' />
          </div>

          <div className='ahorro'>
            <div className='flexColumn'>
              <div>
                <p className='textoAhorro'> <span className='softblue'>SmartBlue 24/7</span>  el servicio de vigilancia que te avisará de cualquier fuga</p>
              </div >
              <button className='boton'>Resérvalo YA </button>
            </div>
          </div>

          <div className='tubo'>
            <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/icons/tubi.png`} alt="Icon" title='Icon' />
          </div>

        </section>




      </main>
      <footer className='footer'>

        <div className='mainfooter'>
          <div className='textoFooter centrado'>
            <h2>Se parte del cambio formando <br /> parte del <span className='softblue'>Movimiento BLUE</span> </h2>
          </div>

          <div className='flexCenter'>
            <img className='españa centrado' src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/icons/españa.png`} alt="Icon" title='Icon' />
          </div>

        </div>

        <hr className='linea ' />

        <div className='gridFooter '>

          <div className='logotipo flexColumn'>

            <div className='tituloFooter'>
              <div className='gota'>
                <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/icons/Vector.png`} alt="Icon" title='Icon' />
              </div>
              <div>
                <h2>Blue</h2>
              </div>
            </div>
            <div>
              <p className='parrafo'>La tecnologia que enseña a ahorrar agua</p>
            </div>

            <div className='contenedorIconos'>
              <div className='iconos flexRow'>
                <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/icons/instagram.png`} alt="Icon" title='Icon' />
                <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/icons/facebook.png`} alt="Icon" title='Icon' />
                <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/icons/twitter.png`} alt="Icon" title='Icon' />
                <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/icons/in.png`} alt="Icon" title='Icon' />
              </div>
            </div>
          </div>

          <div className='sitemap'>

            <p className='sitemapTitulo flexCenter'>Sitemap</p>
            <p className='sitmapParrafo'>Sobre nosotros</p>
            <p className='sitmapParrafo'>Agenda</p>
            <p className='sitmapParrafo'>Parnets</p>
            <p className='sitmapParrafo'>Testimonios</p>

          </div>

          <div className='sitemap'>

            <p className='sitemapTitulo flexCenter'>Colabora</p>
            <p className='sitmapParrafo'>Voluntarios</p>
            <p className='sitmapParrafo'>Oportunidades</p>
            <p className='sitmapParrafo'>Patrocinios</p>

          </div>

          <div className='sitemap'>

            <p className='sitemapTitulo flexCenter'>Contacta</p>
            <p className='sitmapParrafo'>hola@goblue.com</p>
            <p className='sitmapParrafo'>Paseo de Recoletos 15</p>
            <p className='sitmapParrafo'>+34 987 52 56 41</p>

          </div>

        </div>

        <hr className='linea2' />

        <div className='derechos'>

          <div>
            <p>2023 SmartBlue Technology Inc.Todos los derechos Reservados</p>
          </div>

          <div>
            <p className='segundoParrafo'>Made with love by  a great team</p>
          </div>

        </div>

      </footer>

    </>

  );

};
import { NavBar } from '../layouts/NavBar';
import '../home/styles/Home.css';

export const ProductDetail = () => {


  return (

    <>

      <NavBar />

      <main className='body'>

        <div className='primeraSectionProducto'>

          <div className='imagenTipo'>
            <img src="/assets/imgs/icons/tio.png" alt="" />
          </div>
          <div className='contenedorTitulo' >
            <h1>SmartBlue</h1>
            <p>El dispositivo IOT que te ofrece toda la información del agua que usas en casa. <br />
              Nuestros datos nos muestran que en el primer mes de uso de SmartBlue se alcanza un ahorro de  hasta el 40% de <br /> agua derrochada
            </p>
            <button className='boton' >Reserva tu SmartBlue</button>
          </div>

        </div>


        <section className='segundaSection'>

          <div className='contenedorPorcentajes2'>

            <div className='gotaPorcentajes'>
              <img src="/assets/imgs/icons/Vector.png" alt="" />
            </div>

            <div className='divTitulo2'>
              <h2 className='tituloPorcentajes'>SmartBlue y empieza a ahorrar</h2>
            </div>



            <div className='porcentajes'>

              <div>
                <h2>40%</h2>

                <p> de ahorro del <br /> agua que antes <br />
                  desperdiciabas </p>
              </div>

              <div>
                <h2>50%</h2>
                <p>de los hogares no sabe cuántos agua gasta</p>
              </div>

              <div>
                <h2>136</h2>
                <p className='ml-3'> consumo medio de los hogares (litros/hab./días) </p>
              </div>

            </div>
          </div>

        </section>



        <section className='terceraSection'>
          <div className='db'>
            <img src="/assets/imgs/icons/bloque3.png" alt="" />
          </div>
          <div className='titulo3 azul db-reverse'>

            <h2> Ahorra con SmartBlue</h2>

            <div className='sensor' >
              <img src="/assets/imgs/icons/parrafoSensores.png" alt="" />
            </div>

            <div className='ticks '>

              <div className='mb-10 flexRow '>
                <div className='circuloTick'>
                  <img src="/assets/imgs/icons/verificado.png" alt="" />
                </div>
                <p>SENSOR ULTRASÓNICO</p>
              </div>

              <div className='mb-10 flexRow'>
                <div className='circuloTick'>
                  <img src="/assets/imgs/icons/verificado.png" alt="" />
                </div>
                <p>DETECCIÓN PRECISA</p>
              </div>

              <div className='mb-10 flexRow'>
                <div className='circuloTick'>
                  <img src="/assets/imgs/icons/verificado.png" alt="" />
                </div>
                <p>ACCESO A DATOS EN LA NUBE</p>
              </div>
            </div>
            <div className='divBoton'>
              <button className='boton'>Reserva tu producto</button>
            </div>
          </div>

          <div className='grid-4 db-reverse'>

            <div className='gridItem1 azul'>
              <img src="/assets/imgs/icons/Producto.png" alt="" />
            </div>

            <div className='cuadrado'></div>
          </div>


        </section>



        <section className='cuartaSection'>

          <div className='nakamura'>
            <img src="/assets/imgs/icons/mobil.png" alt="" />
          </div>

          <div className='ahorro'>
            <div className='flexColumn'>

              <div>
                <p className='textoAhorro'> Con <span className='softlue'>SmartBlue</span>   ahorrarás hasta un 40% de agua en casa</p>
              </div >
              <button className='boton'>Resérvalo YA </button>
            </div>
          </div>

          <div className='tubo'>
            <img src="/assets/imgs/icons/rectangle76.png" alt="" />
          </div>

        </section>



      </main>
      <footer className='footer'>

        <div className='mainfooter'>
          <div className='textoFooter centrado'>
            <h2>Se parte del cambio formando <br /> parte del <span className='softblue'>Movimiento BLUE</span> </h2>
          </div>

          <div className='flexCenter'>
            <img className='españa centrado  ' src="/assets/imgs/icons/españa.png" alt="" />
          </div>

        </div>

        <hr className='linea ' />

        <div className='gridFooter '>

          <div className='logotipo flexColumn'>

            <div className='tituloFooter'>
              <div className='gota'>
                <img src="/assets/imgs/icons/Vector.png" alt="" />
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
                <img src="/assets/imgs/icons/instagram.png" alt="" />
                <img src="/assets/imgs/icons/facebook.png" alt="" />
                <img src="/assets/imgs/icons/twitter.png" alt="" />
                <img src="/assets/imgs/icons/in.png" alt="" />
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
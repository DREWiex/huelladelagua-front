import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedBack, sendMyData } from '../../store/thunks/quizThunk';
import { useReserve } from '../hooks/useReserves';
import { useForm } from '../../hooks/useForm';
import { productPromotion } from '../../store/thunks/productThunk';
import { Challenges } from './Challenges';
import '../styles/components/ShowResults.css';
import { sumValues } from '../helpers/sumValues';


export const ShowResults = () => {

  const {
    answers,
    backRequestState,
    dataRequestState,
    dataRequest, 
    liters,
    euros 
  } = useSelector(state => state.quiz);

  const { cluster1 } = useSelector(state => state.challenges);

  const { emailRequestState } = useSelector(state => state.product);

  const {
    handleButton,
    handlePoliticyCheckBoxChange,
    handleSuscriptionCheckBoxChange,
    polIsChecked,
    susIsChecked,
    addChallenge
  } = useReserve();

  let totalLiters,totalEuros;

  const [politicyAgree, setPoliticyAgree] = useState(false)
  const [emailOff, setEmailOff] = useState(false)
  const { handleChange, form } = useForm();
  const dispatch = useDispatch();


  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (!form) {
      setEmailOff(true)
      return
    }

    if (polIsChecked == false) {
      setPoliticyAgree(true)
      return
    }

    const body = {
      suscription: polIsChecked,
      email: form.email
    }
    

    setPoliticyAgree(false);
    setEmailOff(false);

    dispatch(productPromotion(body))
  }

  useEffect(() => {
    
    totalLiters = sumValues(liters)
    console.log(totalLiters)
    totalEuros = sumValues(euros)
    console.log(totalEuros)

    dispatch(sendMyData(answers))
    dispatch(getFeedBack(answers))
  }, [])

  return (
    <>

      <section className='firstSectionShow'>

        <div className='background-image' style={{ backgroundImage: `url(${import.meta.env.VITE_URL_BASE}/assets/images/fondo.png)` }}></div>

        <h1 className='title'>
          Descubre tu huella hídrica
        </h1>

        <div className='firstDropImage'>

          <img
            src={`${import.meta.env.VITE_URL_BASE}/assets/images/FACEHOME.png`}
            alt="casita con carita"
            title="casa"
            className='facehome'
          />

          <h1 className='dropTitle'>
            Huella doméstica
          </h1>


        <span className='dropNumbers'>
          {totalLiters} 
        </span>

          <span className='subDropTitle'>
            Litros al dia
          </span>

          <span className='average'>
            Media en España 1.350 litros al día
          </span>

          <img
            src={`${import.meta.env.VITE_URL_BASE}/assets/images/gotagrande.png`}
            alt="gotita de agua"
            title="gota"
          />
        </div>

      <div className='secondDropImage'>

      <h1 className='dropTitle'>
          Gasto anual
      </h1>

      <span className='dropNumbers'>
          {totalEuros}
      </span>

      <span className='subDropTitle'>
          Euros al año
        </span>

        <span className='average'>
          Media en España 235 euros al año
        </span>

      <img
          src={`${import.meta.env.VITE_URL_BASE}/public/assets/images/mundito.png`}
          alt="símbolo de mundo"
          title="casa"
          className='mundito'
        />
        <img
          src={`${import.meta.env.VITE_URL_BASE}/public/assets/images/gotagrande.png`}
          alt="gotita de agua"
          title="gota"
        />
      </div>

        <div className='percentages'>
          <img
            src={`${import.meta.env.VITE_URL_BASE}/assets/images/percentages.png`}
            alt="porcentajes de huella hídrica"
            title="Porcentajes"
          />
        </div>
        
      </section>

      {
        dataRequest != '' &&
        <Challenges addChallenge={addChallenge} cluster={dataRequest} />
      }


      {/* Mensajes de estado de petición */}

        {
          backRequestState == 'failed' &&
          <>
            <p>
              Error al enviar el questionario
            </p>
            <button onClick={() => dispatch(sendMyData(answers))}>
              Volver a enviar
            </button>
          </>
        }

        {/* petición de predicciones: */}
        {
          dataRequestState == 'failed' &&
          <>
          <p>
            Error al enviar el questionario
          </p>
          <button onClick={() => dispatch(sendMyData(answers))}>
            Volver a enviar
          </button>
        </>
      }

      {/* petición de predicciones: */}
      {
        dataRequestState == 'failed' &&
        <p>
          Fallo al obtener las predicciones
        </p>
      }




      {/* Funcionalidad reservar */}
      <section>

        {/* <button onClick={handleButton}> //botón para reservar producto
          reservar
        </button> */}

        <div id='reserve' className='hiddenReserve'>

          <form onSubmit={handleSubmit}>
            <input type='email' name='email' onChange={handleChange} />

            <input type='checkbox' id='politicy' name='politicy' onChange={handlePoliticyCheckBoxChange} />
            <label for='politicy'>Políticas</label>

            <input type='checkbox' name='suscription' onChange={handleSuscriptionCheckBoxChange} />
            <label for='suscription'>Suscripción</label>

            <input type='submit' value='enviar' />
          </form>

        </div>
      </section>


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

            <button onClick={handleButton}> Resérvalo ya </button>


          </div>

        </div>

      </section>
      
      {
        emailRequestState != 'successfull' ?

        <section id='reserveForm'>

        <div id='reserve' className='hiddenReserve'>

          <form onSubmit={handleSubmit}>
            <input id='emailInput' type='email' name='email' onChange={handleChange} placeholder='E-mail' />

          <div className='checkBoxes'>
            <input type='checkbox' id='politicy' name='politicy' onChange={handlePoliticyCheckBoxChange} />
            <label for='politicy'>Políticas</label>

            <input type='checkbox' name='suscription' onChange={handleSuscriptionCheckBoxChange} />
            <label for='suscription'>Suscripción</label>
          </div>
            <input className='submitMail' type='submit' value='Reservar' />
            
          </form>
          
          
        </div>
      </section>

        :
        <section>
          <p>
            Muchas gracias! En pocas semanas podrás ordenar tu SmartBlue con un 30% de descuento!
          </p>
        </section>

      }
        
      {
        emailRequestState == 'failed' &&
        <section>
          <p>
            Ops! Parece que ya tenemos guardado tu E-mail! 
          </p>
        </section>
      }

      {
        emailRequestState == 'error' &&
        <section>
          <p>
            Ops! Parece que ha habido un error de conexión
          </p>
          <button onClick={handleSubmit}>
          Volver a intentar
          </button>
        </section>
      }

      {
        emailOff == true &&
          <p>
            Tienes que rellenar el campo e-mail
          </p>
      }

      {
        politicyAgree == true &&
          <p>
            Debes aceptar las políticas de privacidad.
          </p>
      }
      
    </>
  )
}
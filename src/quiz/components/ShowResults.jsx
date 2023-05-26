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



  const [politicyAgree, setPoliticyAgree] = useState(false)
  const [emailOff, setEmailOff] = useState(false)
  const { handleChange, form } = useForm();
  const [totalLiters, setTotalLiters] = useState(0)
  const [totalEuros, setTotalEuros] = useState(0)
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

    let totalOfLiters = Math.floor(sumValues(liters)).toLocaleString('de-DE');
    let totalOfEuros = Math.floor(sumValues(euros)).toLocaleString('de-DE') * 365;
    setTotalEuros(totalOfEuros);
    setTotalLiters(totalOfLiters)

    dispatch(sendMyData(answers))
    dispatch(getFeedBack(answers))
  }, [])

  return (
    <>

      <section className='firstSectionShow'>

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

      <h1 className='dropTitle2'>
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
          src={`${import.meta.env.VITE_URL_BASE}/assets/images/mundito.png`}
          alt="símbolo de mundo"
          title="casa"
          className='mundito'
        />
        <img
          src={`${import.meta.env.VITE_URL_BASE}/assets/images/gotagrande.png`}
          alt="gotita de agua"
          title="gota"
        />
      </div>

        
        
      </section>

      {
        dataRequest != '' &&
        <Challenges addChallenge={addChallenge} cluster={dataRequest} />
      }


      {/* Funcionalidad reservar */}
     


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

      <section className='emailForm hidden'>

          <p onClick={handleButton} className='quit'>
          x
          </p>

          <div className='productOnEmail'>

            <img
              src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/show-results/smart-blue.png`}
              alt="Foto de producto"
              title="Foto de producto"
            />

          </div>

          <form onSubmit={handleSubmit}>
            <input id='emailInput' className='inputMail' type='email' name='email' onChange={handleChange} placeholder='E-mail' />

          <div className='checkBoxes'>
            <div className='checkBoxItem'>
              <input type='checkbox' id='politicy' name='politicy' onChange={handlePoliticyCheckBoxChange} />
              <label for='politicy'>He leído y acepto la Política de privacidad y las Condiciones de uso.</label>
            </div>

            <div className='checkBoxItem'>
              <input type='checkbox' name='suscription' onChange={handleSuscriptionCheckBoxChange} />
              <label for='suscription'>Suscríbete a las noticias Blue y sus descuentos.</label>
            </div>
          </div>
            <input className='submitMail' type='submit' value='Reservar' />
            
          </form>

          {
        emailRequestState == 'failed' &&
        
          <p className='pCenter'>
            Ops! Parece que ya tenemos guardado tu E-mail! 
          </p>
        
      }

      {
        emailRequestState == 'error' &&
          <>
          <p className='pCenter'>
            Ops! Parece que ha habido un error de conexión
          </p>
          <button onClick={handleSubmit}>
          Volver a intentar
          </button>
          </>
       
      }

      {
        emailRequestState == 'successfull' &&
        <p className='success'>
          Producto reservado con éxito! Enhorabuena!
        </p>
      }

      {
        emailOff == true &&
          <p className='pCenter'>
            Tienes que rellenar el campo e-mail
          </p>
      }

      {
        politicyAgree == true &&
          <p className='pCenter'>
            Debes aceptar las políticas de privacidad.
          </p>
      }
          
      </section>
      
     
        
      
      
    </>
  )
}

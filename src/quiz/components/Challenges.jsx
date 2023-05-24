import { clustersChallenges } from '../data/clustersChallenges';
import '../styles/components/Challenges.css';

export const Challenges = ({ addChallenge, cluster = 'saver' }) => { //! el componente recibe la respuesta del endpoint ('saver' o 'spender') por props
    console.log(cluster)
    const arrayChallenges = clustersChallenges();
    //! si 'cluster' (props) es igual a 'saver', devuelve el objeto que contiene la propiedad 'cluster: saver'
    //! si 'cluster' (props) es igual a 'spender', devuelve el objeto que contiene la propiedad 'cluster: spender'
    const { title, description, challenges } = arrayChallenges.find(item => item.cluster == cluster); //! cambiar por props


    return (

        <>

            <section className='challenges-container'>

                <h2 className='challenges-container-title'> {title} </h2>

                <p className='challenges-container-description'> {description} </p>

                <div>

                    {
                        challenges.map(item => (

                            <article
                                key={item.id}
                                className='challenges-item'
                            >

                                <div>

                                    <img
                                        src={item.icon} //! añadir variable de entorno una vez se haya subido a Netlify, ya que esa carpeta no existe en el despliegue todavía
                                        alt="Icon"
                                        title="Icon"
                                    />

                                </div>

                                <p> {item.text} </p>

                                <button
                                    id={item.id}
                                    onClick={addChallenge}
                                    className={!item.state ? 'challenge-pending' : 'challenge-accepted'}
                                >
                                    Unirme
                                </button>

                            </article>

                        ))
                    }

                </div>

            </section>

        </>

    );

};
import { clustersChallenges } from '../data/clustersChallenges';
import '../styles/components/Challenges.css';

export const Challenges = ({ addChallenge, cluster }) => {

    const arrayChallenges = clustersChallenges();

    //! si 'cluster' (props) es igual a 'saver', devuelve el objeto que contiene la propiedad 'cluster: saver'
    //! si 'cluster' (props) es igual a 'spender', devuelve el objeto que contiene la propiedad 'cluster: spender'
    const { title, description, challenges } = arrayChallenges.find(item => item.cluster == cluster); //! cambiar por props


    return (

        <>
          <img
            src={`${import.meta.env.VITE_URL_BASE}/assets/images/percentages.png`}
            alt="porcentajes de huella hídrica"
            title="Porcentajes"
          />
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
                                        src={item.icon}
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

export const IntroQuiz = ({ nextPage }) => {


    return (

        <>

            <section className="quiz-intro">

                <div className="gota">
                    <img
                        src={`${import.meta.env.VITE_URL_BASE}/assets/intro/GotaAzul.png`}
                        alt="Dibujo de una gota de agua"
                        title="Dibujo de una gota de agua"
                    />
                </div>

                <div>

                    <h1> Haz que cada gota cuente. </h1>

                    <p> Conoce cuánta agua gastas y aprende a ser más sostenible. </p>

                </div>

                <button onClick={nextPage}> Comenzar </button>

            </section>

        </>

    );

};
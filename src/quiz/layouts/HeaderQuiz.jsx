
export const HeaderQuiz = () => {


    return (

        <header className='header-quiz'>

            <div>

                <img
                    //src="http://coruscating-fox-08c8c7.netlify.app/assets/logo/logo2.png"
                    src={`${import.meta.env.VITE_URL_BASE}/assets/logo/logo2.png`}
                    // src="/src/assets/logo/logo2.png"
                    alt="Logo Blue"
                    title='Logo Blue'
                />

            </div>

        </header>

    );

};
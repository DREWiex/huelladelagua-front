import { Link } from 'react-router-dom';

export const HeaderQuiz = () => {


    return (

        <header className='header-quiz'>

            <div>

                <Link to='/'>

                    <img
                        src={`${import.meta.env.VITE_URL_BASE}/assets/logo/logo2.png`}
                        alt="Logo Blue"
                        title='Logo Blue'
                    />

                </Link>

            </div>

        </header>

    );

};
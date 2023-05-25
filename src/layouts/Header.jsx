import { Link } from 'react-router-dom';
import './styles/Header.css';

export const Header = () => {


    return (

        <header className='home-header'>

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
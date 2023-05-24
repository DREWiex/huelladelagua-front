import './styles/Footer.css';

export const Footer = () => {


    return (

        <footer className='footer-container'>

            <section className='footer-first-section'>

                <p> <span> Reto BLUE </span>, sé el cambio que quieres ver en el mundo </p>

                <div>
                    <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/footer/spain.png`} alt="Logos" title='Logos' />
                </div>

            </section>

            <nav>

                <div className='footer-logo'>

                    <div>

                        <img src={`${import.meta.env.VITE_URL_BASE}/assets/logo/logo2.png`} alt="Logo" title='Logo' />

                    </div>

                    <p> La tecnología que te enseña a ahorrar agua </p>

                </div>

                <div className='footer-rrss'>

                    <div>

                        <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/footer/instagram.svg`} alt="Icon" title='Icon' />

                    </div>

                    <div>

                        <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/footer/facebook.svg`} alt="Icon" title='Icon' />

                    </div>

                    <div>

                        <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/footer/twitter.svg`} alt="Icon" title='Icon' />

                    </div>

                    <div>

                        <img src={`${import.meta.env.VITE_URL_BASE}/assets/imgs/footer/linkedin.svg`} alt="Icon" title='Icon' />

                    </div>

                </div>

            </nav>

            <section className='footer-second-section'>

                <p> 2023 SmartBlue Technology Inc. Todos los derechos reservados </p>

                <p> Made with <span> love </span> by a Great Team </p>

            </section>

        </footer>

    );

};
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import { NavBar1200 } from './NavBar1200';
import './styles/NavBar.css';

export const NavBar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <nav className='contenedorMenu'>

        <div className='titulo'>
          <Link to='/'>
            <img src={`${import.meta.env.VITE_URL_BASE}/assets/logo/logo2.png`} alt="Logo" title='Logo' />
          </Link>
        </div>

        <div className='menu1200'>
          < NavBar1200 />
        </div>


        <div className="navbar">
          <div className="navbar__logo">
            <div className={`navbar__hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="navbar__menu">
              <ul className="navbar__list">
                <li className="navbar__item"> <Link to="/"> Inicio</Link> </li>
                <li className="navbar__item"> <Link to="/product">Producto </Link> </li>
                <li className="navbar__item"> <Link to="/quiz"> Calcula tu huella</Link> </li>
              </ul>
            </div>
          )}
        </div>

      </nav>

    </>
  )
}
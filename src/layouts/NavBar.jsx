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
      <div className='contenedorMenu'>

        <div className='titulo'>
          <div className='gota'>
            <img src="/assets/imgs/icons/Vector.png" alt="" />
          </div>
          <div>
            <h2>Blue</h2>
          </div>
        </div>

        <div className='menu1200'>
          < NavBar1200 />
        </div>


        <nav className="navbar">
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
        </nav>

      </div>

    </>
  )
}
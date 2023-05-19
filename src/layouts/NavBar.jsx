import { NavLink } from 'react-router-dom';
import './styles/NavBar.css';

export const NavBar = () => {
  return (
    <nav>
        <NavLink to='/' className='navLink'
          
          >Home 
        </NavLink>

        <NavLink to='/product' className='navLink'
          
          >Nuestro producto 
        </NavLink>
        
        <NavLink to='/quiz' className='navLink'
          
          >Questionario
        </NavLink>
    </nav>
  )
}

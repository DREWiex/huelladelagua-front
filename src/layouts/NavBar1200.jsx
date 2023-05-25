import { NavLink } from 'react-router-dom'
import './styles/NavBar.css';

export const  NavBar1200= () => {
  return (
    <>
   
   
        <nav className='menu'>

          <div >
            <NavLink to='/' className='navLink'
              
              >Como Funciona 
            </NavLink>
          </div>

          <div >
            <NavLink to='/product' className='navLink'
              
              >Producto 
            </NavLink>
          </div>

          <div >  
            <NavLink to='/quiz' className='navLink'
              
              >Calcula tu huella
            </NavLink>
          </div>
        </nav> 
   
    </>
  )
}
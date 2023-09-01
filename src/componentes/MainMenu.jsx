import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = () => {
  return (
    <div>

             <nav className='main__menu'>
              <div className="main__contenido contenedor">
                
              <Link className="header__li" to='../home/diseños'>Limpieza de Obras </Link>
              <Link className="header__li" to='../home/espacios'>Transformando espacios </Link>
              <Link className="header__li" to='../home/limpiezaobra'>Planificacion y proyectos </Link>
              <Link className="header__li" to='../home/proyectos'>Diseños personalizados </Link>


                {/* <li className="header__li">Limpieza de obras</li>
                <li className="header__li">Transformando espacios</li>
                <li className="header__li">Planificacion y proyectos</li>
                <li className="header__li">Diseños personalizados</li> */}
              </div>

            </nav>
    </div>
  )
}

export default MainMenu
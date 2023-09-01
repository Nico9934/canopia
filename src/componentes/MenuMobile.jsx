import React from 'react'

const MenuMobile = ({ menuVisible, setMenuVisible }) => {



  return (
    <div className={menuVisible ? 'menu-mobile' : 'menu-mobile__cerrado'}>
      <nav className='menu-mobile__nav'>
        <ul className="menu-mobile__ul">
          <li className='menu-mobile__li'>Inicio</li>
          <li className='menu-mobile__li'>Limpieza de obras</li>
          <li className='menu-mobile__li'>Transformando espacios</li>
          <li className='menu-mobile__li'>Planificacion y proyectos</li>
          <li className='menu-mobile__li'>Diseños personalizados</li>


          <li className='menu-mobile__li'>Sobre Nosotros</li>
          <li className='menu-mobile__li'>Trabajos</li>
          <li className='menu-mobile__li'>Contacto</li>
        </ul>
        <div className="menu-mobile__icono"
          onClick={() => {
            setMenuVisible(false)
          }}
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </div>
      </nav>
    </div>
  )
}

export default MenuMobile
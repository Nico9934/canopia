import React from 'react'
import { Link, Outlet } from "react-router-dom";
import MenuMobile from './MenuMobile';


const Header = () => {
    return (
        
        
        <header className='header'>
            <div className="contenedor header__contenido">


                <Link className='logo' to="/home">Canopia</Link>

                <nav className="header__menu">
                    <Link className='header__li' to="/home">Inicio</Link>
                    <Link className='header__li' to="/sobrenosotros">Sobre Nosotros</Link>
                    <Link className='header__li' to="/trabajos">Trabajos</Link>
                    <Link className='header__li' to="/contacto">Contacto</Link>
                </nav>
            </div>
            
        </header>


    )
}

export default Header
import React from 'react';
import '../assets/css/header.css';

const Header = ({ imagenCargada, procesamientoCompleto }) => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#home" className='text-lg' title="Inicio"><i className="material-icons">home</i>Inicio</a></li>
                    <li><a href="./#upload" className='text-lg' title="Cargar Imagen"><i className="material-icons">upload</i>Cargar Imagen</a></li>
                    {imagenCargada && (
                        <li><a href="#processing" className='text-lg' title="Procesamiento"><i className="material-icons">account_box</i>
                        Proceso
                        </a></li>
                    )}
                    {procesamientoCompleto && (
                        <li><a href="#results" className='text-lg'  title="Resultados"><i className="material-icons">person_search</i>Aprox. facial</a></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
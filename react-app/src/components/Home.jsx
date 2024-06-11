import React from 'react';
import '../assets/css/home.css';
import '../index.css'
import img from '../assets/img/logo.png'

const Home = () => {
    const handleStartClick = () => {
        // Lógica para comenzar la acción deseada, como desplazarse a la sección de carga de imágenes
        const uploadSection = document.getElementById('upload');
        if (uploadSection) {
            uploadSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className='p-20 bg-black'>
            <img src={img} alt='logo' className='w-1/2 md:w-1/3 lg:w-1/5 hover:bg-black border-0' />
            <p className='text-white py-5 text-2xl font-light'>
                Futura Face es una aplicación de análisis facial diseñada para identificar y verificar individuos. Utilizando técnicas avanzadas de procesamiento de imágenes y análisis de características. La aplicación proporcionará una aproximación mediante la comparación de la imagen del usuario con un extenso conjunto de datos faciales, facilitando la verificación de personas desaparecidas o la identificación de cuerpos finitos e intactos para servicios forenses.
            </p>
            <button
                className='m-0 text-white font-bold text-2xl w-full  md:w-1/3 lg:w-1/5  pl-10 md:pl-0 text-center md:text-start'
                onClick={handleStartClick}>Comenzar</button>
        </section>
    );
}

export default Home;

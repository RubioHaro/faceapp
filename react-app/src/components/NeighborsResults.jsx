import React from 'react';

const NeighborsResults = ({ vecinosImages, vecinosLandmarks, vecinosGifs }) => {
    return (
        <section id="results">
            <h1 className='text-4xl font-semibold'>Módulo de Aproximación Facial</h1>
            <p className='text-2xl py-5'>
                A continuación se muestran las imágenes de los 5 vecinos más cercanos, los puntos faciales (landmarks) 
                y los GIFs correspondientes.
            </p>
            <p className='text-2xl py-5'>
                Estas comparaciones visuales permiten una mejor interpretación de los resultados del análisis de similitud facial.
            </p>
            {vecinosImages.length > 0 && (
                <div className='text-2xl'>
                    <h5>Imágenes de los Vecinos Más Cercanos:</h5>
                    <div className="flex flex-wrap p-5">
                    {vecinosImages.map((image, idx) => (
                        <img className='my-4 md:my-0'  key={idx} src={`data:image/png;base64,${image}`} alt={`Vecino ${idx}`} />
                    ))}

                        </div>
                </div>
            )}
            {vecinosLandmarks.length > 0 && (
                <div className='text-2xl'>
                    <h5>Landmarks de los Vecinos Más Cercanos:</h5>
                    <div className="flex flex-wrap p-5">
                    {vecinosLandmarks.map((image, idx) => (
                        <img className='my-4 md:my-0'  key={idx} src={`data:image/png;base64,${image}`} alt={`Landmark ${idx}`} />
                    ))}
                      </div>
                </div>
            )}
            {vecinosGifs.length > 0 && (
                <div>
                    <h5>GIFs:</h5>
                    <div className="flex flex-wrap p-5">
                    {vecinosGifs.map((image, idx) => (
                        <img  className='my-4 md:my-0' key={idx} src={`data:image/gif;base64,${image}`} alt={`Gif ${idx}`} />
                    ))}
                      </div>
                </div>
            )}
        </section>
    );
};

export default NeighborsResults;
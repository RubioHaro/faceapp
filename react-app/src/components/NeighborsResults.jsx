import React from 'react';

const NeighborsResults = ({ vecinosImages, vecinosLandmarks, vecinosGifs }) => {
    return (
        <section id="results">
            <h1>Módulo de aproximación facial</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            {vecinosImages.length > 0 && (
                <div>
                    <h5>Imágenes de los Vecinos Más Cercanos:</h5>
                    {vecinosImages.map((image, idx) => (
                        <img key={idx} src={`data:image/png;base64,${image}`} alt={`Vecino ${idx}`} />
                    ))}
                </div>
            )}
            {vecinosLandmarks.length > 0 && (
                <div>
                    <h5>Landmarks de los Vecinos Más Cercanos:</h5>
                    {vecinosLandmarks.map((image, idx) => (
                        <img key={idx} src={`data:image/png;base64,${image}`} alt={`Landmark ${idx}`} />
                    ))}
                </div>
            )}
            {vecinosGifs.length > 0 && (
                <div>
                    <h5>Gifs:</h5>
                    {vecinosGifs.map((image, idx) => (
                        <img key={idx} src={`data:image/gif;base64,${image}`} alt={`Gif ${idx}`} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default NeighborsResults;
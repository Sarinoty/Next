// Segment dynamique (on ne connait pas le chemin d'url exact à l'avance)

import React from 'react';

const ProductPage = ({params}) => {
    console.log(params);
    return (
        <div>
            <h1>Product page n°{params.id}</h1>
        </div>
    );
};

export default ProductPage;
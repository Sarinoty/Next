"use client"; // Composant client

// Ici ce errorboundary ne va pas intercepter layout.js car d'après l'ordre d'inclusion layout se situe avant. Il faut mettre l'errorBoundary un cran plus haut.

const ProductsError = ({reset}) => {
    return (
        <div className="error">
            <p>Oups</p>
            <button onClick={() => reset()}>Réessayer</button>
        </div>
    );
};

export default ProductsError;
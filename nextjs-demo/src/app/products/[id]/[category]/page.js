import React from "react";

const ProductPageCategory = ({params}) => {
    console.log(params); // On a accès à la category mais aussi à l'id.
    return (
        <div>
            <h1>Product page category</h1>
        </div>
    );
};

export default ProductPageCategory;
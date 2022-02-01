import React, { useState } from 'react';
import './ProductSearch.css';
import SingleProduct from '../../components/ProductsDisplay/SingleProduct';

const ProductSearch = (props) => {
    const products = JSON.parse(sessionStorage.getItem('products'));

    const searchInput = props.match.params.input;
    return (
     <div className="search-results-container">
         <div className='search-results-product-container'>
             <>
             <h2 className='search-title'>Search Results for "{searchInput}"</h2>
             <hr/>
             <div className="result-container">
             {products.filter(product => 
                    product.name.toLowerCase().includes(searchInput.toLowerCase())
                    ).map(resultProduct => (
                        <SingleProduct key={resultProduct._id} product={resultProduct} />
                    ))}
            </div>
             </>
         </div>
     </div>   
    );
}
export default ProductSearch;
/*    */
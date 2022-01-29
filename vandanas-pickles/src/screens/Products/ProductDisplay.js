import React, {useEffect} from 'react'
import SearchBar from '../../components/Searchbar/Searchbar'
import ProductList from '../../components/ProductsDisplay/ProductList';

export default function ProductDisplay() {
    return (
        <>
        <SearchBar />
        <ProductList />
        </>
    );
}



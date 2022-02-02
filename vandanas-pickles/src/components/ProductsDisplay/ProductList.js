import React, {Component, useMemo, useState} from 'react'
import axios from 'axios'
import SingleProduct from './SingleProduct'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default class ProductList extends Component{
    constructor (props) {
    super(props)
    this.state = {
        products : [],
        selected: ''
    }
    this._onSelect = this._onSelect.bind(this);
    }
    categories = ["low to high", "high to low"];  
    componentDidMount() {
        axios.get(`/api/products/`)
        .then(res => {
            const products = res.data;
            this.setState({products});
            sessionStorage.setItem('products', JSON.stringify(products));
        })
    };

    _onSelect(category){
        this.setState({selected: category})
        if (category.value === this.categories[0]) {
            const ascending = this.state.products.sort((a, b) => parseInt(a.price) - parseInt(b.price));
            this.setState({products:ascending});
        } 
        if (category.value === this.categories[1]) {
            const descending = this.state.products.sort((a, b) => parseInt(b.price) - parseInt(a.price));
            this.setState({products: descending})
        }
    }
    render(){
        return (
            <div className="product-list-container">
            <div className='margin-60-top'>
            <Dropdown options={this.categories} onChange={this._onSelect} placeholder="Sort by Price" />
                <div className='single-product-container'>
                    {this.state.products.map((product)=>{
                        return(
                            <SingleProduct key={product._id} product={product} />
                        )
                    })}
                </div> 
                </div>
                </div>
        )
    }
}


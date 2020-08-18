import React from 'react';
import { connect } from 'react-redux';
import { cart } from '../store/store';

// import {

// } from '@material-ui/core';

function Products(props) {
    console.log('props Products==', props);
    let currentCategory = '';
    let description = '';
    props.products.map(data => {
        if (data.category === props.activeCategory) {
            currentCategory = props.activeCategory;
            description = data.description;
        }
    })

    return (
        <section>
            <p>cart: {props.cart.length}</p>
            <p>{currentCategory}</p>
            <p>{description}</p>
            {props.products.map(data => {
                if (data.category === props.activeCategory) {
                    return (
                        <div>
                            <img src="https://www.cowgirlcontractcleaning.com/wp-content/uploads/sites/360/2018/05/placeholder-img.jpg"/>
                            <p>{data.name}</p>
                            <p>Price: {data.price}</p>
                            <p>In Stock: {data.inStock}</p>
                    <button onClick={() => props.cart(data.name)}>Add To Cart</button>
                            <button>View Details</button>
                        </div>
                    );
                }
            })}
        </section>
    );
}

const mapStateToProps = (state) => {
    console.log('products state==', state);
    return {
        products: state.reducer.products,
        categories: state.reducer.categories,
        activeCategory: state.reducer.active,
        cart: state.reducer.cart,
    };
};

const mapDispatchToProps = { cart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
import React from 'react';
import { connect } from 'react-redux';

function Products(props) {
    let printProducts = [];

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].category === props.currentCategory) {
            printProducts.push(<h3 key={i}>{props.products[i].name}</h3>);
            
            console.log('props.products[i].name===', props.products[i].name);

            console.log('props.products[i].category==', props.products[i].category);

            console.log('props.currentCategory==', props.currentCategory);
        }
    }
    console.log('printProducts==', printProducts);
    return (
        <>
            <h2>Products</h2>
            {printProducts}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        currentCategory: state.currentCategory,
    };
};

export default connect(mapStateToProps)(Products);
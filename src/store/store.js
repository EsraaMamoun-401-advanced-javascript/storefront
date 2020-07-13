import { createStore } from 'redux';

let initialState = {
    categories: [
        { name: 'Electronics', displayName: 'Electronics' },
        { name: 'Food', displayName: 'Food' },
        { name: 'Clothing', displayName: 'Clothing' },
    ],
    products: [
        { name: 'TV', category: 'Electronics', price: 699.99, inStock: 5, description: 'Description TV' },
        { name: 'Radio', category: 'Electronics', price: 99.0, inStock: 15, description: 'Description Radio' },
        { name: 'Shirt', category: 'Clothing', price: 9.99, inStock: 25, description: 'Description Shirt' },
        { name: 'Socks', category: 'Clothing', price: 12.99, inStock: 10, description: 'Description Socks' },
        { name: 'Apples', category: 'Food', price: 0.99, inStock: 500, description: 'Description Apples' },
        { name: 'Eggs', category: 'Food', price: 1.99, inStock: 12, description: 'Description Eggs' },
        { name: 'Bread', category: 'Food', price: 2.39, inStock: 90, description: 'Description Bread' },
    ],
    currentCategory: '',
    cart: [],
};

let reducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'SET_CURRENT_CATEGORY':
            newState.currentCategory = action.payload;
            console.log('action.payload===', action.payload);
            console.log('newState after currentCategory==', newState);
            break;
        case 'ADD_TO_CART':
            newState.cart.push(action.payload);
            // console.log('newState after cart==', newState); 
            break;
        case 'RESET':
            newState = { ...initialState };
            break;
        default:
            break;
    }
    console.log('{ ...initialState }==',  { ...initialState } );
    console.log('initialState==', initialState);
    console.log('newState==', newState);

    return newState;
};

export default createStore(reducer);
export { reducer };
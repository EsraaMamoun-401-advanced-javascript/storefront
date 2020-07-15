let initialState = {
    categories: [
        { name: 'Electronics', displayName: 'Electronics' },
        { name: 'Food', displayName: 'Food' },
        { name: 'Clothing', displayName: 'Clothing' },
    ],
    products: [
        { name: 'TV', category: 'Electronics', price: 699.99, inStock: 5, description: 'Electronics description' },
        { name: 'Radio', category: 'Electronics', price: 99.0, inStock: 15, description: 'Electronics description' },
        { name: 'Shirt', category: 'Clothing', price: 9.99, inStock: 25, description: 'Clothing description' },
        { name: 'Socks', category: 'Clothing', price: 12.99, inStock: 10, description: 'Clothing description' },
        { name: 'Apples', category: 'Food', price: 0.99, inStock: 500, description: 'Food description' },
        { name: 'Eggs', category: 'Food', price: 1.99, inStock: 12, description: 'Food description' },
        { name: 'Bread', category: 'Food', price: 2.39, inStock: 90, description: 'Food description' },
    ],
    activeCategory: '',
    stockNum: 0,
    cart: [],
};

export default (state = initialState, action) => {
    let { type, payload } = action;
    let copyState = { ...state };
    switch (type) {
        case 'RENDER':
            // console.log('payload in RENDER case==', payload);
            let activeCategoryValue = copyState.activeCategory;
            activeCategoryValue = payload;
            // console.log('copyState.activeCategory==', copyState.activeCategory);
            return { categories: copyState.categories, products: copyState.products, active: activeCategoryValue };
            case 'ADD_TO_CART':
                copyState.cart.push(payload);
                console.log('payload==', payload);
                console.log('copyState.cart==', copyState.cart);

                return { cart: copyState.cart }
            // break;
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

export const render = (name) => {
    return {
        type: 'RENDER',
        payload: name
    }
}

export const cart = (name) => {
    return {
        type: 'ADD_TO_CART',
        payload: name
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}
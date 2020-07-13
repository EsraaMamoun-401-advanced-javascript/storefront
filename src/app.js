import React from 'react';

import './style.scss';

import Header from './header/header';

import Categories from './components/categories';
import Products from './components/products';

import Footer from './footer/footer';


import './style.scss';

export default props => {
    return (
        <>
            <Header />
            <Categories />
            <Products />
            <Footer />
        </>
    )
};
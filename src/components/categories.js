import React from 'react';
import { connect } from 'react-redux';
import { render } from '../store/store';
// import {
     
// } from '@material-ui/core';

function Categories(props) {
    console.log('Categories props==', props);
    return (
        <div>
        <h3>Browse Our Categories</h3>
        <section>
            {props.categories.map((data) =>
                <a onClick={() => props.render(data.name)}>
                    {data.displayName}
                </a>
            )}
        </section>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('categories state===', state);

    return { 
        categories: state.reducer.categories 
    }
};

const mapDispatchToProps = { render };


export default connect(mapStateToProps, mapDispatchToProps)(Categories);
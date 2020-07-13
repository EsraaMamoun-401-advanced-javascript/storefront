import React from 'react';
import { connect } from 'react-redux';

function Categories(props) {
    let printcategories = [];

    for (let i = 0; i < props.categories.length; i++) {
        let category = props.categories[i];
        // console.log('category==', category);
        printcategories.push(
            <button
                key={i}
                onClick={() => {
                    props.dispatch({
                        type: 'SET_CURRENT_CATEGORY',
                        payload: props.categories[i].name,
                    });
                }}
            >
                {category.displayName || category.name}
            </button>,
        );
    }

    // console.log('printcategories===', printcategories);

    return (
        <div>
            <section>
                Browse our Categories
            </section>
            <div>
                {printcategories}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    categories: state.categories,
});

export default connect(mapStateToProps)(Categories);

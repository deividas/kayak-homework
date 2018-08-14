import React from 'react';

function BasicFilterButton(props) {
    const { title, price, className } = props;

    return (
        <button type="button" className={`filter-button ${className}`}>
            { title }
            { price != null && 
                <span className="side-text">
                    { price }
                </span>
            }
        </button>
    );
}

export default BasicFilterButton;

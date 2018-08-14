import React from 'react';

function BasicFilterButton(props) {
    const { title, price, className, onClick } = props;

    return (
        <button type="button" onClick={onClick} className={`filter-button ${className}`}>
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

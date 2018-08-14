import React from 'react';

function BasicFilterButton(props) {
    const { title, price, selected, onClick } = props;

    return (
        <button type="button" onClick={onClick} className={`filter-button ${selected ? 'selected' : ''}`}>
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

import React from 'react';

function RemoveIcon(props) {
    const { onClick } = props;

    return (
        <svg onClick={onClick} viewBox="0 0 9.85 9.93" className="icon remove-icon">
            <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2px" d="M.71.79l8.43 8.43M9.14.71L.71 9.14" />
        </svg>
    );
}

export default RemoveIcon;

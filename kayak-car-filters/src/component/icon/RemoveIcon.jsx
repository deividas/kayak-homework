import React from 'react';

function RemoveIcon(props) {
    const { onClick } = props;

    return (
        <div className="icon remove-icon">
            <svg onClick={onClick} viewBox="0 0 9.85 9.93">
                <path fill="none" stroke="#1e93f5" strokeMiterlimit="10" strokeWidth="2px" d="M.71.79l8.43 8.43M9.14.71L.71 9.14" />
            </svg>
        </div>
    );
}

export default RemoveIcon;

import React from 'react';

function CheckboxIcon(props) {
    const { checked } = props;

    return (
        <div className={`checkbox ${checked ? 'checked' : ''}`} />
    );
}

export default CheckboxIcon;

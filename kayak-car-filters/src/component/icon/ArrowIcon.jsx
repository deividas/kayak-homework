import React from 'react';

function ArrowIcon(props) {
    const { reverse } = props;

    return (
        <svg className={(reverse ? 'icon reverse' : 'icon')} viewBox="0 0 8 5" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.35">
            <path d="M7 1.053L4.027 4 1 1" stroke="currentColor" fill="none" />
        </svg>
    );
}

export default ArrowIcon;

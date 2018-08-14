import React from 'react';

import ArrowIcon from '../icon/ArrowIcon';

class AdvancedFilterButton extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props;

        return (
            <div className="filter-button advanced-filter-button">
                <div className="advanced-filter-header">
                    <span className="filter-title">
                        { title }
                    </span>
                    <ArrowIcon />
                </div>
                <div classname="advanced-filter-content">
                    
                </div>
            </div>
        );
    }

}

export default AdvancedFilterButton;

import React from 'react';

import ArrowIcon from '../icon/ArrowIcon';
import CheckboxIcon from '../icon/CheckboxIcon';
import RemoveIcon from '../icon/RemoveIcon';

class AdvancedFilterButton extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    } 
    
    componentWillUnmount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    handleClick = e => {
        if (this.node.contains(e.target)) {
            return;
        }

        this.props.onOutsideClick();
    }

    render() {
        const { title, open, filters } = this.props;

        const { onClick, onSelectMultiple, onSelectSingle, onRemoveSelection } = this.props;

        return (
            <div ref={node => this.node = node} className={`filter-button advanced-filter-button ${(open || filters.some(e => e.selected)) ? 'selected' : ''}`}>
                <div onClick={onClick} className="advanced-filter-header">
                    <span className="filter-title">
                        { title }
                    </span>
                    { filters.some(e => e.selected) ? <RemoveIcon onClick={() => onRemoveSelection()} /> : <ArrowIcon reverse={open} />}
                </div>
                { open && 
                    <div className="advanced-filter-container">
                        <div className="advanced-filter-content">
                            { filters.map((e, i) => 
                                <li>
                                    <div onClick={() => onSelectMultiple(i)} className="filter-multiple-select">
                                        <CheckboxIcon checked={e.selected} />
                                        <label className="filter-dropdown-title">{e.title}</label>
                                    </div>
                                    <label onClick={() => onSelectSingle(i)} className="filter-dropdown-side-text">{e.price}</label>
                                </li>
                            )}
                        </div>
                    </div>
                }
            </div>
        );
    }

}

export default AdvancedFilterButton;

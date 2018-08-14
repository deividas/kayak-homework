import React from 'react';

import BasicFilterButton from './BasicFilterButton';
import AdvancedFilterButton from './AdvancedFilterButton';

class CarFilter extends React.Component {
    
    constructor() {
        super();

        this.state = {
            filters: [
                { title: 'All', selected: true, multipleSelect: false, main: true },
                { title: 'Small', selected: false, multipleSelect: true, price: '$422+' },
                { title: 'Medium', selected: false, multipleSelect: true, price: '$433+' },
                { title: 'Large', selected: false, multipleSelect: true, price: '$456+' },
                { title: 'SUV', selected: false, multipleSelect: true, price: '$525+' },
                { title: 'Van', selected: false, multipleSelect: true, price: '$649+' }
            ],
            advancedFilterOpened: false,
            advancedFilters: [
                { title: 'Pickup Truck', selected: false, multipleSelect: true, price: '$594' },
                { title: 'Luxury', selected: false, multipleSelect: true, price: '$626' },
                { title: 'Commercial', selected: false, multipleSelect: true, price: '$1248' },
                { title: 'Convertible', selected: false, multipleSelect: true, price: '$1607' }
            ]
        };
    }
    
    toggleFilter = filter => {
        filter.selected = !filter.selected;
    }

    setFilterSelected = (filter, selected) => {
        filter.selected = selected;
    }

    noFiltersSelected = (filters, advancedFilters) => {
        return !filters.some(e => e.selected) && !advancedFilters.some(e => e.selected)
    }

    selectMainFilter = filters => {
        filters.forEach((e, _) => {
            if (e.main)
                this.setFilterSelected(e, true);
        });
    }

    unselectFilters = (filters, exceptIndex) => {
        filters.forEach((e, i) => {
            if (i != exceptIndex)
                this.setFilterSelected(e, false);
        });
    }

    unselectSingleSelectFilters = filters => {
        filters.forEach((e, _) => {
            if (!e.multipleSelect)
                this.setFilterSelected(e, false);
        });
    }

    onBasicFilterClick = index => e => {
        let state = {...this.state};
        
        let filters = state.filters;
        let advancedFilters = state.advancedFilters;

        let filter = filters[index];

        if (filter.main && filter.selected)
            return;

        this.toggleFilter(filter);

        // If the current filter doesn't support multiple selection, unselect other filters
        if (!filter.multipleSelect && filter.selected) {
            this.unselectFilters(filters, index);
            this.unselectFilters(advancedFilters, null);
        }
        
        // Unselect single select filters, if the current filter is a multiple selection one
        if (filter.multipleSelect)
            this.unselectSingleSelectFilters(filters);

        // If the current filter is unselected and there are no other filters selected, select the main one
        if (!filter.selected && this.noFiltersSelected(filters, advancedFilters))
            this.selectMainFilter(filters);

        this.setState(state);
    }

    onAdvancedFilterClick = index => e => {
        let state = {...this.state};

        state.advancedFilterOpen = !state.advancedFilterOpen;

        this.setState(state);
    }

    onAdvancedFilterOutsideClick = () => {
        let state = {...this.state};

        state.advancedFilterOpen = false;

        this.setState(state);
    }

    onMultipleSelect = index => {
        let state = {...this.state};

        let filters = state.filters;
        let advancedFilters = state.advancedFilters;
        let filter = advancedFilters[index];

        this.toggleFilter(filter);
        this.unselectSingleSelectFilters(filters);

        if (!filter.selected && this.noFiltersSelected(filters, advancedFilters))
            this.selectMainFilter(filters);

        this.setState(state);
    }

    onSingleSelect = index => {
        let state = {...this.state};

        let filters = state.filters;
        let advancedFilters = state.advancedFilters;

        this.setFilterSelected(advancedFilters[index], true);
        this.unselectFilters(filters, null);
        this.unselectFilters(advancedFilters, index);

        this.setState(state);
    }

    onSelectionRemove = () => {
        let state = {...this.state};

        let filters = state.filters;
        let advancedFilters = state.advancedFilters;

        state.advancedFilterOpen = false;
        this.unselectFilters(advancedFilters);

        if (this.noFiltersSelected(filters, advancedFilters))
            this.selectMainFilter(filters);

        this.setState(state);
    }

    render() {
        const { filters, advancedFilterOpen, advancedFilters } = this.state;
        
        return (
            <div className="car-filter">
                { filters.map((e, i) => <BasicFilterButton onClick={this.onBasicFilterClick(i)} selected={e.selected} title={e.title} price={e.price} />)}
                <AdvancedFilterButton title="More"
                    open={advancedFilterOpen} filters={advancedFilters}
                    onClick={this.onAdvancedFilterClick()} onOutsideClick={this.onAdvancedFilterOutsideClick} 
                    onSelectionRemove={this.onSelectionRemove} onMultipleSelect={this.onMultipleSelect} onSingleSelect={this.onSingleSelect} />
            </div>
        );
    }

}

export default CarFilter;

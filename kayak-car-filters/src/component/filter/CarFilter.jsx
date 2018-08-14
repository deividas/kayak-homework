import React from 'react';

import BasicFilterButton from './BasicFilterButton';
import AdvancedFilterButton from './AdvancedFilterButton';

class CarFilter extends React.Component {
    
    constructor() {
        super();

        this.state = {
            filters: [
                {
                    title: 'All', selected: true, multipleSelect: false, main: true
                },
                {
                    title: 'Small', selected: false, multipleSelect: true, price: '$422+'
                },
                {
                    title: 'Medium', selected: false, multipleSelect: true, price: '$433+'
                },
                {
                    title: 'Large', selected: false, multipleSelect: true, price: '$456+'
                },
                {
                    title: 'SUV', selected: false, multipleSelect: true, price: '$525+'
                },
                {
                    title: 'Van', selected: false, multipleSelect: true, price: '$649+'
                }
            ],
            advancedFilterOpened: false,
            advancedFilters: [
                {
                    title: 'Pickup Truck', selected: false, multipleSelect: true, price: '$594'
                },
                {
                    title: 'Luxury', selected: false, multipleSelect: true, price: '$626'
                },
                {
                    title: 'Commercial', selected: false, multipleSelect: true, price: '$1248'
                },
                {
                    title: 'Convertible', selected: false, multipleSelect: true, price: '$1607'
                }
            ]
        };
    }

    onBasicButtonClick = index => e => {
        let state = {...this.state};
        
        let filters = state.filters;
        let filter = filters[index];

        if (filter.main && filter.selected)
            return;

        filter.selected = !filter.selected;

        if (!filter.multipleSelect && filter.selected) {
            let advancedFilters = state.advancedFilters;

            advancedFilters.forEach((e, i) => advancedFilters[i].selected = false);
        }

        filters.forEach((e, i) => {
            if (filter.multipleSelect && !e.multipleSelect || !filter.multipleSelect && e.multipleSelect)
                filters[i].selected = false;
        });

        this.setState(state);
    }

    onAdvancedButtonClick = index => e => {
        let state = {...this.state};

        state.advancedFilterOpen = !state.advancedFilterOpen;

        this.setState(state);
    }

    onAdvancedButtonOutsideClick = () => {
        let state = {...this.state};

        state.advancedFilterOpen = false;

        this.setState(state);
    }

    onSelectMultiple = index => {
        let state = {...this.state};
        let advancedFilter = state.advancedFilters[index];

        advancedFilter.selected = !advancedFilter.selected;

        state.filters.forEach((e, i) => {
            if (!state.filters[i].multipleSelect && state.filters[i].selected)
                state.filters[i].selected = false;
        });

        this.setState(state);
    }

    onSelectSingle = index => {
        let state = {...this.state};
        let advancedFilter = state.advancedFilters[index];

        advancedFilter.selected = true;

        state.filters.forEach((e, i) => state.filters[i].selected = false);

        state.advancedFilters.forEach((e, i) => {
            if (i != index)
                state.advancedFilters[i].selected = false;
        });

        this.setState(state);
    }

    onRemoveSelection = () => {
        let state = {...this.state};
        let advancedFilters = state.advancedFilters;

        advancedFilters.forEach((e, i) => {
            advancedFilters[i].selected = false;
        });

        state.advancedFilterOpen = false;

        this.setState(state);
    }

    render() {
        const { filters } = this.state;

        return (
            <div className="car-filter">
                { filters.map((e, i) => <BasicFilterButton onClick={this.onBasicButtonClick(i)} className={(e.selected ? 'selected' : '')} title={e.title} price={e.price} />)}
                <AdvancedFilterButton onRemoveSelection={this.onRemoveSelection} onSelectMultiple={this.onSelectMultiple} onSelectSingle={this.onSelectSingle} onOutsideClick={this.onAdvancedButtonOutsideClick} onClick={this.onAdvancedButtonClick()} open={this.state.advancedFilterOpen} filters={this.state.advancedFilters} title="More" />
            </div>
        );
    }

}

export default CarFilter;

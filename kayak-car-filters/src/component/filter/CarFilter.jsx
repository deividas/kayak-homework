import React from 'react';

import BasicFilterButton from './BasicFilterButton';
import AdvancedFilterButton from './AdvancedFilterButton';

class CarFilter extends React.Component {
    
    constructor() {
        super();

        this.state = {
            filters: [
                {
                    title: 'All', selected: true, multipleSelect: false
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
        let filters = [...this.state.filters];

        let filter = filters[index];
        filter.selected = !filter.selected;

        filters.forEach((e, i) => {
            if (filter.multipleSelect && !e.multipleSelect || !filter.multipleSelect && e.multipleSelect)
                filters[i].selected = false;
        });

        this.setState(filters);
    }

    render() {
        const { filters } = this.state;

        return (
            <div className="car-filter">
                { filters.map((e, i) => <BasicFilterButton onClick={this.onBasicButtonClick(i)} className={(e.selected ? 'selected' : '')} title={e.title} price={e.price} />)}
                <AdvancedFilterButton title="More" />
            </div>
        );
    }

}

export default CarFilter;

import React from 'react';

import BasicFilterButton from './BasicFilterButton';

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
            ]
        };
    }

    render() {
        const { filters } = this.state;

        return (
            <div className="car-filter">
                { filters.map((e, _) => <BasicFilterButton className={(e.selected ? 'selected' : '')} title={e.title} price={e.price} />)}
            </div>
        );
    }

}

export default CarFilter;

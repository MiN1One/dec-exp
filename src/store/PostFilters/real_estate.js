const filter = {
    items: {
        apartments: {
            inputs: [
                {
                    title: 'Year of manufacture',
                    method: 'onInputYearOfManufacture'
                },
                {
                    title: 'Mileage',
                    method: 'onInputMileage'
                }
            ],
            sub: [
                {
                    title: 'Condition', 
                    items: ['used', 'new', 'all'],
                    method: 'onFilterByCondition'
                },
                {
                    title: 'Type',
                    items: ['for boys', 'for girls', 'all'],
                    method: 'onFilterByType'
                }
            ]
        },
        houses: {
            inputs: [
                {
                    title: 'Year of manufacture',
                    method: 'onInputYearOfManufacture'
                },
                {
                    title: 'Mileage',
                    method: 'onInputMileage'
                }
            ],
            sub: [
                {
                    title: 'Condition', 
                    items: ['used', 'new', 'all'], 
                    method: 'onFilterByCondition'
                }
            ]
        },
        areas_fields: {
            inputs: [
                {
                    title: 'Year of manufacture',
                    method: 'onInputYearOfManufacture'
                },
                {
                    title: 'Mileage',
                    method: 'onInputMileage'
                }
            ],
            sub: [
                { 
                    title: 'Condition', 
                    items: ['used', 'new', 'all'], 
                    method: 'onFilterByCondition'
                }
            ]
        },
        commercial_premises: {
            inputs: [
                {
                    title: 'Year of manufacture',
                    method: 'onInputYearOfManufacture'
                },
                {
                    title: 'Mileage',
                    method: 'onInputMileage'
                }
            ],
            sub: [
                { 
                    title: 'Condition', 
                    items: ['used', 'new', 'all'], 
                    method: 'onFilterByCondition'
                }
            ]
        },
        garages: {
            inputs: [
                {
                    title: 'Year of manufacture',
                    method: 'onInputYearOfManufacture'
                },
                {
                    title: 'Mileage',
                    method: 'onInputMileage'
                }
            ],
            sub: [
                {
                    title: 'Condition',
                    items: ['used', 'new', 'all'],
                    method: 'onFilterByCondition'
                }
            ]
        }
    }
};

export default filter;
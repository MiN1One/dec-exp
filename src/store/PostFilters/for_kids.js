const filter = {
    items: {
        clothing: {
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
        furniture: {
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
        toys: {
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
        educational_assets: {
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
        carriages: {
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
        food: {
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
        child_car_seats: {
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
        others: {
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
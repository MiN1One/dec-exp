const filter = {
    items: {
        antiques_collections: {
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
        musical_instruments: {
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
        sports_leisure: {
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
        books_magazines: {
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
        cd_dvd_records_cassettes: {
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
        tickets: {
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
        other: {
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
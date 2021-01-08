const filter = {
    items: {
        cats: {
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
        dogs: {
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
        aquarium: {
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
        birds: {
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
        rodents: {
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
        farm_animals: {
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
        pet_supplies: {
            inputs: [],
            sub: [
                {
                    title: 'Condition',
                    items: ['used', 'new', 'all'],
                    method: 'onFilterByCondition'
                }
            ]
        },
        knitting: {
            inputs: [],
            sub: [
                {
                    title: 'Condition',
                    items: ['used', 'new', 'all'],
                    method: 'onFilterByCondition'
                }
            ]
        },
        lost_and_found: {
            inputs: [],
            sub: [
                {
                    title: 'Condition',
                    items: ['used', 'new', 'all'],
                    method: 'onFilterByCondition'
                }
            ]
        },
        animals_for_free: {
            inputs: [],
            sub: [
                {
                    title: 'Condition',
                    items: ['used', 'new', 'all'],
                    method: 'onFilterByCondition'
                }
            ]
        },
        other_animals: {
            inputs: [],
            sub: [
                {
                    title: 'Condition',
                    items: ['used', 'new', 'all'],
                    method: 'onFilterByCondition'
                }
            ]
        },
    }
};

export default filter;
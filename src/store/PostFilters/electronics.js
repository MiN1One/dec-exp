const filter = {
    items: {
        mobile_phones: {
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
        computers: {
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
        media_devices: {
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
        games_consoles: {
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
        tv_video_equipment: {
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
        home_appliances: {
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
        kitchen_appliances: {
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
        climatic_equipment: {
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
        accessories_and_components: {
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
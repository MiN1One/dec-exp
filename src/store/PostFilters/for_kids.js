const filter = {
    for_kids: {
        title: 'For kids',
        items: {
            clothing: {
                title: 'Clothing',
                counters: [
                    {
                        title: 'Size', 
                        method: 'onFilterBySizeStart',
                        methodEnd: 'onFilterBySizeEnd'
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
                title: 'Furniture',
                counters: [],
                sub: [
                    {
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            toys: {
                title: 'Toys',
                counters: [],
                sub: [
                    { 
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            educational_assets: {
                title: 'Educational assets',
                counters: [],
                sub: [
                    { 
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            carriages: {
                title: 'Carriages',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            food: {
                title: 'Food',
                counters: [],
                sub: [
                    {
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            child_car_seats: {
                title: 'Child car seats',
                counters: [],
                sub: [
                    { 
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            others: {
                title: 'Others',
                counters: [],
                sub: [
                    { 
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            }
        }
    }
};

export default filter;
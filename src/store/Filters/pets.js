const filter = {
    pets: {
        title: 'Pets',
        items: {
            cats: {
                title: 'Cats',
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
            dogs: {
                title: 'Dogs',
                counters: [],
                sub: [
                    {
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            aquarium: {
                title: 'Aquarium',
                counters: [],
                sub: [
                    { 
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            birds: {
                title: 'Birds',
                counters: [],
                sub: [
                    { 
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            rodents: {
                title: 'Rodents',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            farm_animals: {
                title: 'Farm animals',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            pet_supplies: {
                title: 'Pet supplies',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            knitting: {
                title: 'Knitting',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            lost_and_found: {
                title: 'Lost and found',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            animals_for_free: {
                title: 'Animals for free',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            other_animals: {
                title: 'Other animals',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
        }
    }
};

export default filter;
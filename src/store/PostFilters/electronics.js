const filter = {
    electronics: {
        title: 'Electronics',
        items: {
            mobile_phones: {
                title: 'Mobile phones',
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
            computers: {
                title: 'Computers',
                counters: [],
                sub: [
                    {
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            areas_fields: {
                title: 'Areas / Fields',
                counters: [],
                sub: [
                    { 
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            media_devices: {
                title: 'Media devices',
                counters: [],
                sub: [
                    { 
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            games_consoles: {
                title: 'Games / Consoles',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            tv_video_equipment: {
                title: 'TV / video equipment',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            home_appliances: {
                title: 'Home Appliances',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            kitchen_appliances: {
                title: 'Kitchen appliances',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            climatic_equipment: {
                title: 'Climatic equipment',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            accessories_and_components: {
                title: 'Accessories and components',
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
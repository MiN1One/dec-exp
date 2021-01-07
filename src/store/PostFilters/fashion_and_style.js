const filter = {
    fashion_and_style: {
        title: 'Fashion and style',
        items: {
            clothes_shoes: {
                title: 'Clothes, shoes',
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
            for_wedding: {
                title: 'For wedding',
                counters: [],
                sub: [
                    {
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            fashion_miscellaneous: {
                title: 'Fashion miscellaneous',
                counters: [],
                sub: [
                    { 
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            commercial_premises: {
                title: 'Commercial premises',
                counters: [],
                sub: [
                    { 
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            wrist_watch: {
                title: 'Wrist Watch',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            accessories: {
                title: 'Accessories',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            presents: {
                title: 'Presents',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            beauty_health: {
                title: 'Beauty / health',
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
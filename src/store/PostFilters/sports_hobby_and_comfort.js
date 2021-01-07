const filter = {
    sports_hobby_and_comfort: {
        title: 'Sports / Hobby & Comfort',
        items: {
            antiques_collections: {
                title: 'Antiques / Collections',
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
            musical_instruments: {
                title: 'Musical instruments',
                counters: [],
                sub: [
                    {
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            sports_leisure: {
                title: 'Sports / Leisure',
                counters: [],
                sub: [
                    { 
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            books_magazines: {
                title: 'Books magazines',
                counters: [],
                sub: [
                    { 
                        title: 'Condition', 
                        items: ['used', 'new', 'all'], 
                        method: 'onFilterByCondition'
                    }
                ]
            },
            cd_dvd_records_cassettes: {
                title: 'CD / DVD / records / cassettes',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            tickets: {
                title: 'Tickets',
                counters: [],
                sub: [
                    {
                        title: 'Condition',
                        items: ['used', 'new', 'all'],
                        method: 'onFilterByCondition'
                    }
                ]
            },
            other: {
                title: 'Other',
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
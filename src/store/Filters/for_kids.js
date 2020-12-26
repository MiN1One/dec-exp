const filter = {
    title: 'For kids',
    items: {
        clothing: {
            title: 'Clothing',
            counters: [
                {
                    title: 'Size', 
                    method: (val) => console.log('Init val: ' + val),
                    methodEnd: (val) => console.log('End val: ' + val)
                }
            ],
            sub: [
                {
                    title: 'Condition', 
                    items: ['Used', 'New', 'All'],
                    def: 'All',
                    method: (el) => console.log('Condition: ' + el)
                },
                {
                    title: 'Type',
                    items: ['For boys', 'For girls', 'All'],
                    def: 'All',
                    method: (el) => console.log('Type: ' + el)
                }
            ]
        },
        furniture: {
            title: 'Furniture',
            counters: [],
            sub: [{ title: 'Condition', items: ['Used', 'New', 'All'], def: 'All', method: (el) => console.log('Condition: ' + el) }]
        },
        toys: {
            title: 'Toys',
            counters: [],
            sub: [{ title: 'Condition', items: ['Used', 'New', 'All'], def: 'All', method: (el) => console.log('Condition: ' + el) }]
        },
        educational_assets: {
            title: 'Educational assets',
            counters: [],
            sub: [{ title: 'Condition', items: ['Used', 'New', 'All'], def: 'All', method: (el) => console.log('Condition: ' + el) }]
        },
        carriages: {
            title: 'Carriages',
            counters: [],
            sub: [{ title: 'Condition', items: ['Used', 'New', 'All'], def: 'All', method: (el) => console.log('Condition: ' + el) }]
        },
        food: {
            title: 'Food',
            counters: [],
            sub: [{ title: 'Condition', items: ['Used', 'New', 'All'], def: 'All', method: (el) => console.log('Condition: ' + el) }]
        },
        child_car_seats: {
            title: 'Child car seats',
            counters: [],
            sub: [{ title: 'Condition', items: ['Used', 'New', 'All'], def: 'All', method: (el) => console.log('Condition: ' + el) }]
        },
        others: {
            title: 'Others',
            counters: [],
            sub: [{ title: 'Condition', items: ['Used', 'New', 'All'], def: 'All', method: (el) => console.log('Condition: ' + el) }]
        }
    }
};

export default filter;
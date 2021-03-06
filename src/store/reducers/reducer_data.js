import actionTypes from '../actions/actionTypes';

import scan from '../../assets/images/scania.jpg';
import nexoa from '../../assets/images/nexia.jpg';
import galax10 from '../../assets/images/galaxy10.jpg';
import cat_tuti from '../../assets/images/cat-tuti.jpeg';
import galax20 from '../../assets/images/s202.jpg';
import galax20_2 from '../../assets/images/s20-2.jpg';
import cobalt from '../../assets/images/Chevrolet_Cobalt_2013_in_Russia.JPG';
import lenovo from '../../assets/images/lenovo-thinkpad-x1-carbon-7th-2.jpg';
import lenovo_2 from '../../assets/images/Lenovo-ThinkPad-T495-title.jpg';
import iphone8 from '../../assets/images/iphone-8-update-in-hand-logo-500x500.jpg';
import iphone8_2 from '../../assets/images/iphone-8-8-plus-hands-on-10_large.jpg';

import car from '../../assets/images/devon-janse-van-rensburg-xJhma-g2cnA-unsplash-compressed (3).jpg';
import int from '../../assets/images/jonathan-wolf-7sKmRRNH_1Y-unsplash-compressed.jpg';
import int2 from '../../assets/images/taisiia-shestopal-wXwZyBhGSAc-unsplash-compressed.jpg';

const initialState = {
    vendorAds: [
        { title: 'Discover Everything', img: car },
        { title: 'Discover Everything', img: int },
        { title: 'Discover Everything', img: int2 }
    ],
    loading: false,
    search: '',
    data: [
        {
            id: 'someId_1',
            title: 'Scania 830',
            price: '$230,000,00',
            date: 'February 20',
            img: [scan],
            location: 'Berlin, 20',
            favorite: false,
            category: '',
            premium: false,
            mileage: '1,006,286',
        },
        {
            id: 'someId_4',
            title: 'Iphone 8',
            price: '$250,00',
            date: 'February 20',
            img: [iphone8_2, iphone8],
            location: 'Some location',
            favorite: false,
            category: '',
            premium: true,
        },
        {
            id: 'someId_6',
            title: 'Cobalt 2019',
            price: '$8,000,00',
            date: 'February 16',
            img: [cobalt],
            location: 'Some location',
            favorite: false,
            category: '',
            premium: true,
        },
        {
            id: 'someId_2',
            title: 'Nexia 3',
            price: '$10,000,00',
            date: 'February 19',
            img: [nexoa],
            location: 'Some location',
            favorite: false,
            category: '',
            premium: false,
        },
        {
            id: 'someId_3',
            title: 'Galaxy S10',
            price: '$400,00',
            date: 'February 18',
            img: [galax10],
            location: 'Some location',
            favorite: true,
            category: '',
            premium: false,            
        },
        {
            id: 'someId_5',
            title: 'Lenovo Thinkpad',
            price: '$650,00',
            date: 'February 17',
            img: [lenovo, lenovo_2],
            location: 'Some location',
            favorite: true,
            category: '',
            premium: false,            
        },
        {
            id: 'someId_7',
            title: 'Kitty',
            price: 'Give away',
            date: 'February 15',
            img: [cat_tuti],
            location: 'Some location',
            favorite: true,
            category: '',
            premium: false,            
        },
        {
            id: 'someId_8',
            title: 'Galaxy S20',
            price: 'Exchange',
            date: 'February 14',
            img: [galax20, galax20_2],
            location: 'Some location',
            favorite: false,
            category: '',
            premium: false,
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ON_SEARCH_INPUT:
            return {
                ...state,
                search: action.search
            }
        default: return state;
    }
};

export default reducer;
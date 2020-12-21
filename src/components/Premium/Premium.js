import { Component } from 'react';

import Card from '../Card/Card';

import scan from '../../assets/images/scania.jpg';
import './Premium.scss';

class Premium extends Component {
    state = {
        popular: [
            {
                title: 'Scania 830',
                price: '$230,000,00',
                date: 'February 20',
                img: scan,
                location: 'Berlin, 20',
            },
            {
                title: 'Nexia 3',
                price: '$10,000,00',
                date: 'February 19',
                img: 'img',
                location: 'Some location'
            },
            {
                title: 'Galaxy S10',
                price: '$400,00',
                date: 'February 18',
                img: 'img',
                location: 'Some location'
            },
            {
                title: 'Iphone 8',
                price: '$250,00',
                date: 'February 20',
                img: 'img',
                location: 'Some location'
            },
            {
                title: 'Lonovo Thinkpad',
                price: '$350,00',
                date: 'February 17',
                img: 'img',
                location: 'Some location'
            },
            {
                title: 'Cobalt 2019',
                price: '$8,000,00',
                date: 'February 16',
                img: 'img',
                location: 'Some location'
            },
            {
                title: 'Kitty',
                price: 'Give away',
                date: 'February 15',
                img: 'img',
                location: 'Some location'
            },
            {
                title: 'Galaxy S20',
                price: 'Exchange',
                date: 'February 14',
                img: 'img',
                location: 'Some location'
            }
        ]
    }

    render() {
        const popular = this.state.popular.map((el, i) => {
            return (
                <Card data={el} key={i} />
            );
        });

        return (
            <div className="Premium">
                <div className="container">
                    <div className="Premium__wrapper">
                        <h3 className="Premium__heading">Premuim ads</h3>
                        <div className="Premium__list">
                            {popular}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Premium;
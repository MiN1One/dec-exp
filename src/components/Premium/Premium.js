import { Component } from 'react';

import Card from '../Card/Card';

import scan from '../../assets/images/scania.jpg';
import nexoa from '../../assets/images/nexia.jpg';
import galax10 from '../../assets/images/galaxy10.jpg';
import kitty from '../../assets/images/kitty.jpg';
import galax20 from '../../assets/images/s202.jpg';
import cobalt from '../../assets/images/Chevrolet_Cobalt_2013_in_Russia.JPG';
import lenovo from '../../assets/images/lenovo-thinkpad-x1-carbon-7th-2.jpg';
import iphone8 from '../../assets/images/iphone-8-update-in-hand-logo-500x500.jpg';

import * as utils from '../../utilities/utilities';
import './Premium.scss';

class Premium extends Component {
    state = {
        popular: [
            {
                id: 'someId_123',
                title: 'Scania 830',
                price: '$230,000,00',
                date: 'February 20',
                img: scan,
                location: 'Berlin, 20',
                favorite: false,
            },
            {
                id: 'someId_123',
                title: 'Nexia 3',
                price: '$10,000,00',
                date: 'February 19',
                img: nexoa,
                location: 'Some location',
                favorite: false,
            },
            {
                id: 'someId_123',
                title: 'Galaxy S10',
                price: '$400,00',
                date: 'February 18',
                img: galax10,
                location: 'Some location',
                favorite: true,
            },
            {
                id: 'someId_123',
                title: 'Iphone 8',
                price: '$250,00',
                date: 'February 20',
                img: iphone8,
                location: 'Some location',
                favorite: false,
            },
            {
                id: 'someId_123',
                title: 'Lenovo Thinkpad',
                price: '$650,00',
                date: 'February 17',
                img: lenovo,
                location: 'Some location',
                favorite: true,
            },
            {
                id: 'someId_123',
                title: 'Cobalt 2019',
                price: '$8,000,00',
                date: 'February 16',
                img: cobalt,
                location: 'Some location',
                favorite: false,
            },
            {
                id: 'someId_123',
                title: 'Kitty',
                price: 'Give away',
                date: 'February 15',
                img: kitty,
                location: 'Some location',
                favorite: true,
            },
            {
                id: 'someId_123',
                title: 'Galaxy S20',
                price: 'Exchange',
                date: 'February 14',
                img: galax20,
                location: 'Some location',
                favorite: false,
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
            <section className="Premium">
                <div className="container">
                    <div className="Premium__wrapper">
                        <div>
                            <h3 className="Premium__heading">Premium ads</h3>
                            <div className="Premium__list">
                                {popular}
                            </div>
                        </div>
                        <button className="btn btn__primary btn__primary--outline Premium__btn">
                            Show more
                            <svg className="Premium__icon" dangerouslySetInnerHTML={{__html: utils.use('chevrons-down')}} />
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Premium;
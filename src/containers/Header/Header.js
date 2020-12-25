import { Component } from 'react';

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'; 
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'

import './Header.scss';
import sprite from '../../assets/icons/sprite.svg';
import Categories from '../../components/Categories/Categories';

import car from '../../assets/images/devon-janse-van-rensburg-xJhma-g2cnA-unsplash.jpg';
import int from '../../assets/images/jonathan-wolf-7sKmRRNH_1Y-unsplash.jpg';
import int2 from '../../assets/images/taisiia-shestopal-wXwZyBhGSAc-unsplash.jpg';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

class Header extends Component {
    state = {
        ads: [
            { title: 'Discover Everything', img: car },
            { title: 'Discover Everything', img: int },
            { title: 'Discover Everything', img: int2 }
        ]
    }

    render() {
        const ads = this.state.ads.map((el, i) => {
            return (
                <SwiperSlide className="Header__item" key={i}>
                    <img className="Header__img" src={el.img}/>
                    <h1 className="Header__heading">{el.title}</h1>
                </SwiperSlide>
            )
        });

        return (
            <header className="Header">
                <div className="container">
                    <div className="Header__wrapper">
                        <Categories />
                        <Swiper 
                            className="Header__list"
                            autoplay={{ delay: 3000, disableOnInteraction: false, waitForTransition: true }}
                            navigation={{ prevEl: '.Header__btn--left', nextEl: '.Header__btn--right', disabledClass: 'Header__btn--disabled' }}
                            pagination={{el: '.swiper-pagination', clickable: true}}>
                            {ads}
                            <button className="Header__btn Header__btn--left">
                                <svg className="Header__icon" dangerouslySetInnerHTML={{__html: use('chevron-left')}} />
                            </button>
                            <button className="Header__btn Header__btn--right">
                                <svg className="Header__icon" dangerouslySetInnerHTML={{__html: use('chevron-right')}} />
                            </button>
                            <div className="swiper-pagination"></div>
                        </Swiper>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
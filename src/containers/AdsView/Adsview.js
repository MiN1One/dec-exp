import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';
import SwiperCore, { Scrollbar, Mousewheel } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import * as utils from '../../utilities/utilities';

import './Adsview.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

SwiperCore.use([Scrollbar, Mousewheel]);

class Adsview extends PureComponent {
    state = {
        dPopup: true
    }

    closePopup = () => {
        const categoryPath = `${this.props.match.params.category}/${this.props.match.params.subcategory}`;
        this.setState({ dPopup: false });
        this.props.history.replace('/' + categoryPath);
    }

    render() {
        const category = `/${this.props.match.params.category}`;
        const subcategory = this.props.match.params.subcategory;
        console.log(this.props.match);
        console.log(this.props.history);
        console.log(this.props.location);
        
        return (
            <React.Fragment>
                {this.state.dPopup && 
                    <header className="Adsview">
                        <div className="container">
                            <Backdrop click={this.closePopup} z={14} class="Backdrop--white"/>
                            <Swiper 
                                className="Adsview__wrapper"
                                direction="vertical"
                                slidesPerView="auto"
                                freeMode
                                scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
                                mousewheel
                                simulateTouch={false}
                                keyboard={{ enabled: true, onlyInViewport: true }}>
                                <SwiperSlide className="Adsview__content">
                                    <div className="Adsview__head">
                                        <div className="Adsview__group">
                                            <Link to="/" className="Adsview__link">Home</Link>
                                            <span className="Adsview__link">&bull;</span>
                                            <Link to={category} className="Adsview__link">{utils.capitalize(utils.parseUrl(utils.formatRouteString(category)))}</Link>
                                            <span className="Adsview__link">&bull;</span>
                                            <Link to={`${category}/${subcategory}`} className="Adsview__link">{utils.capitalize(utils.parseUrl(utils.formatRouteString(subcategory)))}</Link>
                                            <span className="Adsview__link">&bull;</span>
                                            <span className="Adsview__link">Hehe boay</span>
                                        </div>
                                        <div className="Adsview__group">
                                            <button className="Adsview__btn">
                                                Previous
                                            </button>
                                            <button className="Adsview__btn">
                                                Next
                                            </button>
                                            <button className="Adsview__btn" onClick={() => this.closePopup()}>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                    <div className="Adsview__top">
                                        <Swiper className="Adsview__left">
                                            Left
                                            <h2 className="heading heading__2 Adsview__heading">
                                            Hehe boay
                                            </h2>
                                        </Swiper>
                                        <div className="Adsview__right">
                                            Right
                                        </div>
                                    </div>
                                    <div className="Adsview__bottom">
                                        Bottom
                                    </div>
                                </SwiperSlide>
                                <div className="swiper-scrollbar"></div>
                            </Swiper>
                        </div>
                    </header>
                }
            </React.Fragment>

        )
    }
}

export default withRouter(Adsview);

/* <Swiper 
                        className="Adsview"
                        direction="vertical"
                        slidesPerView="auto"
                        freeMode
                        scrollbar={{el: '.swiper-scrollbar'}}
                        mousewheel>
                        <SwiperSlide className="Adsview__wrapper">
                            
                        </SwiperSlide>
                        <div className="swiper-scrollbar"></div>
                    </Swiper> */
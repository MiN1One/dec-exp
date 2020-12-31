import React, { Component, PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';
import SwiperCore, { Scrollbar, Mousewheel, Pagination, Navigation } from 'swiper';
import Rating from 'react-rating';
import $ from 'jquery';

import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import * as utils from '../../utilities/utilities';

import avatar from '../../assets/images/32.jpg';
import './Adview.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Tooltip from '../../components/Tooltip/Tooltip';

SwiperCore.use([Scrollbar, Mousewheel, Pagination, Navigation]);

class Adview extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            index: null,
            rating: 4.0,
            showNum: false,
            showMessageBar: false
        }
        this.categoryPath = `${this.props.match.params.category}/${this.props.match.params.subcategory}`;
        this.id = this.props.match.params.id;
        this.copyNumRef = React.createRef();
    }

    componentDidMount() {
        console.log('Initial id: ' + this.id);
        const index = this.props.data.findIndex(el => el.id === this.id);
        if (index === -1) {
            console.log('No such ad exists');
        } else this.setState({ index }, () => console.log('Find index by id: ' + this.state.index));
    }

    onShowNumber = () => {
        this.setState({ showNum: true });
    }

    closePopup = () => {
        this.props.history.replace('/' + this.categoryPath);
    }

    onShowMessageBar = () => this.setState({ showMessageBar: true });
    onHideMessageBar = () => this.setState({ showMessageBar: false });

    onCopyNum = (val) => {
        const el = document.createElement('textarea');
        el.value = val;
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        el.setSelectionRange(0, 99999);
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    onHideNum = () => this.setState({ showNum: false });
    
    onClickNext = () => {
        if (this.state.index < this.props.data.length - 1) {
            this.setState(prevState => {
                return { index: prevState.index + 1 }
            }, () => {
                this.props.history.replace(`/${this.categoryPath}/${this.props.data[this.state.index].id}`);
            });
        }
        else this.props.history.replace(`/${this.categoryPath}`);
    }
    
    onClickPrev = () => {
        if (this.state.index > 0) {
            this.setState(prevState => {
                return { index: prevState.index - 1 }
            }, () => {
                this.props.history.replace(`/${this.props.match.params.category}/${this.props.match.params.subcategory}/${this.props.data[this.state.index].id}`);
            });
        }
        else this.props.history.replace(`/${this.categoryPath}`);
    }

    render() {
        const category = `/${this.props.match.params.category}`;
        const subcategory = this.props.match.params.subcategory;
        
        const ad = this.props.data[this.state.index];
        if (!ad) return null;

        let error = null;
        const images = ad.img.map((el, i) => (
            <SwiperSlide className="Adview__figmain" key={i}>
                <img src={el} className="Adview__img" alt={el} />
            </SwiperSlide>
        ));
        
        return (
            <React.Fragment>
                <header className="Adview">
                    <Backdrop click={this.closePopup} z={14}/>
                        <Swiper 
                            className="Adview__wrapper"
                            direction="vertical"
                            slidesPerView="auto"
                            freeMode
                            scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
                            mousewheel
                            simulateTouch={false}
                            keyboard={{ enabled: true, onlyInViewport: true }}>
                            <SwiperSlide className="Adview__content">
                                <div className="container">
                                    <div className="Adview__head">
                                        <div className="Adview__group">
                                            <Link to="/" className="Adview__btn Adview__btn--rel Adview__btn--bggrey Adview__btn--routes DTool pos-rel wh-auto">Home</Link>
                                            <Link to={category} className="Adview__btn Adview__btn--rel Adview__btn--bggrey Adview__btn--routes DTool pos-rel wh-auto">{utils.capitalize(utils.parseUrl(utils.formatRouteString(category)))}</Link>
                                            <Link to={`${category}/${subcategory}`} className="Adview__btn Adview__btn--rel Adview__btn--bggrey Adview__btn--routes DTool pos-rel wh-auto">{utils.capitalize(utils.parseUrl(utils.formatRouteString(subcategory)))}</Link>
                                            <span className="Adview__btn Adview__btn--rel Adview__btn--bggrey Adview__btn--routes DTool pos-rel wh-auto">{ad.title}{error}</span>
                                        </div>
                                        <div className="Adview__group">
                                            <button className="Adview__btn Adview__btn--rel Adview__btn--bggrey Adview__btn--routes DTool pos-rel wh-auto" onClick={() => this.onClickPrev()}>
                                                <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-left')}} />
                                                Previous Ad
                                            </button>
                                            <button className="Adview__btn Adview__btn--rel Adview__btn--bggrey Adview__btn--routes DTool pos-rel wh-auto" onClick={() => this.onClickNext()}>
                                                Next Ad
                                                <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                                            </button>
                                            <button className="Adview__btn Adview__btn--rel Adview__btn--bggrey DTool pos-rel DTool DTool--bottom" onClick={() => this.closePopup()}>
                                                <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                                <Tooltip>Close</Tooltip>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="Adview__main">
                                        <div className="Adview__left">
                                            <div className="Adview__box Adview__box--main">
                                                <Swiper 
                                                    className="Adview__swiper"
                                                    slidesPerView={1}
                                                    navigation={{nextEl: '.Adview__btn-abs--right', prevEl: '.Adview__btn-abs--left', disabledClass: 'Adview__btn--disabled'}}
                                                    pagination={{ el: '.swiper-pagination' }}
                                                    simulateTouch={false}>
                                                    {images}
                                                    <button className="Adview__btn Adview__btn--abs Adview__btn--left">
                                                        <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-left')}} />
                                                    </button>
                                                    <button className="Adview__btn Adview__btn--abs Adview__btn--right">
                                                        <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                                                    </button>
                                                    <button className="Adview__btn Adview__btn--abs Adview__btn--corner DTool">
                                                        <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('maximize')}} />
                                                        <Tooltip>Full Screen</Tooltip>
                                                    </button>
                                                    <div className="swiper-pagination"></div>
                                                </Swiper>
                                                <div className="Adview__details mb-2">
                                                    <div className="Adview__group Adview__group--sb">
                                                        <div className="Adview__headingwrap">
                                                            <h1 className="heading heading__1 Adview__heading" data-premium={ad.premium}>
                                                                {ad.title}
                                                                <span className="badge ml-1">
                                                                    Promoted
                                                                </span>
                                                            </h1>
                                                        </div>
                                                        <div className="Adview__group">
                                                            <button className="Adview__btn Adview__btn--rel DTool pos-rel">
                                                                <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('share')}} />
                                                                <Tooltip>Share</Tooltip>
                                                            </button>
                                                            <button className="Adview__btn Adview__btn--rel DTool pos-rel" data-favorite={ad.favorite}>
                                                                <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('heart')}} />
                                                                <Tooltip>{!ad.favorite ? 'Add to favourites' : 'Remove from favorites'}</Tooltip>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="Adview__description">
                                                        <div className="Adview__subheading mb-1">
                                                            <p className="Adview__item Adview__item--location">{ad.location}</p>
                                                        </div>
                                                        <div>
                                                            <p className="btn btn__primary Adview__item Adview__item--price">{ad.price}</p>
                                                        </div>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="Adview__box Adview__box--description">
                                                Description
                                            </div>
                                        </div>
                                        <div className="Adview__right">
                                            <div className="Adview__box Adview__box--user">
                                                <figure className="Adview__figure Adview__item">
                                                    <img className="Adview__img" src={avatar} alt={ad.id} />
                                                </figure>
                                                <Link to="/user/john_doe" className="Adview__item Adview__item--name anim-link pos-rel">John Doe</Link>
                                                <span className="Adview__item Adview__item--titled">
                                                    <span className="Adview__title mb-5">Enterprise</span>
                                                    <Link to="/company" className="Adview__item Adview__item--lined">Intech Ltd.</Link>
                                                </span>
                                                <span className="Adview__item Adview__item--titled">
                                                    <span className="Adview__title mb-5">Reviews:</span> 
                                                    <span className="Adview__item">
                                                        <Rating 
                                                            className="Adview__item--ratingbar"
                                                            initialRating={this.state.rating} 
                                                            fractions={2} 
                                                            emptySymbol={ <svg className="rating" dangerouslySetInnerHTML={{__html: utils.useStars('star-empty')}} /> }
                                                            fullSymbol={ <svg className="rating rating--fill" dangerouslySetInnerHTML={{__html: utils.useStars('star-full')}} /> }
                                                            onChange={(r) => this.setState({ rating: r })}
                                                            />
                                                        <span>{(Math.round(this.state.rating * 100) / 100).toFixed(1)}</span>
                                                    </span>
                                                </span>
                                                <div className="Adview__item pos-rel">
                                                    <button className="Adview__btn--main btn btn__primary" onClick={() => this.onShowNumber()}>
                                                        Phone number
                                                        <svg className="Adview__icon ml-5" dangerouslySetInnerHTML={{__html: utils.use('phone-outgoing')}} />
                                                    </button>
                                                    {this.state.showNum && 
                                                        <React.Fragment>
                                                            <Backdrop z={98} click={this.onHideNum} />
                                                            <Tooltip class="Adview__numbox" click={this.onHideNum}>
                                                                <span className="Adview__number">+684 655985 2656</span>
                                                                <button className="Adview__btn Adview__btn--clip ml-1" onClick={() => this.onCopyNum('+684 655985 2656')} title="Copy number">
                                                                    <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('clipboard')}} />
                                                                </button>
                                                            </Tooltip>
                                                        </React.Fragment>
                                                    }
                                                </div>
                                                <button className="Adview__btn--main Adview__item btn btn__primary btn__primary--green" onClick={() => this.onShowMessageBar()}>
                                                    Write a message
                                                    <svg className="Adview__icon ml-5" dangerouslySetInnerHTML={{__html: utils.use('edit-2')}} />
                                                </button>
                                            </div>
                                            {this.state.showMessageBar && 
                                                <div className="Adview__box Adview__box--message">
                                                    <div className="Adview__group Adview__group--sb mb-1">
                                                        <p className="Adview__title Adview__title--big">Write your message:</p>
                                                        <button className="Adview__btn Adview__btn--sm Adview__btn--rel pos-rel" onClick={() => this.onHideMessageBar()}>
                                                            <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                                        </button>
                                                    </div>
                                                    <form className="Adview__form">
                                                        <input className="Adview__input mr-5" placeholder="Message..." type="text" />
                                                        <button className="Adview__btn wh-auto btn btn__primary btn__primary--green">
                                                            Send
                                                            <svg className="Adview__icon ml-5" dangerouslySetInnerHTML={{__html: utils.use('send')}} />
                                                        </button>
                                                    </form>
                                                </div>
                                            }
                                            <div className="Adview__box Adview__box--cards">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        <div className="swiper-scrollbar"></div>
                    </Swiper>
                </header>
            </React.Fragment>
        )
    }
}

export default withRouter(Adview);


// var rgb = getAverageRGB(document.getElementById('i'));
// document.body.style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';

// function getAverageRGB(imgEl) {

// var blockSize = 5, // only visit every 5 pixels
//     defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
//     canvas = document.createElement('canvas'),
//     context = canvas.getContext && canvas.getContext('2d'),
//     data, width, height,
//     i = -4,
//     length,
//     rgb = {r:0,g:0,b:0},
//     count = 0;
    
// if (!context) {
//     return defaultRGB;
// }

// height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
// width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

// context.drawImage(imgEl, 0, 0);

// try {
//     data = context.getImageData(0, 0, width, height);
// } catch(e) {
//     /* security error, img on diff domain */alert('x');
//     return defaultRGB;
// }

// length = data.data.length;

// while ( (i += blockSize * 4) < length ) {
//     ++count;
//     rgb.r += data.data[i];
//     rgb.g += data.data[i+1];
//     rgb.b += data.data[i+2];
// }

// // ~~ used to floor values
// rgb.r = ~~(rgb.r/count);
// rgb.g = ~~(rgb.g/count);
// rgb.b = ~~(rgb.b/count);

// return rgb;

// }


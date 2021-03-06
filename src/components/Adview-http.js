import React, { Component, PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';
import SwiperCore, { Scrollbar, Mousewheel, Pagination, Navigation } from 'swiper';
import Rating from 'react-rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Scrollbars from 'react-custom-scrollbars';
import ShadowScrollbars from './ShadowComponent';

import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

import * as utils from '../utilities/utilities';

import avatar from '../../assets/images/32.jpg';

import Backdrop from '../UI/Backdrop';
import Tooltip from '../UI/Tooltip';
import LoadingScreen from '../UI/LoadingScreen';

SwiperCore.use([Scrollbar, Mousewheel, Pagination, Navigation]);

class Adview extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            index: null,
            rating: 4.5,
            showNum: false,
            showMessageBar: false,
            rotate: null,
            message: '',
            fullScreen: false,
            swiperBegin: true,
            swiperEnd: false,
            activeSwiperImage: 0
        }
        this.categoryPath = `${this.props.match.params.category}/${this.props.match.params.subcategory}`;
        this.id = this.props.match.params.id;

        this.copyNumRef = React.createRef();
        this.mesTitleRef = React.createRef();
    }

    componentDidMount() {
        console.log('Initial id: ' + this.id);
        // const index = this.props.data.findIndex(el => el.id === this.id);
        // if (index === -1) {
        //     console.log('No such ad exists');
        // } else this.setState({ index }, () => console.log('Find index by id: ' + this.state.index));
        
    }

    componentDidUpdate() {
        this.swiper.update();
    }

    componentWillUnmount() {
        this.swiper.destroy();
    }

    onNextImage = (img) => {
        if (this.state.activeSwiperImage < img.length - 1) {
            this.setState((prevState) => {
                return { activeSwiperImage: prevState.activeSwiperImage + 1 }
            })
        } else this.setState({ activeSwiperImage: 0 });
    }

    onPrevImage = () => {
        if (this.state.activeSwiperImage > 0) {
            this.setState((prevState) => {
                return { activeSwiperImage: prevState.activeSwiperImage - 1 }
            })
        }
    }

    onGoFullScreen = () => this.setState({ fullScreen: true });
    onCloseFullScreen = () => this.setState({ fullScreen: false });

    onReachBeginSwiper = () => this.setState({ swiperBegin: true, swiperEnd: false }, () => console.log(this.state.swiperBegin, this.state.swiperEnd));
    onReachEndSwiper = () => this.setState({ swiperBegin: false, swiperEnd: true }, () => console.log(this.state.swiperBegin, this.state.swiperEnd));

    onRotate = () => {
        let i = 0;
        const degrees = [90, 180, 270, 360];
        if (this.state.rotate) {
            i = degrees.findIndex(el => el === this.state.rotate) + 1;
        }
        if (i > degrees.length - 1) i = 0;
        this.setState({ rotate: degrees[i] }, () => console.log(this.state.rotate));
    }

    onEnterMessage = (e) => {
        this.setState({ message: e.target.value });
    }

    onSendMessage = (e) => {
        e.preventDefault();
        if (this.state.message) {
            this.mesTitleRef.current.textContent = 'Your message is sent!';
            setTimeout(() => {
                this.mesTitleRef.current.textContent = 'Write your message...';
            }, 1000);
        }
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
        if (this.state.activeSwiperImage > 0) this.setState({ activeSwiperImage: 0 });
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
        if (this.state.activeSwiperImage > 0) this.setState({ activeSwiperImage: 0 });
    }

    render() {
        const category = `/${this.props.match.params.category}`;
        const subcategory = this.props.match.params.subcategory;

        let rotateDegClass = '';
        if (this.state.rotate) rotateDegClass = `adview__rotate--${this.state.rotate}`;

        const topGradientClass = ['adview__gradient adview__gradient--top'];
        const bottomGradientClass = ['adview__gradient'];
        if (this.state.swiperEnd) topGradientClass.push('adview__gradient--show');
        if (this.state.swiperBegin) bottomGradientClass.push('adview__gradient--show');
        
        const ad = this.props.data[this.state.index];
        if (!ad) return null;

        const images = ad.img.map((el, i) => (
            <SwiperSlide className={`adview__figmain ${rotateDegClass}`} key={i}>
                <LazyLoadImage 
                    width="100%"
                    height="100%"
                    className="adview__img"
                    src={el}
                    alt={i}
                    />
            </SwiperSlide>
        ));

        const adsFrom = this.props.data.map((el, i) => {
            return (
                <Link to="/" className="adview__card adview__box adview__box--card" key={i}>
                    <figure className="adview__figure adview__figure--card mr-2">
                        <LazyLoadImage 
                            className="adview__img adview__img--card"
                            src={el.img[0]}
                            width="100%"
                            height="100%"
                            />
                    </figure>
                    <div className="adview__group adview__group--col w-max afs">
                        <span className="adview__subheading adview__subheading--card mb-1">{el.title}</span>
                        <span className="adview__title mb-5">{el.date}</span>
                        <span className="adview__title mb-5">{el.location}</span>
                        <span className="price-tag">{el.price}</span>
                    </div>
                </Link>
            )
        })
        
        return (
            <React.Fragment>
                <LoadingScreen />
                <header className="adview">
                    <Backdrop click={this.closePopup} z={14}/>
                        {this.state.fullScreen && 
                            <div className="adview__fullscreen">
                                <div className="container">
                                    <Backdrop z={1} click={this.onCloseFullScreen} />
                                    <div className="adview__fullscreenwrap">
                                        <figure className="adview__figure adview__figure--full">
                                            <img src={ad.img[this.state.activeSwiperImage]} alt={ad.title} className="adview__img adview__img--full" />
                                        </figure>
                                    </div>
                                </div>
                                <button className="adview__btn adview__btn--abs adview__btn--grey adview__btn--left" onClick={() => this.onPrevImage()}>
                                    <svg className="adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-left')}} />
                                </button>
                                <button className="adview__btn adview__btn--abs adview__btn--grey adview__btn--right" onClick={() => this.onNextImage(ad.img)}>
                                    <svg className="adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                                </button>
                            </div>
                        }
                        <Swiper 
                            className="adview__wrapper"
                            direction="vertical"
                            slidesPerView="auto"
                            freeMode
                            scrollbar={{ el: '#scrollbar', draggable: true, snapOnRelease: false }}
                            mousewheel
                            simulateTouch={false}
                            keyboard={{ enabled: true, onlyInViewport: true }}>
                            <SwiperSlide className="adview__content">
                                <div className="container">
                                    <div className="adview__head">
                                        <div className="adview__group">
                                            <Link to="/" className="adview__btn adview__btn--rel adview__btn--bggrey adview__btn--routes DTool pos-rel wh-auto">Home</Link>
                                            <Link to={category} className="adview__btn adview__btn--rel adview__btn--bggrey adview__btn--routes DTool pos-rel wh-auto">{utils.capitalize(utils.parseUrl(utils.formatRouteString(category)))}</Link>
                                            <Link to={`${category}/${subcategory}`} className="adview__btn adview__btn--rel adview__btn--bggrey adview__btn--routes DTool pos-rel wh-auto">{utils.capitalize(utils.parseUrl(utils.formatRouteString(subcategory)))}</Link>
                                            <span className="adview__btn adview__btn--rel adview__btn--bggrey adview__btn--routes DTool pos-rel wh-auto">{ad.title}</span>
                                        </div>
                                        <div className="adview__group">
                                            <button className="adview__btn adview__btn--rel adview__btn--bggrey adview__btn--routes DTool pos-rel wh-auto" onClick={() => this.onClickPrev()}>
                                                <svg className="adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-left')}} />
                                                Previous Ad
                                            </button>
                                            <button className="adview__btn adview__btn--rel adview__btn--bggrey adview__btn--routes DTool pos-rel wh-auto" onClick={() => this.onClickNext()}>
                                                Next Ad
                                                <svg className="adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                                            </button>
                                            <button className="adview__btn adview__btn--rel adview__btn--bggrey DTool pos-rel DTool DTool--bottom no-transition" onClick={() => this.closePopup()}>
                                                <svg className="adview__icon" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                                <Tooltip>Close</Tooltip>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="adview__main">
                                        <div className="adview__left">
                                            <div className="adview__box adview__box--main">
                                                <Swiper 
                                                    className="adview__swiper"
                                                    slidesPerView={1}
                                                    navigation={{nextEl: '#right', prevEl: '#left', disabledClass: 'adview__btn--disabled'}}
                                                    pagination={{ el: '.swiper-pagination' }}
                                                    onSwiper={(sw) => this.swiper = sw}
                                                    simulateTouch={false}
                                                    preloadImages
                                                    updateOnImagesReady
                                                    onImagesReady={() => this.swiper.update()}
                                                    onSlideChange={(sw) => this.setState({ activeSwiperImage: sw.activeIndex })}
                                                    preventInteractionOnTransition={true}>
                                                    {images}
                                                    <button className="adview__btn adview__btn--abs adview__btn--left" id="left">
                                                        <svg className="adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-left')}} />
                                                    </button>
                                                    <button className="adview__btn adview__btn--abs adview__btn--right" id="right">
                                                        <svg className="adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                                                    </button>
                                                    <div className="adview__group adview__group--abs">
                                                        <button className="adview__btn DTool adview__btn--rel adview__btn--abs adview__btn--corner mr-2 pos-rel no-transition" onClick={() => this.onRotate()}>
                                                            <svg className="adview__icon" dangerouslySetInnerHTML={{__html: utils.use('rotate-cw')}} />
                                                            <Tooltip>Rotate the photo</Tooltip>
                                                        </button>
                                                        <button className="adview__btn DTool adview__btn--rel adview__btn--abs adview__btn--corner pos-rel no-transition" onClick={() => this.onGoFullScreen()}>
                                                            <svg className="adview__icon" dangerouslySetInnerHTML={{__html: utils.use('maximize')}} />
                                                            <Tooltip>Full Screen</Tooltip>
                                                        </button>
                                                    </div>
                                                    <div className="swiper-pagination"></div>
                                                </Swiper>
                                                <div className="adview__details mb-2">
                                                    <div className="adview__group sb">
                                                        <div className="adview__headingwrap">
                                                            <h1 className="heading heading__1 adview__heading" data-premium={ad.premium}>
                                                                {ad.title}
                                                                <span className="badge ml-1">
                                                                    Promoted
                                                                </span>
                                                            </h1>
                                                            <div className="adview__subheading mb-1">
                                                                <p className="adview__item adview__item--location">{ad.date}, {ad.location}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="adview__group sb afe">
                                                        <div>
                                                            <p className="price-tag adview__item adview__item--price">{ad.price}</p>
                                                        </div>
                                                        <div className="adview__group">
                                                            <button className="adview__btn adview__btn--rel DTool pos-rel no-transition">
                                                                <svg className="adview__icon" dangerouslySetInnerHTML={{__html: utils.use('share')}} />
                                                                <Tooltip>Share</Tooltip>
                                                            </button>
                                                            <button className="adview__btn adview__btn--rel DTool pos-rel no-transition" data-favorite={ad.favorite}>
                                                                <svg className="adview__icon" dangerouslySetInnerHTML={{__html: utils.use('heart')}} />
                                                                <Tooltip>{!ad.favorite ? 'Add to favourites' : 'Remove from favorites'}</Tooltip>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="adview__box adview__box--description">
                                                <div className="adview__subhead sb mb-2">
                                                    <h2 className="heading heading__2 adview__subheading">Description</h2>
                                                    <p className="adview__title">Number of views: 153&nbsp;&nbsp;|&nbsp;&nbsp;Edited at 13:16</p>
                                                </div>
                                                <div className="adview__group adview__group--col afs mb-1">
                                                    <p className="adview__title adview__title--mid mb-1">Secifications:</p>
                                                    <ul className="adview__group adview__group--wrap">
                                                        <li className="tag tag__types mb-1">Camera: 100MP</li>
                                                        <li className="tag tag__types mb-1">CPU: Snapdragon 865</li>
                                                        <li className="tag tag__types mb-1">Battery: 5000mAh</li>
                                                        <li className="tag tag__types mb-1">Condition: New</li>
                                                        <li className="tag tag__types mb-1">Color: Grey</li>
                                                        <li className="tag tag__types mb-1">ROM: 128GB</li>
                                                        <li className="tag tag__types mb-1">RAM: 8GB</li>
                                                    </ul>
                                                </div>
                                                <div className="adview__group adview__group--col afs">
                                                    <p className="adview__title adview__title--mid mb-1">Personalized description:</p>
                                                    <p className="adview__text">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra odio vel risus consequat feugiat. Vivamus nec lorem auctor felis suscipit ullamcorper sit amet non orci. Sed ornare justo eu arcu convallis venenatis. Sed luctus maximus viverra. Nullam sit amet urna fermentum, dignissim urna semper, auctor mi. Mauris pulvinar porta augue, sodales ultricies urna placerat vitae. 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="adview__right">
                                            <div className="adview__box adview__box--user">
                                                <figure className="adview__figure adview__item">
                                                    <img className="adview__img" src={avatar} alt={ad.id} />
                                                </figure>
                                                <Link to="/user/john_doe" className="adview__item adview__item--name anim-link pos-rel no-transition">John Doe</Link>
                                                <span className="adview__item adview__item--titled">
                                                    <span className="adview__title mb-5">Enterprise</span>
                                                    <Link to="/company" className="adview__item adview__item--lined">Intech Ltd.</Link>
                                                </span>
                                                <span className="adview__item adview__item--titled">
                                                    <span className="adview__title mb-5">Reviews:</span> 
                                                    <span className="adview__item">
                                                        <Rating 
                                                            className="adview__item--ratingbar"
                                                            initialRating={this.state.rating} 
                                                            fractions={2} 
                                                            emptySymbol={ <svg className="rating" dangerouslySetInnerHTML={{__html: utils.useStars('star-empty')}} /> }
                                                            fullSymbol={ <svg className="rating rating--fill" dangerouslySetInnerHTML={{__html: utils.useStars('star-full')}} /> }
                                                            onChange={(r) => this.setState({ rating: r })}
                                                            />
                                                        <span>{(Math.round(this.state.rating * 100) / 100).toFixed(1)}</span>
                                                    </span>
                                                </span>
                                                <div className="adview__item pos-rel no-transition">
                                                    <button className="adview__btn--main btn btn__primary" onClick={() => this.onShowNumber()}>
                                                        Phone number
                                                        <svg className="adview__icon ml-5" dangerouslySetInnerHTML={{__html: utils.use('phone-outgoing')}} />
                                                    </button>
                                                    {this.state.showNum && 
                                                        <React.Fragment>
                                                            <Backdrop z={98} click={this.onHideNum} />
                                                            <Tooltip class="adview__numbox" click={this.onHideNum}>
                                                                <span className="adview__number">+684 655985 2656</span>
                                                                <button className="adview__btn adview__btn--clip ml-1" onClick={() => this.onCopyNum('+684 655985 2656')} title="Copy number">
                                                                    <svg className="adview__icon" dangerouslySetInnerHTML={{__html: utils.use('clipboard')}} />
                                                                </button>
                                                            </Tooltip>
                                                        </React.Fragment>
                                                    }
                                                </div>
                                                <button className="adview__btn--main adview__item btn btn__secondary" onClick={() => this.onShowMessageBar()}>
                                                    Write a message
                                                    <svg className="adview__icon icon ml-5" dangerouslySetInnerHTML={{__html: utils.use('edit-2')}} />
                                                </button>
                                            </div>
                                            {this.state.showMessageBar && 
                                                <div className="adview__box adview__box--message">
                                                    <div className="adview__group adview__group--sb mb-1">
                                                        <p className="adview__title adview__title--big" ref={this.mesTitleRef}>Write your message:</p>
                                                        <button className="adview__btn adview__btn--sm adview__btn--rel pos-rel" onClick={() => this.onHideMessageBar()}>
                                                            <svg className="adview__icon" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                                        </button>
                                                    </div>
                                                    <form className="adview__form" onSubmit={(e) => this.onSendMessage(e)}>
                                                        <textarea autoFocus required className="adview__input mr-5" placeholder="Message..." type="text" onChange={(e) => this.onEnterMessage(e)} value={this.state.message} />
                                                        <button className="adview__btn wh-auto btn btn__primary btn__primary--outline">
                                                            Send
                                                            <svg className="adview__icon icon ml-5" dangerouslySetInnerHTML={{__html: utils.use('send')}} />
                                                        </button>
                                                    </form>
                                                </div>
                                            }
                                            <Swiper
                                                className="adview__cardscontainer"
                                                direction="vertical"
                                                slidesPerView="auto"
                                                freeMode
                                                mousewheel
                                                nested
                                                simulateTouch={false}
                                                keyboard={{ enabled: true, onlyInViewport: true }}
                                                onReachBeginning={() => this.onReachBeginSwiper()}
                                                onReachEnd={() => this.onReachEndSwiper()}
                                                scrollbar={{ el: '#scrollbar-2', draggable: true, snapOnRelease: false }}
                                                >
                                                <span className={topGradientClass.join(' ')}></span>
                                                <span className={bottomGradientClass.join(' ')}></span>
                                                <SwiperSlide className="adview__cards">
                                                    {adsFrom}
                                                    <button className="adview__card adview__card--btn">See all</button>
                                                </SwiperSlide>
                                                <div className="swiper-scrollbar" id="scrollbar-2"></div>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        <div className="swiper-scrollbar" id="scrollbar"></div>
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
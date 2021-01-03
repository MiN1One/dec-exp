import React, { Component, PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';
import SwiperCore, { Scrollbar, Mousewheel, Pagination, Navigation } from 'swiper';
import Rating from 'react-rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Scrollbars from 'react-custom-scrollbars';
import ShadowScrollbars from '../../components/ShadowComponent/ShadowComponent';

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
        const index = this.props.data.findIndex(el => el.id === this.id);
        if (index === -1) {
            console.log('No such ad exists');
        } else this.setState({ index }, () => console.log('Find index by id: ' + this.state.index));
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
        const degrees = [90, 180, 360];
        if (this.state.rotate) {
            i = degrees.findIndex(el => el === this.state.rotate) + 1;
        }
        if (i > degrees.length - 1) i = 0;
        this.setState({ rotate: degrees[i] });
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
        if (this.state.rotate) rotateDegClass = `Adview__rotate--${this.state.rotate}`;

        const topGradientClass = ['Adview__gradient Adview__gradient--top'];
        const bottomGradientClass = ['Adview__gradient'];
        if (this.state.swiperEnd) topGradientClass.push('Adview__gradient--show');
        if (this.state.swiperBegin) bottomGradientClass.push('Adview__gradient--show');
        
        const ad = this.props.data[this.state.index];
        if (!ad) return null;

        const images = ad.img.map((el, i) => (
            <SwiperSlide className={`Adview__figmain ${rotateDegClass}`} key={i}>
                <LazyLoadImage 
                    width="100%"
                    height="100%"
                    className="Adview__img"
                    src={el}
                    alt={i}
                    />
            </SwiperSlide>
        ));

        const adsFrom = this.props.data.map((el, i) => {
            return (
                <Link to="/" className="Adview__card Adview__box Adview__box--card" key={i}>
                    <figure className="Adview__figure Adview__figure--card mr-2">
                        <LazyLoadImage 
                            className="Adview__img Adview__img--card"
                            src={el.img[0]}
                            width="100%"
                            height="100%"
                            />
                    </figure>
                    <div className="Adview__group Adview__group--col w-max afs">
                        <span className="Adview__subheading Adview__subheading--card mb-1">{el.title}</span>
                        <span className="Adview__title mb-5">{el.date}</span>
                        <span className="Adview__title mb-5">{el.location}</span>
                        <span className="price-tag">{el.price}</span>
                    </div>
                </Link>
            )
        })
        
        return (
            <React.Fragment>
                <header className="Adview">
                    <Backdrop click={this.closePopup} z={14}/>
                        {this.state.fullScreen && 
                            <div className="Adview__fullscreen">
                                <div className="container">
                                    <Backdrop z={1} click={this.onCloseFullScreen} />
                                    <div className="Adview__fullscreenwrap">
                                        <figure className="Adview__figure Adview__figure--full">
                                            <img src={ad.img[this.state.activeSwiperImage]} alt={ad.title} className="Adview__img Adview__img--full" />
                                        </figure>
                                    </div>
                                </div>
                                <button className="Adview__btn Adview__btn--abs Adview__btn--grey Adview__btn--left" onClick={() => this.onPrevImage()}>
                                    <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-left')}} />
                                </button>
                                <button className="Adview__btn Adview__btn--abs Adview__btn--grey Adview__btn--right" onClick={() => this.onNextImage(ad.img)}>
                                    <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                                </button>
                            </div>
                        }
                        <Swiper 
                            className="Adview__wrapper"
                            direction="vertical"
                            slidesPerView="auto"
                            freeMode
                            scrollbar={{ el: '#scrollbar', draggable: true, snapOnRelease: false }}
                            onSetTransition={(sw, tr) => console.log(tr)}
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
                                            <span className="Adview__btn Adview__btn--rel Adview__btn--bggrey Adview__btn--routes DTool pos-rel wh-auto">{ad.title}</span>
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
                                            <button className="Adview__btn Adview__btn--rel Adview__btn--bggrey DTool pos-rel DTool DTool--bottom no-transition" onClick={() => this.closePopup()}>
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
                                                    navigation={{nextEl: '#right', prevEl: '#left', disabledClass: 'Adview__btn--disabled'}}
                                                    pagination={{ el: '.swiper-pagination' }}
                                                    onSwiper={(sw) => this.swiper = sw}
                                                    simulateTouch={false}
                                                    preloadImages
                                                    updateOnImagesReady
                                                    onImagesReady={() => this.swiper.update()}
                                                    onSlideChange={(sw) => this.setState({ activeSwiperImage: sw.activeIndex })}
                                                    preventInteractionOnTransition={true}>
                                                    {images}
                                                    <button className="Adview__btn Adview__btn--abs Adview__btn--left" id="left">
                                                        <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-left')}} />
                                                    </button>
                                                    <button className="Adview__btn Adview__btn--abs Adview__btn--right" id="right">
                                                        <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                                                    </button>
                                                    <div className="Adview__group Adview__group--abs">
                                                        <button className="Adview__btn DTool Adview__btn--rel Adview__btn--abs Adview__btn--corner mr-2 pos-rel no-transition" onClick={() => this.onRotate()}>
                                                            <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('rotate-cw')}} />
                                                            <Tooltip>Rotate the photo</Tooltip>
                                                        </button>
                                                        <button className="Adview__btn DTool Adview__btn--rel Adview__btn--abs Adview__btn--corner pos-rel no-transition" onClick={() => this.onGoFullScreen()}>
                                                            <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('maximize')}} />
                                                            <Tooltip>Full Screen</Tooltip>
                                                        </button>
                                                    </div>
                                                    <div className="swiper-pagination"></div>
                                                </Swiper>
                                                <div className="Adview__details mb-2">
                                                    <div className="Adview__group sb">
                                                        <div className="Adview__headingwrap">
                                                            <h1 className="heading heading__1 Adview__heading" data-premium={ad.premium}>
                                                                {ad.title}
                                                                <span className="badge ml-1">
                                                                    Promoted
                                                                </span>
                                                            </h1>
                                                            <div className="Adview__subheading mb-1">
                                                                <p className="Adview__item Adview__item--location">{ad.date}, {ad.location}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="Adview__group sb afe">
                                                        <div>
                                                            <p className="price-tag Adview__item Adview__item--price">{ad.price}</p>
                                                        </div>
                                                        <div className="Adview__group">
                                                            <button className="Adview__btn Adview__btn--rel DTool pos-rel no-transition">
                                                                <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('share')}} />
                                                                <Tooltip>Share</Tooltip>
                                                            </button>
                                                            <button className="Adview__btn Adview__btn--rel DTool pos-rel no-transition" data-favorite={ad.favorite}>
                                                                <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('heart')}} />
                                                                <Tooltip>{!ad.favorite ? 'Add to favourites' : 'Remove from favorites'}</Tooltip>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="Adview__box Adview__box--description">
                                                <div className="Adview__subhead sb mb-2">
                                                    <h2 className="heading heading__2 Adview__subheading">Description</h2>
                                                    <p className="Adview__title">Number of views: 153&nbsp;&nbsp;|&nbsp;&nbsp;Edited at 13:16</p>
                                                </div>
                                                <div className="Adview__group Adview__group--col afs mb-1">
                                                    <p className="Adview__title Adview__title--mid mb-1">Secifications:</p>
                                                    <ul className="Adview__group Adview__group--wrap">
                                                        <li className="tag tag__types mb-1">Camera: 100MP</li>
                                                        <li className="tag tag__types mb-1">CPU: Snapdragon 865</li>
                                                        <li className="tag tag__types mb-1">Battery: 5000mAh</li>
                                                        <li className="tag tag__types mb-1">Condition: New</li>
                                                        <li className="tag tag__types mb-1">Color: Grey</li>
                                                        <li className="tag tag__types mb-1">ROM: 128GB</li>
                                                        <li className="tag tag__types mb-1">RAM: 8GB</li>
                                                    </ul>
                                                </div>
                                                <div className="Adview__group Adview__group--col afs">
                                                    <p className="Adview__title Adview__title--mid mb-1">Personalized description:</p>
                                                    <p className="Adview__text">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra odio vel risus consequat feugiat. Vivamus nec lorem auctor felis suscipit ullamcorper sit amet non orci. Sed ornare justo eu arcu convallis venenatis. Sed luctus maximus viverra. Nullam sit amet urna fermentum, dignissim urna semper, auctor mi. Mauris pulvinar porta augue, sodales ultricies urna placerat vitae. 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="Adview__right">
                                            <div className="Adview__box Adview__box--user">
                                                <figure className="Adview__figure Adview__item">
                                                    <img className="Adview__img" src={avatar} alt={ad.id} />
                                                </figure>
                                                <Link to="/user/john_doe" className="Adview__item Adview__item--name anim-link pos-rel no-transition">John Doe</Link>
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
                                                <div className="Adview__item pos-rel no-transition">
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
                                                <button className="Adview__btn--main Adview__item btn btn__secondary" onClick={() => this.onShowMessageBar()}>
                                                    Write a message
                                                    <svg className="Adview__icon icon ml-5" dangerouslySetInnerHTML={{__html: utils.use('edit-2')}} />
                                                </button>
                                            </div>
                                            {this.state.showMessageBar && 
                                                <div className="Adview__box Adview__box--message">
                                                    <div className="Adview__group Adview__group--sb mb-1">
                                                        <p className="Adview__title Adview__title--big" ref={this.mesTitleRef}>Write your message:</p>
                                                        <button className="Adview__btn Adview__btn--sm Adview__btn--rel pos-rel" onClick={() => this.onHideMessageBar()}>
                                                            <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                                        </button>
                                                    </div>
                                                    <form className="Adview__form" onSubmit={(e) => this.onSendMessage(e)}>
                                                        <textarea autoFocus required className="Adview__input mr-5" placeholder="Message..." type="text" onChange={(e) => this.onEnterMessage(e)} value={this.state.message} />
                                                        <button className="Adview__btn wh-auto btn btn__primary btn__primary--outline">
                                                            Send
                                                            <svg className="Adview__icon icon ml-5" dangerouslySetInnerHTML={{__html: utils.use('send')}} />
                                                        </button>
                                                    </form>
                                                </div>
                                            }
                                            <Swiper
                                                className="Adview__cardscontainer"
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
                                                <SwiperSlide className="Adview__cards">
                                                    {adsFrom}
                                                    <button className="Adview__card Adview__card--btn">See all</button>
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
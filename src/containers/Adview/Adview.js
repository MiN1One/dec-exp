import React, { Component, PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';
import SwiperCore, { Scrollbar, Mousewheel, Pagination, Navigation } from 'swiper';

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
            index: null
        }
        this.categoryPath = `${this.props.match.params.category}/${this.props.match.params.subcategory}`;
        this.id = this.props.match.params.id;
    }

    componentDidMount() {
        console.log('Initial id: ' + this.state.id);
        const index = this.props.data.findIndex(el => el.id === this.id);
        if (index === -1) {
            console.log('No such ad exists');
        } else this.setState({ index }, () => console.log('Find index by id: ' + this.state.index));
    }
    
    shouldComponentUpdate(prevProps, prevState) {
        return prevState.index !== this.state.index;
    }

    closePopup = () => {
        this.props.history.replace('/' + this.categoryPath);
    }
    
    onClickNext = () => {
        // console.log('Length: ' + this.props.data.length);

        // console.log('Index before setting state: ' + this.state.index);
        
        if (this.state.index < this.props.data.length - 1) {
            this.setState(prevState => {
                return { index: prevState.index + 1 }
            }, () => {
                // console.log('Index after setting state: ' + this.state.index);
                this.props.history.replace(`/${this.categoryPath}/${this.props.data[this.state.index].id}`)
            });
        }
        else this.props.history.replace(`/${this.categoryPath}`);
    }
    
    onClickPrev = () => {
        if (this.state.index > 0) {
            this.setState(prevState => {
                return { index: prevState.index - 1 }
            }, () => {
                this.props.history.replace(`/${this.props.match.params.category}/${this.props.match.params.subcategory}/${this.props.data[this.state.index].id}`)
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
                            <div className="Adview__head">
                                <div className="Adview__group">
                                    <Link to="/" className="Adview__btn Adview__btn--rel Adview__btn--bggrey Adview__btn--routes DTool pos-rel wh-auto">Home</Link>
                                    <Link to={category} className="Adview__btn Adview__btn--rel Adview__btn--bggrey Adview__btn--routes DTool pos-rel wh-auto">{utils.capitalize(utils.parseUrl(utils.formatRouteString(category)))}</Link>
                                    <Link to={`${category}/${subcategory}`} className="Adview__btn Adview__btn--rel Adview__btn--bggrey Adview__btn--routes DTool pos-rel wh-auto">{utils.capitalize(utils.parseUrl(utils.formatRouteString(subcategory)))}</Link>
                                    <span className="Adview__btn Adview__btn--rel Adview__btn--bggrey Adview__btn--routes DTool pos-rel wh-auto">{ad.title}{error}</span>
                                </div>
                                <div className="Adview__group">
                                    <button className="Adview__btn Adview__btn--rel Adview__btn--bggrey DTool pos-rel DTool DTool--bottom" onClick={() => this.onClickPrev()}>
                                        <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-left')}} />
                                        <Tooltip>Previous Ad</Tooltip>
                                    </button>
                                    <button className="Adview__btn Adview__btn--rel Adview__btn--bggrey DTool pos-rel DTool DTool--bottom" onClick={() => this.onClickNext()}>
                                        <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                                        <Tooltip>Next Ad</Tooltip>
                                    </button>
                                    <button className="Adview__btn Adview__btn--rel Adview__btn--bggrey DTool pos-rel DTool DTool--bottom" onClick={() => this.closePopup()}>
                                        <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                        <Tooltip>Close</Tooltip>
                                    </button>
                                </div>
                            </div>
                            <div className="Adview__main">
                                <div className="Adview__left">
                                    <Swiper 
                                        className="Adview__swiper"
                                        slidesPerView={1}
                                        navigation={{nextEl: '.Adview__btn-abs--right', prevEl: '.Adview__btn-abs--left', disabledClass: 'Adview__btn--disabled'}}
                                        pagination={{ el: '.swiper_pagination' }}
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
                                                    {/* <span className="badge__bull">&nbsp;&bull;&nbsp;</span> */}
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
                                                <button className="Adview__btn Adview__btn--rel DTool pos-rel">
                                                    <svg className="Adview__icon" dangerouslySetInnerHTML={{__html: utils.use('heart')}} />
                                                    <Tooltip>Add to favourites</Tooltip>
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
                                    {/* <div className="Adsview__details" style={{height: '20rem'}}></div> */}
                                </div>
                                <div className="Adview__right">
                                    <figure className="Adview__figure Adview__item">
                                        <img className="Adview__img" src={avatar} alt={ad.id} />
                                    </figure>
                                    <span className="Adview__item Adview__item--name">John Doe</span>
                                    <span className="Adview__item">Comapny</span>
                                    <span className="Adview__item">Rating</span>
                                    <button className="Adview__btn--main Adview__item btn btn__primary">
                                        Phone number
                                        <svg className="Adview__icon ml-5" dangerouslySetInnerHTML={{__html: utils.use('phone-outgoing')}} />
                                    </button>
                                    <button className="Adview__btn--main Adview__item btn btn__primary btn__primary--green">
                                        Write a message
                                        <svg className="Adview__icon ml-5" dangerouslySetInnerHTML={{__html: utils.use('edit-2')}} />
                                    </button>
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

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Rating from '@material-ui/lab/Rating';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
// import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
// import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
// import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
// import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// const StyledRating = withStyles({
//   iconFilled: {
//     color: '#ff6d75',
//   },
//   iconHover: {
//     color: '#ff3d47',
//   },
// })(Rating);

// const customIcons = {
//   1: {
//     icon: <SentimentVeryDissatisfiedIcon />,
//     label: 'Very Dissatisfied',
//   },
//   2: {
//     icon: <SentimentDissatisfiedIcon />,
//     label: 'Dissatisfied',
//   },
//   3: {
//     icon: <SentimentSatisfiedIcon />,
//     label: 'Neutral',
//   },
//   4: {
//     icon: <SentimentSatisfiedAltIcon />,
//     label: 'Satisfied',
//   },
//   5: {
//     icon: <SentimentVerySatisfiedIcon />,
//     label: 'Very Satisfied',
//   },
// };

// function IconContainer(props) {
//   const { value, ...other } = props;
//   return <span {...other}>{customIcons[value].icon}</span>;
// }

// IconContainer.propTypes = {
//   value: PropTypes.number.isRequired,
// };

// export default function CustomizedRatings() {
//   return (
//     <div>
//       <Box component="fieldset" mb={3} borderColor="transparent">
//         <Typography component="legend">Custom empty icon</Typography>
//         <Rating
//           name="customized-empty"
//           defaultValue={2}
//           precision={0.5}
//           emptyIcon={<StarBorderIcon fontSize="inherit" />}
//         />
//       </Box>
//       <Box component="fieldset" mb={3} borderColor="transparent">
//         <Typography component="legend">Custom icon and color</Typography>
//         <StyledRating
//           name="customized-color"
//           defaultValue={2}
//           getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
//           precision={0.5}
//           icon={<FavoriteIcon fontSize="inherit" />}
//         />
//       </Box>
//       <Box component="fieldset" mb={3} borderColor="transparent">
//         <Typography component="legend">10 stars</Typography>
//         <Rating name="customized-10" defaultValue={2} max={10} />
//       </Box>
//       <Box component="fieldset" mb={3} borderColor="transparent">
//         <Typography component="legend">Custom icon set</Typography>
//         <Rating
//           name="customized-icons"
//           defaultValue={2}
//           getLabelText={(value) => customIcons[value].label}
//           IconContainerComponent={IconContainer}
//         />
//       </Box>
//     </div>
//   );
// }

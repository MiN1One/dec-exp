import { Component } from 'react';
import { connect } from 'react-redux';

import Dropdown from '../Dropdown/Dropdown';
import * as actions from '../../store/actions';

import Logo from '../Logo/Logo';
import './Navigation.scss';
import sprite from '../../assets/icons/sprite.svg';

const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

class Navigation extends Component {
    state = {
        // navItems: {
        //     user: {
        //         icon: 'user',
        //         val: 'My profile',
        //         addIco: 'arrow-down'
        //     },
        //     favourites: {
        //         icon: '',
        //         val: ''
        //     },
        //     advert: {
        //         icon: '',
        //         val: ''
        //     }
        // },
        // bgColor: '#fff',
        // dropItems: {
        //     profile: [
        //         'ads',
        //         'messages',
        //         'settings',
        //         'payments'
        //     ],
        //     favourites: ['ads', 'searches'],
        // }
        locations: ['Andijan', 'Bukhara', 'Jizzakh', 'Kashkadarya', 'Navoi', 'Namangan', 'Samarkand', 'Surkhandarya', 'Sirdarya', 'Tashkent region', 'Fergana', 'Khorezm', 'Karakalpakistan', 'Tashkent'],
        langs: ['O\'zbekcha', 'English', 'Русский'],
        showCats: false
    }

    showCats = () => this.setState((prevState) => {
       return { showCats: !prevState };
    });

    render() {
        const langItems = this.state.langs.map((el, i) => {
            return (
                <div className="Dropdown__item" key={i} onClick={() => this.props.onChangeLanguage(el)}>
                    <div className="Dropdown__link">{el}</div>
                </div>
            );
        });

        const locations = this.state.locations.map((el, i) => {
            return (
                <div className="Dropdown__item" key={i} onClick={() => this.props.onChangeLocation(el)}>
                    <div className="Dropdown__link">{el}</div>
                </div>
            );
        });
        

        return (
            <header className="Navigation">
                <div className="container">
                    <nav role="navigation" className="Navigation__wrapper">
                        <div className="Navigation__list">
                            <Logo class="Navigation__item" />

                            <div className="Navigation__item Navigation__item--loc">
                                <svg className="Navigation__icon" dangerouslySetInnerHTML={{__html: use('globe')}} />
                                <span className="Navigation__title">{this.props.lang}</span>
                                <svg className="Navigation__icon Navigation__icon--arrow" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                                <Dropdown class="Dropdown--left-fix">
                                    <p className="Dropdown__title">Language:</p>
                                    {langItems}
                                </Dropdown>
                            </div>

                            {/* <div className="Navigation__item Navigation__item--loc">
                                <svg className="Navigation__icon" dangerouslySetInnerHTML={{__html: use('map-pin')}} />
                                <span className="Navigation__title">{this.props.location}</span>
                                <svg className="Navigation__icon Navigation__icon--arrow" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                                <Dropdown class="Dropdown--small Dropdown--left-fix">
                                    <div className="Dropdown__wrapper">
                                        <p className="Dropdown__title">Location:</p>
                                        {locations}
                                    </div>
                                </Dropdown>
                            </div> */}
                        </div>

                        {/* ########################################################################################## */}

                        <div className="Navigation__list">
                            <div className="Navigation__item">
                                <a href="#profile" className="Navigation__link">
                                    <svg className="Navigation__icon Navigation__icon--arrow" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                                    <span className="Navigation__title  Navigation__title--user">My profile</span>
                                    <div className="Navigation__iconbox">
                                        <svg className="Navigation__icon Navigation__icon--white" dangerouslySetInnerHTML={{__html: use('user')}} />
                                    </div>
                                    <Dropdown>
                                        <p className="Dropdown__title">Profile:</p>
                                        <ul className="Dropdown__list">
                                            <li className="Dropdown__item">
                                                <a href="#" className="Dropdown__link">
                                                    Ads
                                                </a>
                                            </li>
                                            <li className="Dropdown__item">
                                                <a href="#" className="Dropdown__link Dropdown__link--counter">
                                                    Messages
                                                    <span>3</span>
                                                </a>
                                            </li>
                                            <li className="Dropdown__item">
                                                <a href="#settings" className="Dropdown__link">
                                                    Settings
                                                </a>
                                            </li>
                                            <li className="Dropdown__item">
                                                <a href="#" className="Dropdown__link">
                                                    Payments
                                                </a>
                                            </li>
                                        </ul>
                                        <p className="Dropdown__title">Favourites:</p>
                                        <ul className="Dropdown__list">
                                            <li className="Dropdown__item">
                                                <a href="#" className="Dropdown__link">
                                                    Ads
                                                    <span>1</span>
                                                </a>
                                            </li>
                                            <li className="Dropdown__item">
                                                <a href="#" className="Dropdown__link">
                                                    Searches
                                                </a>
                                            </li>
                                        </ul>
                                        <button className="Dropdown__btn Dropdown__btn--grey">Log out</button>
                                    </Dropdown>
                                </a>
                            </div>

                            <button className="btn btn__primary Navigation__btn">
                                <span className="Navigation__title Navigation__title--white">Advert</span>
                                <svg className="Navigation__icon Navigation__icon--white Navigation__icon--menu" dangerouslySetInnerHTML={{__html: use('plus')}} />
                            </button>
                            
                            {/* <button className="btn btn__primary btn__primary--yellow Navigation__btn" onClick={() => this.showCats()}>
                                <span className="Navigation__title Navigation__title--white">Categories</span>
                                <svg className="Navigation__icon Navigation__icon--white Navigation__icon--menu" dangerouslySetInnerHTML={{__html: use('menu')}} />
                            </button> */}
                        </div>
                    </nav>
                </div>

                {/* ########################################################################################## */}

                {/* <div className="Navigation__bottom">
                    <div className="container">
                        <div className="Navigation__bottomwrap">
                            <div className="Navigation__list">
                                
                            </div>
                            <form className="Navigation__form">
                                <input type="text" className="Navigation__input" placeholder="Search ..."/>
                                <button className="Navigation__formbtn">
                                    
                                </button>
                            </form>
                            <div className="Navigation__list">
                                
                            </div>
                        </div>
                    </div>
                </div> */}
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.localization.lang,
        location: state.localization.location
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeLanguage: (lang) => dispatch(actions.changeLanguage(lang)),
        onChangeLocation: (loc) => dispatch(actions.changeLocation(loc))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
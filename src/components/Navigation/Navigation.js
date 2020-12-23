import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../Dropdown/Dropdown';
import Language from '../Language/Language';

import Logo from '../Logo/Logo';
import './Navigation.scss';
import sprite from '../../assets/icons/sprite.svg';

const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

class Navigation extends Component {
    state = {
        locations: ['Andijan', 'Bukhara', 'Jizzakh', 'Kashkadarya', 'Navoi', 'Namangan', 'Samarkand', 'Surkhandarya', 'Sirdarya', 'Tashkent region', 'Fergana', 'Khorezm', 'Karakalpakistan', 'Tashkent'],
        showNavItems: true,
        showCats: false,
        signedIn: false,
        inputFocused: false
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        const scroll = document.documentElement.scrollTop;
        if (scroll > 0) this.setState({ showNavItems: false });
        if (scroll === 0) this.setState({ showNavItems: true });
    };

    shouldComponentUpdate(nexProps, nextState) {
        return nexProps !== this.props;
    }

    showCats = () => this.setState((prevState) => {
       return { showCats: !prevState };
    });

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    }

    onFocus = () => this.setState({ inputFocused: true });
    onBlur = () => this.setState({ inputFocused: false });

    render() {
        const signClass = ['Navigation__item'];
        const logoClass = ['Navigation__item'];
        const langClass = ['Navigation__item Navigation__item--hide'];
        if (this.state.showNavItems) {
            langClass.push('Navigation__item--show');
            logoClass.push('Navigation__item--hide');
        }
        if (this.state.inputFocused) signClass.push('Navigation__item--keep');

        const locations = this.state.locations.map((el, i) => {
            return (
                <div className="Dropdown__item" key={i} onClick={() => this.props.prefs.onChangeLocation(el)}>
                    <div className="Dropdown__link">{el}</div>
                </div>
            );
        });

        let userDrop = (
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
                            <span className="Dropdown__counter">3</span>
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
                            <span className="Dropdown__counter">1</span>
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
        );
        if (!this.state.signedIn) {
            userDrop = (
                <Dropdown class="Dropdown--w-auto">
                    <div to="/signin" className="Dropdown__link Dropdown__link--col">
                        <p className="Dropdown__info Dropdown__info--bold">Sign in</p>
                        <form className="Dropdown__form">
                            <input className="Dropdown__input input" type="text" placeholder="Enter your phone number" onFocus={() => this.onFocus()} onBlur={() => this.onBlur()} />
                            <input className="Dropdown__input input" type="password" placeholder="Enter your password" onFocus={() => this.onFocus()} onBlur={() => this.onBlur()} />
                            <button className="btn btn__primary Dropdown__btn--sign" onFocus={() => this.onFocus()} onBlur={() => this.onBlur()} >Sign in</button>
                            <p className="Dropdown__info">Do not have an account? <Link to="/signin" className="Dropdown__info--high">Sign up</Link></p>
                        </form>
                    </div>
                </Dropdown>
            );
        }

        return (
            <header className="Navigation">
                <div className="container">
                    <nav role="navigation" className="Navigation__wrapper">
                        <div className="Navigation__list">
                            <Logo classOver={logoClass.join(' ')} />

                            <Language class={langClass.join(' ')} dropClass="Dropdown--left-fix" />

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
                            <div className={signClass.join(' ')}>
                                <Link to="/signin" className="Navigation__link">
                                    <svg className="Navigation__icon Navigation__icon--arrow" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                                    <span className="Navigation__title  Navigation__title--user">{this.state.signedIn ? 'My profile' : 'Sign in'}</span>
                                    <div className="Navigation__iconbox">
                                        <svg className="Navigation__icon Navigation__icon--abs Navigation__icon--white" dangerouslySetInnerHTML={{__html: use('user')}} />
                                        {this.state.signedIn && <span></span>}
                                    </div>
                                </Link>
                                {userDrop}
                            </div>

                            <button className="btn btn__primary Navigation__btn">
                                <span className="Navigation__title Navigation__title--white">Advert</span>
                                <svg className="Navigation__icon Navigation__icon--white" dangerouslySetInnerHTML={{__html: use('plus')}} />
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

export default React.memo(Navigation);
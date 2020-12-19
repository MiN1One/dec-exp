import { Component } from 'react';
import Dropdown from '../Dropdown/Dropdown';

import Logo from '../Logo/Logo';
import './Navigation.scss';
import sprite from '../../assets/icons/sprite.svg';

const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

class Navigation extends Component {
    state = {
        navItems: {
            user: {
                icon: 'user',
                val: 'My profile',
                addIco: 'arrow-down'
            },
            favourites: {
                icon: '',
                val: ''
            },
            advert: {
                icon: '',
                val: ''
            }
        },
        bgColor: '#fff',
        dropItems: {
            profile: [
                'ads',
                'messages',
                'settings',
                'payments'
            ],
            favourites: ['ads', 'searches'],
        }
    }

    render() {
        // const navItems = this.state.map((el, i) => {
        //     return (
        //         <li className="Navigation__item" key={i}>
        //             <a href={'#' + el} className="Navigation__link">{el}</a>
        //         </li>
        //     );
        // });

        // const dropItemsArr = [];
        // for (const [key, val] of Object.entries(this.state.dropItems)) {
        //     dropItemsArr.push({
        //         id: profile,
        //         val: val,

        //     });
        // }

        return (
            <header className="Navigation">
                <div className="container">
                    <nav role="navigation" className="Navigation__wrapper">
                        <Logo />
                        <div className="Navigation__list">
                            <button className="btn btn__primary Navigation__btn">
                                <span className="Navigation__title ">Advert</span>
                                <svg className="Navigation__icon Navigation__icon--white Navigation__icon--menu" dangerouslySetInnerHTML={{__html: use('package')}} />
                            </button>
                            
                            <button className="btn btn__primary btn__primary--yellow Navigation__btn">
                                <span className="Navigation__title">Categories</span>
                                <svg className="Navigation__icon Navigation__icon--white Navigation__icon--menu" dangerouslySetInnerHTML={{__html: use('menu')}} />
                            </button>
                        </div>
                    </nav>
                </div>
                <div className="Navigation__bottom">
                    <div className="container">
                        <div className="Navigation__bottomwrap">
                            <div className="Navigation__list">
                                <div className="Navigation__left">
                                    <svg className="Navigation__icon" dangerouslySetInnerHTML={{__html: use('globe')}} />
                                    <span className="Navigation__title">EN</span>
                                    <svg className="Navigation__icon Navigation__icon--arrow" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                                    <Dropdown class="Dropdown--left-fix Dropdown--small">
                                        <p className="Dropdown__title Dropdown__title--small">Language:</p>
                                        <div className="Dropdown__link Dropdown__link--small">English</div>
                                        <div className="Dropdown__link Dropdown__link--small">Русский</div>
                                        <div className="Dropdown__link Dropdown__link--small">O'zbekcha</div>
                                    </Dropdown>
                                </div>
                                <div className="Navigation__left">
                                    <svg className="Navigation__icon" dangerouslySetInnerHTML={{__html: use('map-pin')}} />
                                    <span className="Navigation__title">Tashkent</span>
                                    <svg className="Navigation__icon Navigation__icon--arrow" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                                    <Dropdown class="Dropdown--small">
                                        <p className="Dropdown__title Dropdown__title--small">Locations:</p>
                                        <div className="Dropdown__link Dropdown__link--small">Tashkent</div>
                                        <div className="Dropdown__link Dropdown__link--small">Namangan</div>
                                        <div className="Dropdown__link Dropdown__link--small">Fargona</div>
                                        <div className="Dropdown__link Dropdown__link--small">Jizzakh</div>
                                        <div className="Dropdown__link Dropdown__link--small">Samarqand</div>
                                    </Dropdown>
                                </div>
                            </div>
                            <form className="Navigation__form">
                                <input type="text" className="Navigation__input" placeholder="Search ..."/>
                                <button className="Navigation__formbtn">
                                    <svg className="Navigation__icon Navigation__icon--white Navigation__icon--search" dangerouslySetInnerHTML={{__html: use('search')}} />
                                </button>
                            </form>
                            <div className="Navigation__list">
                                <div className="Navigation__item">
                                    <a href="#" className="Navigation__link">
                                        <svg className="Navigation__icon Navigation__icon--arrow" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                                        <span className="Navigation__title">My profile</span>
                                        <div className="Navigation__iconbox">
                                            <svg className="Navigation__icon Navigation__icon--white" dangerouslySetInnerHTML={{__html: use('user')}} />
                                        </div>
                                        <Dropdown class="Dropdown--right--fix">
                                            <p className="Dropdown__title">Profile:</p>
                                            <ul className="Dropdown__list">
                                                <li className="Dropdown__item">
                                                    <a href="#" className="Dropdown__link">
                                                        Ads
                                                    </a>
                                                </li>
                                                <li className="Dropdown__item">
                                                    <a href="#" className="Dropdown__link">
                                                        Messages
                                                    </a>
                                                </li>
                                                <li className="Dropdown__item">
                                                    <a href="#" className="Dropdown__link">
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
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navigation;
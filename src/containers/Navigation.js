import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Language from '../components/Language';
import * as utils from '../utilities/utilities';
import Logo from '../components/Logo';
import Dropdown from '../components/Dropdown';
import Categories from '../components/Categories';
import Backdrop from '../UI/Backdrop';

class Navigation extends PureComponent {
    state = {
        toggleLogo: false,
        signedIn: true,
        inputFocused: false,
        showCat: false
    }

    // componentDidMount() {
    //     document.addEventListener('scroll', this.onScroll);
    // }

    // onScroll = () => {
    //     const scroll = document.documentElement.scrollTop;
    //     if (scroll > 0) this.setState({ toggleLogo: true });
    //     if (scroll === 0) this.setState({ toggleLogo: false });
    // };

    // componentWillUnmount() {
    //     document.removeEventListener('scroll', this.onScroll);
    // }

    componentDidUpdate() {
        console.log('Navigation.js update');
    }

    onFocus = () => this.setState({ inputFocused: true });
    onBlur = () => this.setState({ inputFocused: false });

    onOpenCategories = () => this.setState({ showCat: true });
    onCloseCategories = () => this.setState({ showCat: false });

    render() {
        const signClass = ['navigation__item navigation__item--h'];
        if (this.state.inputFocused) signClass.push('navigation__item--keep');

        const pathname = this.props.location.pathname;
        console.log(pathname)
        const isNotHome = pathname !== '/' && pathname !== '/post-new' && pathname !== '#';
        console.log(isNotHome);

        let userDrop = (
            <Dropdown>
                <p className="dropdown__title">Profile:</p>
                <ul className="dropdown__list">
                    <li className="dropdown__item">
                        <a href="#" className="dropdown__link">
                            Ads
                        </a>
                    </li>
                    <li className="dropdown__item">
                        <a href="#" className="dropdown__link dropdown__link--counter">
                            Messages
                            <span className="dropdown__counter">3</span>
                        </a>
                    </li>
                    <li className="dropdown__item">
                        <a href="#settings" className="dropdown__link">
                            Settings
                        </a>
                    </li>
                    <li className="dropdown__item">
                        <a href="#" className="dropdown__link">
                            Payments
                        </a>
                    </li>
                </ul>
                <p className="dropdown__title">Favourites:</p>
                <ul className="dropdown__list">
                    <li className="dropdown__item">
                        <a href="#" className="dropdown__link">
                            Ads
                            <span className="dropdown__counter">1</span>
                        </a>
                    </li>
                    <li className="dropdown__item">
                        <a href="#" className="dropdown__link">
                            Searches
                        </a>
                    </li>
                </ul>
                <button className="dropdown__btn dropdown__btn--grey">Log out</button>
            </Dropdown>
        );
        if (!this.state.signedIn) {
            userDrop = (
                <Dropdown class="dropdown--w-auto">
                    <div className="dropdown__link dropdown__link--col">
                        <p className="dropdown__info dropdown__info--bold">Sign in</p>
                        <form className="dropdown__form">
                            <input className="dropdown__input input" type="text" placeholder="Enter your phone number" onFocus={() => this.onFocus()} onBlur={() => this.onBlur()} />
                            <input className="dropdown__input input" type="password" placeholder="Enter your password" onFocus={() => this.onFocus()} onBlur={() => this.onBlur()} />
                            <button className="btn btn__primary dropdown__btn--sign" onFocus={() => this.onFocus()} onBlur={() => this.onBlur()} >Sign in</button>
                            <p className="dropdown__info">Do not have an account? <Link to="/signup" className="dropdown__info--high">Sign up</Link></p>
                        </form>
                    </div>
                </Dropdown>
            );
        }

        return (
            <React.Fragment>
                {this.state.showCat &&
                    <div className="categories__container">
                        <Backdrop z={96} click={this.onCloseCategories} />
                        <Categories class="categories--fix" clickItem={this.onCloseCategories} />
                    </div>
                }
                <header className="navigation">
                    <div className="container">
                        <nav role="navigation" className="navigation__wrapper">
                            <div className="navigation__list">
                                <Logo classOver="navigation__item" />
                                <Language class="navigation__item navigation__item--drop" dropClass="dropdown--left-fix" />
                                {/* {this.state.toggleLogo && <Logo classOver="navigation__item" />}
                                {!this.state.toggleLogo && <Language class="navigation__item" dropClass="Dropdown--left-fix" />} */}
                            </div>
                            <div className="navigation__list">
                                <div className={signClass.join(' ')}>
                                    <Link to={this.state.signedIn ? '/user/profile' : '/signin'} className="navigation__link">
                                        <svg className="navigation__icon navigation__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
                                        <span className="navigation__title  navigation__title--user">{this.state.signedIn ? 'My profile' : 'Sign in'}</span>
                                        <div className="navigation__iconbox">
                                            <svg className="navigation__icon navigation__icon--abs navigation__icon--white" dangerouslySetInnerHTML={{__html: utils.use('user')}} />
                                            {this.state.signedIn && <span></span>}
                                        </div>
                                    </Link>
                                    {userDrop}
                                </div>
                                {/* {!this.state.signedIn && <Link to="/signup" className="btn btn__secondary btn__secondary--outline navigation__btn">Sign up</Link>} */}
                                
                                <Link to="/post-new" className="btn btn__primary navigation__btn">
                                    <span className="navigation__title navigation__title--white">Advert</span>
                                    <svg className="navigation__icon navigation__icon--white" dangerouslySetInnerHTML={{__html: utils.use('plus')}} />
                                </Link>
                                {isNotHome && 
                                    <button className="btn btn__secondary navigation__btn" onClick={() => this.onOpenCategories()}>
                                        <span className="navigation__title navigation__title--white">Categories</span>
                                        <svg className="navigation__icon navigation__icon--white" dangerouslySetInnerHTML={{__html: utils.use('menu')}} />
                                    </button>
                                }
                            </div>
                        </nav>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default withRouter(Navigation);
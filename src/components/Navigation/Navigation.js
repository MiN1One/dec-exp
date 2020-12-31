import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Language from '../Language/Language';
import * as utils from '../../utilities/utilities';

import Logo from '../Logo/Logo';
import './Navigation.scss';
import Dropdown from '../Dropdown/Dropdown';
import Categories from '../Categories/Categories';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Navigation extends PureComponent {
    state = {
        toggleLogo: false,
        signedIn: true,
        inputFocused: false,
        showCat: false
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        const scroll = document.documentElement.scrollTop;
        if (scroll > 0) this.setState({ toggleLogo: true });
        if (scroll === 0) this.setState({ toggleLogo: false });
    };

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    }

    componentDidUpdate() {
        console.log('Navigation.js update');
    }

    onFocus = () => this.setState({ inputFocused: true });
    onBlur = () => this.setState({ inputFocused: false });

    onClickCat = () => this.setState({ showCat: true });
    onClickCatHide = () => this.setState({ showCat: false });

    render() {
        const signClass = ['Navigation__item'];
        if (this.state.inputFocused) signClass.push('Navigation__item--keep');

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
                    <div className="Dropdown__link Dropdown__link--col">
                        <p className="Dropdown__info Dropdown__info--bold">Sign in</p>
                        <form className="Dropdown__form">
                            <input className="Dropdown__input input" type="text" placeholder="Enter your phone number" onFocus={() => this.onFocus()} onBlur={() => this.onBlur()} />
                            <input className="Dropdown__input input" type="password" placeholder="Enter your password" onFocus={() => this.onFocus()} onBlur={() => this.onBlur()} />
                            <button className="btn btn__primary Dropdown__btn--sign" onFocus={() => this.onFocus()} onBlur={() => this.onBlur()} >Sign in</button>
                            <p className="Dropdown__info">Do not have an account? <Link to="/signup" className="Dropdown__info--high">Sign up</Link></p>
                        </form>
                    </div>
                </Dropdown>
            );
        }

        return (
            <React.Fragment>
                {(this.props.cat && this.state.showCat) &&
                    <div className="Categories__container">
                        <Backdrop z={96} click={this.onClickCatHide} />
                        <Categories class="Categories--fix" clickItem={this.onClickCatHide} />
                    </div>
                }
                <header className="Navigation">
                    <div className="container">
                        <nav role="navigation" className="Navigation__wrapper">
                            <div className="Navigation__list">
                                {this.state.toggleLogo && <Logo classOver="Navigation__item" />}
                                {!this.state.toggleLogo && <Language class="Navigation__item" dropClass="Dropdown--left-fix" />}
                            </div>
                            <div className="Navigation__list">
                                <div className={signClass.join(' ')}>
                                    <Link to="/signin" className="Navigation__link">
                                        <svg className="Navigation__icon Navigation__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
                                        <span className="Navigation__title  Navigation__title--user">{this.state.signedIn ? 'My profile' : 'Sign in'}</span>
                                        <div className="Navigation__iconbox">
                                            <svg className="Navigation__icon Navigation__icon--abs Navigation__icon--white" dangerouslySetInnerHTML={{__html: utils.use('user')}} />
                                            {this.state.signedIn && <span></span>}
                                        </div>
                                    </Link>
                                    {userDrop}
                                </div>
                                <button className="btn btn__primary Navigation__btn">
                                    <span className="Navigation__title Navigation__title--white">Advert</span>
                                    <svg className="Navigation__icon Navigation__icon--white" dangerouslySetInnerHTML={{__html: utils.use('plus')}} />
                                </button>
                                {this.props.cat && 
                                    <button className="btn btn__primary btn__primary--green Navigation__btn" onClick={() => this.onClickCat()}>
                                        <span className="Navigation__title Navigation__title--white">Categories</span>
                                        <svg className="Navigation__icon Navigation__icon--white" dangerouslySetInnerHTML={{__html: utils.use('menu')}} />
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
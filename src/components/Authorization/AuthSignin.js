import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Language from '../Language/Language';

import Logo from '../Logo/Logo';

import './Authorization.scss';
import sprite from '../../assets/icons/sprite.svg';

const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

class AuthSignin extends Component {
    state = {
        inputFocused: false
    }

    onFocus = () => this.setState({ inputFocused: true });
    onBlur = () => this.setState({ inputFocused: false });

    render() {
        const wrapClass = ['Authorization__wrapper'];
        if (this.state.inputFocused) wrapClass.push('Authorization__wrapper--animate');

        return (
            <div className="Authorization">
                {this.state.inputFocused && <Backdrop z={1} click={this.onBlur} />}
                <Language class="Authorization__lang" dropClass="Dropdown--left-fix"/>
                <div className={wrapClass.join(' ')} onClick={() => this.onFocus()}>
                    <div className="Authorization__head">
                        <Logo />
                        <Link to="/signup" className="Authorization__info Authorization__info--heading">
                            <svg className="Authorization__icon" dangerouslySetInnerHTML={{__html: use('user-plus')}} />
                            Sign up
                        </Link>
                    </div>
                    <form className="Authorization__form">
                    <input 
                        className="Authorization__input input" 
                        type="text" 
                        placeholder="Enter your phone number" />
                    <input 
                        className="Authorization__input input" 
                        type="password" 
                        placeholder="Enter your password" />
                        <div className="Authorization__item">
                            <input type="checkbox" id="remember" className="checkbox" />
                            <label htmlFor="remember" className="label">
                                <span></span>
                                Stay logged in
                            </label>
                        </div>
                    <button className="btn btn__primary Authorization__btn">Sign in</button>
                    <Link to="/password-reset" className="Authorization__info">Reset password</Link>
                    <p className="Authorization__info">Do not have an account? <Link to="/signup" className="Authorization__info--high">Sign up</Link></p>
                </form>
                </div>
            </div>
        )
    }
}

export default AuthSignin;
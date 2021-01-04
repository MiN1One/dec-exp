import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Backdrop from '../UI/Backdrop';
import Language from '../components/Language';

import Logo from '../components/Logo';
import * as utils from '../utilities/utilities';

class AuthSignin extends Component {
    state = {
        inputFocused: false
    }

    onFocus = () => this.setState({ inputFocused: true });
    onBlur = () => this.setState({ inputFocused: false });

    render() {
        const wrapClass = ['authorization__wrapper'];
        if (this.state.inputFocused) wrapClass.push('authorization__wrapper--animate');

        return (
            <div className="authorization">
                {this.state.inputFocused && <Backdrop z={1} click={this.onBlur} />}
                <Language class="authorization__lang" dropClass="dropdown--left-fix"/>
                <div className={wrapClass.join(' ')} onClick={() => this.onFocus()}>
                    <div className="authorization__head">
                        <Logo />
                        <Link to="/signup" className="authorization__info authorization__info--heading">
                            <svg className="authorization__icon" dangerouslySetInnerHTML={{__html: utils.use('user-plus')}} />
                            Sign up
                        </Link>
                    </div>
                    <form className="authorization__form">
                    <input 
                        className="authorization__input input" 
                        type="text" 
                        placeholder="Enter your phone number" />
                    <input 
                        className="authorization__input input" 
                        type="password" 
                        placeholder="Enter your password" />
                        <div className="authorization__item">
                            <input type="checkbox" id="remember" className="checkbox" />
                            <label htmlFor="remember" className="label">
                                <span></span>
                                Stay logged in
                            </label>
                        </div>
                    <button className="btn btn__primary authorization__btn mb-15">
                        Sign in
                        <svg className="icon ml-5 icon--8" dangerouslySetInnerHTML={{__html: utils.use('log-in')}} />
                    </button>
                    <Link to="/password-reset" className="authorization__info">Reset password</Link>
                    <p className="authorization__info">Do not have an account? <Link to="/signup" className="authorization__info--high">Sign up</Link></p>
                </form>
                </div>
            </div>
        )
    }
}

export default AuthSignin;
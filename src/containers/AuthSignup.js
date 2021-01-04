import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Backdrop from '../UI/Backdrop';
import Language from '../components/Language';

import Logo from '../components/Logo';
import * as utils from '../utilities/utilities';

class AuthSignup extends Component {
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
                        <Link to="/signin" className="authorization__info authorization__info--heading">
                            <svg className="authorization__icon" dangerouslySetInnerHTML={{__html: utils.use('log-in')}} />
                            Sign in
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
                        <input 
                            className="authorization__input input" 
                            type="password" 
                            placeholder="Confirm your password" />
                        <div className="authorization__item">
                        <input type="checkbox" id="remember" className="checkbox" />
                        <label htmlFor="remember" className="label">
                            <span></span>
                            Agree to terms of use
                        </label>
                        </div>
                        <button className="btn btn__primary authorization__btn mb-15">
                            Sign up
                            <svg className="icon ml-5 icon--8" dangerouslySetInnerHTML={{__html: utils.use('user-plus')}} />
                        </button>
                        <p className="authorization__info">Existing user? <Link to="/signin" className="authorization__info--high">Sign in</Link></p>
                    </form>
                </div>
            </div>
        );
    }
}

export default AuthSignup;
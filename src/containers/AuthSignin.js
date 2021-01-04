import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as emailValidator from 'email-validator';

import Backdrop from '../UI/Backdrop';
import Language from '../components/Language';

import Logo from '../components/Logo';
import * as utils from '../utilities/utilities';

class AuthSignin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputFocused: false,
            error: null
        }

        this.checkboxRef = React.createRef();
        this.phoneRef = React.createRef();
        this.passRef = React.createRef();
    }

    onProceed = (e) => {
        e.preventDefault();
        const phoneNum = this.phoneRef.current.value;
        const password = this.passRef.current.value;
        const remember = this.checkboxRef.current.checked;
        if (((phoneNum && password) !== '') && (phoneNum && password)) {
            let isNum = /^\d+$/.test(phoneNum);
            if (phoneNum.includes('+')) isNum = true;

            let query = isNum ? 'number' : 'email';
            if (!isNum) {
                if (!emailValidator.validate(phoneNum)) return this.setState({ error: 'Please, enter valid email address' });
            }

            console.log(phoneNum);
            console.log(password);
            console.log(remember);
        }
    }

    onTogglePass = (e) => {
        e.preventDefault();
        if (this.passRef.current.value !== '') {
            if (this.passRef.current.type === 'password') this.passRef.current.type = 'text';
            else this.passRef.current.type = 'password';
        }
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
                    {this.state.error && <p className="authorization__error mb-1">{this.state.error}</p>}
                    <form className="authorization__form">
                    <label className="authorization__label">
                        <input 
                            className="authorization__input input" 
                            type="text" 
                            placeholder="Your number or email"
                            ref={this.phoneRef} />
                        <p className="authorization__label authorization__label--abs">Your number or email</p>
                    </label>
                    <label className="authorization__label">
                        <input 
                            className="authorization__input input" 
                            type="password" 
                            placeholder="Enter your password"
                            ref={this.passRef} />
                        <button className="authorization__btn--abs" onClick={(e) => this.onTogglePass(e)}>
                            <svg className="authorization__icon" dangerouslySetInnerHTML={{__html: utils.use('eye-off')}} />
                        </button>
                        <p className="authorization__label authorization__label--abs">Your password</p>
                    </label>
                        <div className="authorization__item">
                            <input type="checkbox" id="remember" className="checkbox" ref={this.checkboxRef} />
                            <label htmlFor="remember" className="label">
                                <span></span>
                                Stay logged in
                            </label>
                        </div>
                    <button className="btn btn__primary authorization__btn mb-1" onClick={(e) => this.onProceed(e)}>
                        Sign in
                        <svg className="icon ml-5 icon--8" dangerouslySetInnerHTML={{__html: utils.use('log-in')}} />
                    </button>
                    <Link to="/password-reset" className="authorization__info mb-15">Reset password</Link>
                    <p className="authorization__info">Do not have an account? <Link to="/signup" className="authorization__info--high">Sign up</Link></p>
                </form>
                </div>
            </div>
        )
    }
}

export default AuthSignin;
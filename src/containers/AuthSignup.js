import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import emailValidator from 'email-validator';
import axios from 'axios';

import Backdrop from '../UI/Backdrop';
import Language from '../components/Language';
import Logo from '../components/Logo';
import * as utils from '../utilities/utilities';

class AuthSignup extends Component {
    constructor(props) { 
        super(props);
        
        this.state = {
            inputFocused: false,
            error: null,
            success: false
        }

        this.checkboxRef = React.createRef();
        this.loginRef = React.createRef();
        this.passRef = React.createRef();
        this.passConfirmRef = React.createRef();
        this.nameRef = React.createRef();
        this.lNameRef = React.createRef();
    }

    clearErrorHighlight = () => {
        this.loginRef.current.setCustomValidity('');
        this.passRef.current.setCustomValidity('');
        this.passConfirmRef.current.setCustomValidity('');
        this.setState({ error: null });
    }

    validated = (agree, passwordsMatch, validEmail, filled) => {
        if (filled) {
            if (!validEmail) {
                this.loginRef.current.setCustomValidity('Invalid email');
                this.loginRef.current.focus();
                this.setState({ error: 'PLease enter valid email address' });
                return false;
            } else if (!passwordsMatch) {
                this.passRef.current.setCustomValidity('Passwords do not match');
                this.passConfirmRef.current.setCustomValidity('Passwords do not match');
                this.passRef.current.focus();
                this.setState({ error: 'Passwords do not match' });
                return false
            } else if (!agree) {
                this.setState({ error: 'You you have to accept website terms of use' });
                return false
            } else {
                this.clearErrorHighlight();
                return true;
            }
        } else {
            this.nameRef.current.setCustomValidity('Empty');
            this.lNameRef.current.setCustomValidity('Empty');
            this.loginRef.current.setCustomValidity('Empty');
            this.passRef.current.setCustomValidity('Empty');
            this.passConfirmRef.current.setCustomValidity('Empty');
            this.nameRef.current.focus();
            this.setState({ error: 'Please fill out all of the fields' });
        }
    }

    onProceed = (e) => {
        e.preventDefault();
        const mainInput = this.loginRef.current;
        const password = this.passRef.current;
        const passwordConf = this.passConfirmRef.current;
        const agree = this.checkboxRef.current.checked;
        const name = this.nameRef.current;
        const lastName = this.lNameRef.current;

        if (
            (   
                mainInput.value && 
                password.value && 
                passwordConf.value && 
                name.value && 
                lastName.value
            ) !== '') {

            let isNum = /^\d+$/.test(mainInput.value);
            if (mainInput.value.includes('+')) isNum = true;
            let query = 'email';
            if (isNum) query = 'phone';

            let passwordsMatch = true;
            passwordsMatch = password.value === passwordConf.value;

            let validEmail = true;
            if (!isNum) validEmail = emailValidator.validate(mainInput.value);

            if (this.validated(agree, passwordsMatch, validEmail, true)) {
                console.log(isNum);
                console.log(mainInput.value);
                console.log(password.value);
                console.log(passwordConf.value);
                console.log(agree);

                // ---------------------------------
                axios.post('https://cors-anywhere.herokuapp.com/http://api.soybaliq.uz/user', {
                    [query]: mainInput.value,
                    password: password.value,
                    firstname: name.value,
                    lastname: lastName.value
                }).then(res => {
                    console.log(res);
                    this.props.history.push(`#confirm`);
                }).catch(er => {
                    this.setState({ error: er.message })
                });
                // ........

            }
        } else this.validated(null, null, null, false);
    }

    onFocus = () => this.setState({ inputFocused: true });
    onBlur = () => this.setState({ inputFocused: false });

    render() {

        return (
            <div className="authorization">
                {this.state.inputFocused && <Backdrop z={1} click={this.onBlur} />}
                <Language class="authorization__lang" dropClass="dropdown--left-fix"/>
                <div className="authorization__wrapper authorization__wrapper--high" onClick={() => this.onFocus()}>
                    <div className="authorization__head">
                        <Logo />
                        <Link to="/signin" className="authorization__info authorization__info--heading">
                            <svg className="authorization__icon" dangerouslySetInnerHTML={{__html: utils.use('log-in')}} />
                            Sign in
                        </Link>
                    </div>
                    {this.state.error && <p className="authorization__error mb-1">{this.state.error}</p>}
                    <form className="authorization__form">
                        <label className="authorization__label">
                            <input 
                                className="authorization__input input" 
                                type="text" 
                                placeholder="First name"
                                ref={this.nameRef} />
                            <p className="authorization__label authorization__label--abs">First name</p>
                        </label>
                        <label className="authorization__label">
                            <input 
                                className="authorization__input input" 
                                type="text" 
                                placeholder="Last name"
                                ref={this.lNameRef} />
                            <p className="authorization__label authorization__label--abs">Last name</p>
                        </label>
                        <label className="authorization__label">
                            <input 
                                className="authorization__input input" 
                                type="text" 
                                placeholder="Your number or email" 
                                ref={this.loginRef} />
                            <p className="authorization__label authorization__label--abs">Your number or email</p>
                        </label>
                        <label className="authorization__label">
                            <input 
                                className="authorization__input input" 
                                type="password" 
                                placeholder="Enter your password" 
                                ref={this.passRef} />
                            <p className="authorization__label authorization__label--abs">Your password</p>
                        </label>
                        <label className="authorization__label">
                            <input 
                                className="authorization__input input" 
                                type="password" 
                                placeholder="Confirm your password"
                                ref={this.passConfirmRef} />
                            <p className="authorization__label authorization__label--abs mb-2">Confirm your password</p>
                        </label>
                        <div className="authorization__item">
                        <input type="checkbox" id="terms" className="checkbox" ref={this.checkboxRef} />
                        <label htmlFor="terms" className="label">
                            <span></span>
                            Agree to terms of use
                        </label>
                        </div>
                        <button className="btn btn__primary authorization__btn mb-1" onClick={(e) => this.onProceed(e)}>
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

export default withRouter(AuthSignup);
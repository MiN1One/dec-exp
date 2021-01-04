import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Backdrop from '../UI/Backdrop';
import Language from '../components/Language';

import Logo from '../components/Logo';
import * as utils from '../utilities/utilities';

class AuthSignup extends Component {
    constructor(props) { 
        super(props);
        
        this.state = {
            inputFocused: false,
            error: null
        }

        this.checkboxRef = React.createRef();
        this.phoneRef = React.createRef();
        this.passRef = React.createRef();
        this.passConfirmRef = React.createRef();
    }

    onProceed = (e) => {
        e.preventDefault();
        const phoneNum = this.phoneRef.current.value;
        const password = this.passRef.current.value;
        const passwordConf = this.passConfirmRef.current.value;
        const agree = this.checkboxRef.current.checked;
        if (((phoneNum && password && passwordConf) !== '') && (phoneNum && password && passwordConf)) {
            let isNum = /^\d+$/.test(phoneNum);
            if (phoneNum.includes('+')) isNum = true;

            let query = 'email';
            if (isNum) query = 'phone';

            if (password !== passwordConf) {
                this.passRef.current.setCustomValidity('Passwords do not match');
                this.passConfirmRef.current.setCustomValidity('Passwords do not match');
                this.passRef.current.focus();
                this.setState({ error: 'Passwords do not match' });
            } else {
                if (!agree) this.setState({ error: 'You have to agree to website terms' });
                else {
                    this.passRef.current.setCustomValidity('');
                    this.passConfirmRef.current.setCustomValidity('');
                    this.setState({ error: null });
                }
            }

            console.log(isNum);
            console.log(phoneNum);
            console.log(password);
            console.log(passwordConf);
            console.log(agree);
            this.props.history.push(`#confirm`);
        } else {

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
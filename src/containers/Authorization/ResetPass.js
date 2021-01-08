import React, { Component } from 'react';
import * as emailValidator from 'email-validator';
import { withRouter } from 'react-router';

import Backdrop from '../../UI/Backdrop';
import Language from '../../components/Language';
import Logo from '../../components/Logo';
import * as utils from '../../utilities/utilities';

class ResetPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFocused: false,
            showNextStep: false,
            error: null,
            success: false,
            attempted: false,
            number: false,
            time: 20
        }

        this.phoneRef = React.createRef();
        this.codeFieldRef = React.createRef();
    }

    onFocus = () => this.setState({ inputFocused: true });
    onBlur = () => this.setState({ inputFocused: false });

    timerWait = () => {
        if (this.state.time > 0) 
            this.setState((prevState) => {
                return { time: prevState.time - 1 }
            });
    }

    makeHttp = (login, query) => {
        this.props.history.push('#reset');
    }

    onProceed = (e) => {
        e.preventDefault();
        const mainInput = this.phoneRef.current;
        const code = this.codeFieldRef.current;

        if (mainInput.value !== '') {
            let isNum = /^\d+$/.test(mainInput.value);
            if (mainInput.value.includes('+')) isNum = true;
            let query = isNum ? 'number' : 'email';

            if (!this.state.attempted) {
    
                if (isNum) this.setState({ number: true });
                
                if (!isNum && !emailValidator.validate(mainInput.value)) {
                    mainInput.setCustomValidity('Please, enter valid email address');
                    return this.setState({ error: 'Please, enter valid email address' });
                } else {
                    mainInput.setCustomValidity('');
                    this.setState({ error: null })
                }
                
                setInterval(this.timerWait, 1000);
                this.setState({ showNextStep: true });
                this.setState({ attempted: true });

            } else if (this.state.attempted && this.state.time === 0) {
                if (code.value !== '') this.makeHttp(mainInput.value, query);
                else {
                    this.setState({ time: 20 });
                    code.focus();
                }
            }
        } else {
            mainInput.focus();
            mainInput.setCustomValidity('Please, enter valid email address');
            return this.setState({ error: 'Please, enter valid email address' });
        }
    }

    render() {
        const wrapClass = ['authorization__wrapper'];
        if (this.state.inputFocused) wrapClass.push('authorization__wrapper--animate');

        return (
            <div className="authorization">
                {this.state.inputFocused && <Backdrop z={1} click={this.onBlur} />}
                <Language class="authorization__lang" dropClass="dropdown--left-fix"/>
                <div className={wrapClass.join(' ')} onClick={() => this.onFocus()}>
                    <Logo />
                    <form className="authorization__form authorization__form--res mt-2">
                        <p className="authorization__info authorization__info--res mb-1">Reset password</p>
                        {this.state.attempted && 
                            <p className="authorization__error authorization__error--success mb-2">
                                <svg className="authorization__icon" dangerouslySetInnerHTML={{__html: utils.use(this.state.number ? 'phone' : 'mail')}} />
                                The code is sent to your {this.state.number ? 'phone number' : 'email'}
                            </p>
                            }
                        {this.state.error && <p className="authorization__error mb-1">{this.state.error}</p>}
                        <label className="authorization__label">
                            <input 
                                className="authorization__input authorization__input--res input" 
                                type="text" 
                                placeholder="Your number or email"
                                ref={this.phoneRef} />
                            <p className="authorization__label authorization__label--abs">Your number or email</p>
                        </label>
                        {this.state.showNextStep && 
                            <React.Fragment>
                                <label className="authorization__label">
                                    <input 
                                        className="authorization__input authorization__input--res input" 
                                        type="text" 
                                        placeholder="Enter the code" 
                                        required
                                        autoFocus 
                                        ref={this.codeFieldRef} />
                                    <p className="authorization__label authorization__label--abs">The code your recieved</p>
                                </label>
                            </React.Fragment>
                            }
                        <button className="btn btn__primary btn__primary--green authorization__btn" onClick={(e) => this.onProceed(e)}>
                            Reset Password
                            <svg className="icon ml-5 icon--8" dangerouslySetInnerHTML={{__html: utils.use('key')}} />
                        </button>
                        {(this.state.attempted && this.state.time > 0) && <p className="authorization__label authorization__label--timer mt-1">You can request another code in {this.state.time}</p>}
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(ResetPass);

// {/* <label className="authorization__label mb-1" htmlFor="num">Enter your phone number</label> */}
//                         {/* <div className="aduthorization__group">
//                             <label className="authorization__label authorization__label--start">
//                                 <span>+998</span>
//                                 <input 
//                                     className="authorization__input authorization__input--start authorization__input--res input" 
//                                     type="text" 
//                                     placeholder="--"
//                                     id="num"
//                                     minLength="2"
//                                     maxLength="2"
//                                     value={this.state.resetPhoneNumStart}
//                                     onChange={(e) => this.onEnterNumStart(e)} />
//                             </label>
//                             <input 
//                                 className="authorization__input authorization__input--end authorization__input--res input" 
//                                 type="text" 
//                                 placeholder="your number"
//                                 value={this.state.resetPhoneNumEnd} 
//                                 id="num"
//                                 minLength="7"
//                                 maxLength="9"
//                                 onChange={(e) => this.onEnterNumEnd(e)}
//                                 ref={this.numEndRef} />
//                         </div> */}
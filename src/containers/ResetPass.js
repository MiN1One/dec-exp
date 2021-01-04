import React, { Component } from 'react';

import Backdrop from '../UI/Backdrop';
import Language from '../components/Language';
import Logo from '../components/Logo';
import * as utils from '../utilities/utilities';

class ResetPass extends Component {
    state = {
        inputFocused: false,
        resetPhoneNum: '',
        showNextStep: false
    }

    onFocus = () => this.setState({ inputFocused: true });
    onBlur = () => this.setState({ inputFocused: false });

    onClickReset = (e) => {
        e.preventDefault();
        if (this.state.resetPhoneNum) this.setState({ showNextStep: true });
    }

    onEnterNum = (e) => {
        this.setState({ resetPhoneNum: e.target.value });
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
                    <p className="authorization__info authorization__info--res">Reset your password</p>
                    <form className="authorization__form authorization__form--res">
                        <label className="authorization__label" htmlFor="num">Enter your phone number</label>
                        <input 
                            className="authorization__input authorization__input--res input" 
                            type="text" 
                            placeholder="+998 "
                            value={this.state.resetPhoneNum} 
                            id="num"
                            minLength="9"
                            maxLength="11"
                            onChange={(e) => this.onEnterNum(e)} />
                        {this.state.showNextStep && 
                            <React.Fragment>
                                <label className="authorization__label" htmlFor="code">Enter the code your recieved</label>
                                <input 
                                    className="authorization__input authorization__input--res input" 
                                    type="text" 
                                    placeholder="Enter the code" 
                                    autoFocus />
                            </React.Fragment> }
                        <button className="btn btn__primary btn__primary--green authorization__btn" onClick={(e) => this.onClickReset(e)}>
                            Reset password
                            <svg className="icon ml-5 icon--8" dangerouslySetInnerHTML={{__html: utils.use('key')}} />
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ResetPass;

// export class ResetPass extends Component {
//     state = {
//         inputFocused: false
//     }

//     onFocus = () => this.setState({ inputFocused: true });
//     onBlur = () => this.setState({ inputFocused: false });

//     render() {
//         const wrapClass = ['authorization__wrapper'];
//         if (this.state.inputFocused) wrapClass.push('authorization__wrapper--animate');

//         return (
//             <LazyLoadComponent>
//                 <div className="Authorization">
//                     {this.state.inputFocused && <Backdrop z={1} click={this.onBlur} />}
//                     <Language class="authorization__lang" dropClass="Dropdown--left-fix"/>
//                     <div className={wrapClass.join(' ')} onClick={() => this.onFocus()}>
//                         <Logo />
//                         <p className="authorization__info authorization__info--res">Reset your password</p>
//                         <form className="authorization__form authorization__form--res">
//                             <input 
//                                 className="authorization__input authorization__input--res input" 
//                                 type="text" 
//                                 placeholder="Enter your phone number" />
//                             <button className="btn btn__primary btn__primary--green authorization__btn">Reset password</button>
//                         </form>
//                     </div>
//                 </div>
//             </LazyLoadComponent>
//         );
//     }
// }
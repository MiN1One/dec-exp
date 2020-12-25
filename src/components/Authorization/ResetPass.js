import React, { Component } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Language from '../Language/Language';

import Logo from '../Logo/Logo';

import './Authorization.scss';

export class ResetPass extends Component {
    state = {
        inputFocused: false
    }

    onFocus = () => this.setState({ inputFocused: true });
    onBlur = () => this.setState({ inputFocused: false });

    render() {
        const wrapClass = ['Authorization__wrapper'];
        if (this.state.inputFocused) wrapClass.push('Authorization__wrapper--animate');

        return (
            <LazyLoadComponent>
                <div className="Authorization">
                    {this.state.inputFocused && <Backdrop z={1} click={this.onBlur} />}
                    <Language class="Authorization__lang" dropClass="Dropdown--left-fix"/>
                    <div className={wrapClass.join(' ')} onClick={() => this.onFocus()}>
                        <Logo />
                        <p className="Authorization__info Authorization__info--res">Reset your password</p>
                        <form className="Authorization__form Authorization__form--res">
                            <input 
                                className="Authorization__input Authorization__input--res input" 
                                type="text" 
                                placeholder="Enter your phone number" />
                            <button className="btn btn__primary btn__primary--green Authorization__btn">Reset password</button>
                        </form>
                    </div>
                </div>
            </LazyLoadComponent>
        );
    }
}

// export class ResetPass extends Component {
//     state = {
//         inputFocused: false
//     }

//     onFocus = () => this.setState({ inputFocused: true });
//     onBlur = () => this.setState({ inputFocused: false });

//     render() {
//         const wrapClass = ['Authorization__wrapper'];
//         if (this.state.inputFocused) wrapClass.push('Authorization__wrapper--animate');

//         return (
//             <LazyLoadComponent>
//                 <div className="Authorization">
//                     {this.state.inputFocused && <Backdrop z={1} click={this.onBlur} />}
//                     <Language class="Authorization__lang" dropClass="Dropdown--left-fix"/>
//                     <div className={wrapClass.join(' ')} onClick={() => this.onFocus()}>
//                         <Logo />
//                         <p className="Authorization__info Authorization__info--res">Reset your password</p>
//                         <form className="Authorization__form Authorization__form--res">
//                             <input 
//                                 className="Authorization__input Authorization__input--res input" 
//                                 type="text" 
//                                 placeholder="Enter your phone number" />
//                             <button className="btn btn__primary btn__primary--green Authorization__btn">Reset password</button>
//                         </form>
//                     </div>
//                 </div>
//             </LazyLoadComponent>
//         );
//     }
// }
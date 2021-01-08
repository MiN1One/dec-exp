import React, { PureComponent } from 'react';
import { NavLink, withRouter, Route, Switch } from 'react-router-dom';

import avatar from '../assets/images/32.jpg';
import company from '../assets/images/intech-2.jpg';
import LoadingSub from '../UI/LoadingSub';
import * as utils from '../utilities/utilities';

class Main extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            contactEditMode: false,
            companyEditMode: false,
            loading: false,
        }

        this.imgRef = React.createRef();
        this.companyRef = React.createRef();

        this.nameInputRef = React.createRef();
        this.emailInputRef = React.createRef();
        this.numberInputRef = React.createRef();
        this.companyInputRef = React.createRef();
        
        this.emailCompanyInputRef = React.createRef();
        this.numberCompanyInputRef = React.createRef();
        this.nameCompanyInputRef = React.createRef();
    }

    onToggleContactEditMode = () => this.setState(prevState => {
        return { contactEditMode: !prevState.contactEditMode }
    });
    onToggleCompanyEditMode = () => this.setState(prevState => {
        return { companyEditMode: !prevState.companyEditMode }
    });

    onSaveContactData = () => {
        const name = this.nameInputRef.current.value;
        const email = this.emailInputRef.current.value;
        const number = this.numberInputRef.current.value;
        const company = this.companyInputRef.current.value;

        // ---------------
        this.setState({ loading: true });
        setTimeout(() => this.setState({ loading: false }, () => this.setState({ contactEditMode: false })), 2000);
        // ....
    }
    
    onSaveCompanyData = () => {
        const nameCompany = this.nameCompanyInputRef.current.value;
        const emailCompany = this.emailCompanyInputRef.current.value;
        const numberCompany = this.numberCompanyInputRef.current.value;
        
        // ---------------
        this.setState({ loading: true });
        setTimeout(() => this.setState({ loading: false }, () => this.setState({ companyEditMode: false })), 2000);

        // ....
    }

    
    
    render() {
        let contactView = (
            <div className="profile__details">
                <div className="profile__text">
                    <p className="profile__title">Name:</p>
                    John Doe
                </div>
                <div className="profile__text">
                    <p className="profile__title">Email:</p>
                    johndoe@mail.eu
                </div>
                <div className="profile__text">
                    <p className="profile__title">Company:</p>
                    Intech Ltd.
                </div>
                <div className="profile__text">
                    <p className="profile__title">Phone number:</p>
                    +651651 65165165 65
                </div>
            </div>
        );
        if (this.state.contactEditMode) {
            contactView = (
                <div className="profile__details">
                    <div className="profile__text">
                        <label className="profile__title">Name:</label>
                        <input className="profile__input input" type="text" placeholder="Your name" ref={this.nameInputRef} />
                    </div>
                    <div className="profile__text">
                        <label className="profile__title">Email:</label>
                        <input className="profile__input input" type="text" placeholder="Your email" ref={this.emailInputRef} />
                    </div>
                    <div className="profile__text">
                        <label className="profile__title">Company:</label>
                        <input className="profile__input input" type="text" placeholder="Company name" ref={this.companyInputRef} />
                    </div>
                    <div className="profile__text">
                        <label className="profile__title">Phone number:</label>
                        <input className="profile__input input" type="text" placeholder="Your number" ref={this.numberInputRef} />
                    </div>
                </div>
            );
        }
        let companyView = (
            <div className="profile__details">
                <div className="profile__text">
                    <p className="profile__title">Company Name:</p>
                    Intech Ltd.
                </div>
                <div className="profile__text">
                    <p className="profile__title">Email:</p>
                    intech@enterprise.eu
                </div>
                <div className="profile__text">
                    <p className="profile__title">Phone number:</p>
                    +651651 65165165 65
                </div>
            </div>
        );
        if (this.state.companyEditMode) {
            companyView = (
                <div className="profile__details">
                    <div className="profile__text">
                        <label className="profile__title">Company Name:</label>
                        <input className="profile__input input" type="text" placeholder="Company name" ref={this.nameCompanyInputRef} />
                    </div>
                    <div className="profile__text">
                        <label className="profile__title">Email:</label>
                        <input className="profile__input input" type="text" placeholder="Company email" ref={this.emailCompanyInputRef} />
                    </div>
                    <div className="profile__text">
                        <label className="profile__title">Phone number:</label>
                        <input className="profile__input input" type="text" placeholder="Company number" ref={this.numberCompanyInputRef} />
                    </div>
                </div>
            );
        }

        return (
            <React.Fragment>
                <div className="profile__titlebar">
                    <h2 className="heading heading__2 profile__heading">Contact details</h2>
                    <button className="profile__btn profile__btn--rounded" onClick={() => this.onToggleContactEditMode()}>
                        <svg className="profile__icon profile__icon--small" dangerouslySetInnerHTML={{__html: utils.use(this.state.contactEditMode ? 'x' : 'edit-2')}} />
                    </button>
                </div>
                <div className="profile__content">
                    {contactView}
                    <div>
                        <div className="pos-rel d-inline mb-1">
                            <figure className="profile__figure">
                                <img className="profile__img" alt="user" src={avatar} />
                                <svg className="profile__icon profile__icon--big" dangerouslySetInnerHTML={{__html: utils.use('camera')}} />
                            </figure>
                            <input className="d-none" type="file" ref={this.imgRef} />
                            <div className="profile__btn--img">
                                {this.state.contactEditMode && <button className="mr-5 profile__btn profile__btn--rounded" onClick={() => {}}>
                                    <svg className="profile__icon profile__icon--small" dangerouslySetInnerHTML={{__html: utils.use('trash-2')}} />
                                </button>}
                                <button className="profile__btn profile__btn--rounded" onClick={() => this.imgRef.current.click()}>
                                    <svg className="profile__icon profile__icon--small" dangerouslySetInnerHTML={{__html: utils.use('camera')}} />
                                </button>
                            </div>
                        </div>
                        <p className="profile__hint tc">Image size and resolution<br/>should not exceed<br/>1MB and 500x500px</p>
                    </div>
                </div>
                {this.state.contactEditMode && 
                    <div className="profile__footer mt-15">
                        {this.state.loading && <LoadingSub />}
                        <button className="ml-2 btn btn__primary" onClick={() => this.onSaveContactData()}>Save</button>
                    </div>
                }
                <div className="profile__titlebar profile__titlebar--mid">
                    <h2 className="heading heading__2 profile__heading">Company details</h2>
                    <button className="profile__btn profile__btn--rounded" onClick={() => this.onToggleCompanyEditMode()}>
                        <svg className="profile__icon profile__icon--small" dangerouslySetInnerHTML={{__html: utils.use(this.state.companyEditMode ? 'x' : 'edit-2')}} />
                    </button>
                </div>
                <div className="profile__content">
                    {companyView}
                    <div>
                        <div className="pos-rel d-inline mb-1">
                            <figure className="profile__figure">
                                <img className="profile__img" alt="user" src={company} />
                                <svg className="profile__icon profile__icon--big" dangerouslySetInnerHTML={{__html: utils.use('camera')}} />
                            </figure>
                            <input className="d-none" type="file" ref={this.companyRef} />
                            
                            <div className="profile__btn--img">
                                {this.state.companyEditMode && <button className="mr-5 profile__btn profile__btn--rounded" onClick={() => {}}>
                                    <svg className="profile__icon profile__icon--small" dangerouslySetInnerHTML={{__html: utils.use('trash-2')}} />
                                </button>}
                                <button className="profile__btn profile__btn--rounded" onClick={() => this.companyRef.current.click()}>
                                    <svg className="profile__icon profile__icon--small" dangerouslySetInnerHTML={{__html: utils.use('camera')}} />
                                </button>
                            </div>
                        </div>
                        <p className="profile__hint tc">Image size and resolution<br/>should not exceed<br/>1MB and 500x500px</p>
                    </div>
                </div>
                {this.state.companyEditMode && 
                    <div className="profile__footer mt-15">
                        {this.state.loading && <LoadingSub />}
                        <button className="ml-2 btn btn__primary" onClick={() => this.onSaveCompanyData()}>Save</button>
                    </div>
                }
            </React.Fragment>
        );
    }
}

class Profile extends PureComponent {

    render() {
        return (
            <div className="profile">
                <div className="container">
                    <div className="profile__wrapper">
                        <div className="profile__head">
                            <h2 className="heading heading__2">Profile</h2>
                            <div className="profile__nav">
                                Profile nav
                            </div>
                        </div>
                        <div className="profile__main">
                            <div className="profile__group profile__panel">
                                <h5 className="profile__link profile__link--heading">{this.props.match.params.section}</h5>
                                <ul className="profile__list">
                                    <li className="profile__item">
                                        <NavLink to="/user/profile" exact activeClassName="profile__link--active" className="profile__link">
                                            <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('user')}} />
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li className="profile__item">
                                        <NavLink to="/user/ads" activeClassName="profile__link--active" className="profile__link">
                                            <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('layout')}} />
                                            Ads
                                        </NavLink>
                                    </li>
                                    <li className="profile__item">
                                        <NavLink to="/user/messages" activeClassName="profile__link--active" className="profile__link">
                                            <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('mail')}} />
                                            Messages
                                        </NavLink>
                                    </li>
                                    <li className="profile__item">
                                        <NavLink to="/user/favourites" activeClassName="profile__link--active" className="profile__link">
                                            <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('heart')}} />
                                            Favourites
                                        </NavLink>
                                    </li>
                                    <li className="profile__item">
                                        <NavLink to="/user/settings" activeClassName="profile__link--active" className="profile__link">
                                            <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('settings')}} />
                                            Settings
                                        </NavLink>
                                    </li>
                                    <li className="profile__item">
                                        <NavLink to="/user/payments" activeClassName="profile__link--active" className="profile__link">
                                            <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('credit-card')}} />
                                            Payments
                                        </NavLink>
                                    </li>
                                    <li className="profile__item">
                                        <NavLink to="/user/promotions" activeClassName="profile__link--active" className="profile__link">
                                            <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('trending-up')}} />
                                            Promotions
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="profile__group profile__header">
                                <Switch>
                                    <Route path="/user/profile" render={() => <Main />}/>
                                    <Route path="/user/ads" render={() => <h1>Hehe</h1>}/>
                                    <Route path="/user/messages" render={() => <h1>Hehe</h1>}/>
                                    <Route path="/user/favourites" render={() => <h1>Hehe</h1>}/>
                                    <Route path="/user/settings" render={() => <h1>Hehe</h1>}/>
                                    <Route path="/user/payments" render={() => <h1>Hehe</h1>}/>
                                    <Route path="/user/promotions" render={() => <h1>Hehe</h1>}/>
                                    <Route path="*" render={() => <h1>404 Not Found</h1>} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Profile);
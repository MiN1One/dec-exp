import React, { PureComponent } from 'react';
import { NavLink, withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';

import Main from './Main';
import * as utils from '../../utilities/utilities';
import { ActiveAds, InactiveAds, PromotedAds } from './Ads';

class Profile extends PureComponent {
    constructor(props) {
        super(props);

        this.subAdsList = React.createRef();
        this.subMessagesList = React.createRef();
        this.subFavouritesList = React.createRef();

        this.slideSubLists = this.slideSubLists.bind(this);
    }

    slideSubLists() {
        if (this.props.match.params.section === 'ads') $(this.subAdsList.current).slideDown({ duration: 300 });
        else $(this.subAdsList.current).slideUp({ duration: 300 });
        if (this.props.match.params.section === 'messages') $(this.subMessagesList.current).slideDown({ duration: 300 });
        else $(this.subMessagesList.current).slideUp({ duration: 300 });
        if (this.props.match.params.section === 'favourites') $(this.subFavouritesList.current).slideDown({ duration: 300 });
        else $(this.subFavouritesList.current).slideUp({ duration: 300 });
    }

    componentDidMount() {
        this.slideSubLists();
    }
    
    componentDidUpdate() {
        this.slideSubLists();
    }

    render() {
        const Ads = (
            <React.Fragment>
                <ActiveAds {...this.props} />
                <InactiveAds {...this.props} />
                <PromotedAds {...this.props} />
            </React.Fragment>
        );

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
                                        <NavLink to="/user/profile" activeClassName="profile__link--active" className="profile__link">
                                            <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('user')}} />
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li className="profile__item">
                                        <NavLink to="/user/ads" activeClassName="profile__link--active-cursored" className="profile__link">
                                            <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('layout')}} />
                                            My Ads
                                        </NavLink>
                                        <div className="profile__item profile__item--sub" ref={this.subAdsList}>
                                            <NavLink to="/user/ads/active" activeClassName="profile__link--sub-active" className="profile__link">
                                                <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('message-square')}} />
                                                Active
                                            </NavLink>
                                            <NavLink to="/user/ads/inactive" activeClassName="profile__link--sub-active" className="profile__link">
                                                <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('archive')}} />
                                                Inactive
                                            </NavLink>
                                            <NavLink to="/user/ads/promoted" activeClassName="profile__link--sub-active" className="profile__link">
                                                <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('corner-right-up')}} />
                                                Promoted
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li className="profile__item">
                                        <NavLink to="/user/messages" activeClassName="profile__link--active-cursored" className="profile__link">
                                            <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('mail')}} />
                                            Messages
                                        </NavLink>
                                        <div className="profile__item profile__item--sub" ref={this.subMessagesList}>
                                            <NavLink to="/user/messages/inbox" activeClassName="profile__link--sub-active" className="profile__link">
                                                <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('inbox')}} />
                                                Inbox
                                            </NavLink>
                                            <NavLink to="/user/messages/sentbox" activeClassName="profile__link--sub-active" className="profile__link">
                                                <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('check-circle')}} />
                                                Sent
                                            </NavLink>
                                            <NavLink to="/user/messages/spam" activeClassName="profile__link--sub-active" className="profile__link">
                                                <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('trash')}} />
                                                Spam
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li className="profile__item">
                                        <NavLink to="/user/favourites" activeClassName="profile__link--active-cursored" className="profile__link">
                                            <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('heart')}} />
                                            Favourites
                                        </NavLink>
                                        <div className="profile__item profile__item--sub" ref={this.subFavouritesList}>
                                            <NavLink to="/user/favourites/ads" activeClassName="profile__link--sub-active" className="profile__link">
                                                <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('layout')}} />
                                                Ads
                                            </NavLink>
                                            <NavLink to="/user/favourites/searches" activeClassName="profile__link--sub-active" className="profile__link">
                                                <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('search')}} />
                                                Searches
                                            </NavLink>
                                        </div>
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
                                    <Route path="/user/ads" exact render={() => Ads} />
                                    <Route path="/user/ads/active" render={() => <ActiveAds {...this.props} />} />
                                    <Route path="/user/ads/inactive" render={() => <InactiveAds {...this.props} />} />
                                    <Route path="/user/ads/promoted" render={() => <PromotedAds {...this.props} />} />
                                    <Route path="/user/messages/inbox" render={() => <h1>Hehe</h1>}/>
                                    <Route path="/user/messages/sentbox" render={() => <h1>Hehe</h1>}/>
                                    <Route path="/user/messages/spam" render={() => <h1>Hehe</h1>}/>
                                    <Route path="/user/favourites/ads" render={() => <h1>Hehe</h1>}/>
                                    <Route path="/user/favourites/searches" render={() => <h1>Hehe</h1>}/>
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

const mapStateToProps = state => {
    return {
        data: state.data.data
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));
import React, { PureComponent } from 'react';
import { NavLink, withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';

import Main from './Main';
import * as utils from '../../utilities/utilities';
import { ActiveAds, InactiveAds, PromotedAds } from './Ads/Ads';
import { FavAds, FavSearches } from './Favourites';

class Profile extends PureComponent {
    constructor(props) {
        super(props);

        this.subAdsList = React.createRef();
        this.subMessagesList = React.createRef();
        this.subFavouritesList = React.createRef();

        this.slideSubLists = this.slideSubLists.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop() { document.documentElement.scrollTop = 0; }

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
        console.log('PROFILE uPDATEd');
    }
    
    componentDidUpdate(prevProps) {
        this.slideSubLists();
        if (this.props.match.url !== prevProps.match.url) this.scrollToTop();
    }

    render() {
        const Ads = (
            <React.Fragment>
                <ActiveAds {...this.props} />
                <InactiveAds {...this.props} />
                <PromotedAds {...this.props} />
            </React.Fragment>
        );

        const Favourites = (
            <React.Fragment>
                <FavAds {...this.props} />
                <FavSearches {...this.props} />
            </React.Fragment>
        )

        const activeAdsCount = this.props.data.length;
        const promotedAdsCount = this.props.data.filter(el => el.premium === true).length;
        const inactiveAdsCount = this.props.data.length;

        const favAdsCount = this.props.data.filter(el => el.favorite === true).length;
        const favSearchesCount = 0;

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
                                            <NavLink to="/user/ads/active" activeClassName="profile__link--sub-active" className="profile__link message-badge">
                                                <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('message-square')}} />
                                                Active
                                                {activeAdsCount !== 0 && <span className="message-badge__counter profile__mes-badge">{activeAdsCount}</span>}
                                            </NavLink>
                                            <NavLink to="/user/ads/inactive" activeClassName="profile__link--sub-active" className="profile__link message-badge">
                                                <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('archive')}} />
                                                Inactive
                                                {inactiveAdsCount !== 0 && <span className="message-badge__counter profile__mes-badge">{inactiveAdsCount}</span>}
                                            </NavLink>
                                            <NavLink to="/user/ads/promoted" activeClassName="profile__link--sub-active" className="profile__link message-badge">
                                                <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('corner-right-up')}} />
                                                Promoted
                                                {promotedAdsCount !== 0 && <span className="message-badge__counter profile__mes-badge">{promotedAdsCount}</span>}
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
                                            <NavLink to="/user/favourites/ads" activeClassName="profile__link--sub-active" className="profile__link message-badge">
                                                <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('layout')}} />
                                                Ads
                                                {favAdsCount !== 0 && <span className="message-badge__counter profile__mes-badge">{favAdsCount}</span>}
                                            </NavLink>
                                            <NavLink to="/user/favourites/searches" activeClassName="profile__link--sub-active" className="profile__link message-badge">
                                                <svg className="profile__icon" dangerouslySetInnerHTML={{__html: utils.use('search')}} />
                                                Searches
                                                {favSearchesCount !== 0 && <span className="message-badge__counter profile__mes-badge">{favSearchesCount}</span>}
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
                                    <Route path="/user/messages/inbox" exact render={() => <h1>Hehe</h1>}/>
                                    <Route path="/user/messages/sentbox" render={() => <h1>Hehe</h1>}/>
                                    <Route path="/user/messages/spam" render={() => <h1>Hehe</h1>}/>
                                    <Route path="/user/favourites" exact render={() => Favourites}/>
                                    <Route path="/user/favourites/ads" render={() => <FavAds {...this.props} />}/>
                                    <Route path="/user/favourites/searches" render={() => <FavSearches {...this.props} />}/>
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
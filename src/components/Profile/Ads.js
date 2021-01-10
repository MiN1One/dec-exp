import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Card from '../../components/Card';
import * as utils from '../../utilities/utilities';
import Tooltip from '../../UI/Tooltip';

class ActiveAds extends PureComponent {
    state = {
        sortBy: 'date'
    }

    render() {
        const ads = this.props.data.map((el, i) => <Card data={el} />);

        const adsFrom = this.props.data.map((el, i) => {
            return (
                <div className="profile__ad-wrapper">
                    <Link to="/" className="profile__ad" key={i}>
                        <figure className="profile__ad-figure">
                            <img className="profile__ad-img" src={el.img[0]} alt={el.title} />
                        </figure>
                        <div className="profile__ad-left">
                            <span className="profile__ad-title">{el.title}</span>
                            <div className="fdc d-flex profile__ad-main">
                                <span className="profile__ad-title profile__ad-title--sub mb-5">{el.location}</span>
                                <span className="profile__ad-title profile__ad-title--sub mb-5">{el.date}</span>
                                <span className="price-tag w-max">{el.price}</span>
                            </div>
                        </div>
                    </Link>
                    <div className="profile__ad-right">
                        <button className="profile__btn profile__btn--rounded DTool pos-rel DTool--bottom">
                            <svg className="profile__icon profile__icon--small" dangerouslySetInnerHTML={{__html: utils.use('edit-2')}} />
                            <Tooltip>Edit</Tooltip>
                        </button>
                        <button className="profile__btn profile__btn--rounded DTool pos-rel DTool--bottom">
                            <svg className="profile__icon profile__icon--small" dangerouslySetInnerHTML={{__html: utils.use('archive')}} />
                            <Tooltip>Deactivate</Tooltip>
                        </button>
                    </div>
                </div>
            )
        });

        return (
            <React.Fragment>
                <div className="profile__titlebar">
                    <h2 className="heading heading__2 profile__heading">Active Ads</h2>
                </div>
                <div className="profile__content fdc">
                    <div className="profile__extra mb-2">
                        Sort by:
                        <div className="profile__sort ml-1">
                            Date
                            <svg className="profile__icon profile__icon--small ml-5" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
                        </div>
                    </div>
                    <div className="profile__ads">
                        {adsFrom}
                    </div>
                </div>
            </React.Fragment>      
        )
    }
}

class InactiveAds extends PureComponent {

    render() {
        return (
            <React.Fragment>
                <div className="profile__titlebar">
                    <h2 className="heading heading__2 profile__heading">Inactive Ads</h2>
                </div>
                <div className="profile__content">

                </div>
            </React.Fragment>
        );
    }
}

class PromotedAds extends PureComponent {

    render() {
        return (
            <React.Fragment>
                <div className="profile__titlebar">
                    <h2 className="heading heading__2 profile__heading">Promoted Ads</h2>
                </div>
                <div className="profile__content">

                </div>
            </React.Fragment>
        );
    }
}

export { ActiveAds, InactiveAds, PromotedAds };
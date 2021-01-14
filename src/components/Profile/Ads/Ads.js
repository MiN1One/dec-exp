import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import * as utils from '../../../utilities/utilities';
import Tooltip from '../../../UI/Tooltip';
import { AdsCard } from './AdCard';

class ActiveAds extends PureComponent {
    state = {
        sortBy: 'date'
    }

    onDeactivate = (id) => {

        // ----------------------

        // .....
    }

    render() {
        const ads = this.props.data.map((el, i) => <AdsCard el={el} view="active" key={el.id} />);

        return (
            <React.Fragment>
                <div className="profile__titlebar">
                    <h2 className="heading heading__2 profile__heading">Active Ads</h2>
                </div>
                    {/* <div className="profile__extra mb-2">
                        Sort by:
                        <div className="profile__sort ml-1">
                            Date
                            <svg className="profile__icon profile__icon--small ml-5" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
                        </div>
                    </div> */}
                    <div className="profile__ads">
                        {ads}
                    </div>
            </React.Fragment>      
        )
    }
}

class InactiveAds extends PureComponent {

    onActivate = (id) => {

        // ----------------------
        
        // .....
    }

    onRemove = (id) => {

        // ----------------------
        
        // .....
    }

    render() {
        const ads = this.props.data.map((el, i) => <AdsCard el={el} view="inactive" key={el.id} />);
        
        return (
            <React.Fragment>
                <div className="profile__titlebar">
                    <h2 className="heading heading__2 profile__heading">Inactive Ads</h2>
                </div>
                <div className="profile__ads">
                    {ads}
                </div>
            </React.Fragment>
        );
    }
}

class PromotedAds extends PureComponent {

    onDeactivate = (id) => {

        // ----------------------
        
        // .....
    }

    onActivate = (id) => {

        // ----------------------
        
        // .....
    }

    onActivate = (id) => {

        // ----------------------
        
        // .....
    }

    render() {
        const ads = this.props.data.filter(el => el.premium === true).map(el => <AdsCard el={el} view="active" key={el.id} />);

        return (
            <React.Fragment>
                <div className="profile__titlebar">
                    <h2 className="heading heading__2 profile__heading">Promoted Ads</h2>
                </div>
                <div className="profile__ads">
                    {ads}
                </div>
            </React.Fragment>
        );
    }
}

export { ActiveAds, InactiveAds, PromotedAds };

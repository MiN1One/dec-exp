import React, { PureComponent } from "react";
import { AdFull } from "./Ads/AdCard";

export class FavAds extends PureComponent {

    render() {
        const ads = this.props.data.filter(el => el.favorite === true).map(el => <AdFull el={el} favs />)

        return (
            <React.Fragment>
                <div className="profile__titlebar">
                    <h2 className="heading heading__2 profile__heading">Favourite Ads</h2>
                </div>
                <div className="profile__ads">
                    {ads}
                </div>
            </React.Fragment>
        );
    }
}

export class FavSearches extends PureComponent {

    render() {

        return (
            <React.Fragment>
                <div className="profile__titlebar">
                    <h2 className="heading heading__2 profile__heading">Favourite Searches</h2>
                </div>
                <div className="profile__content">
                    <ul className="profile__fav-list">
                        <li className="profile__fav-item">
                            
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}
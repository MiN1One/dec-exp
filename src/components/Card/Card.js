import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, withRouter } from 'react-router-dom';

import * as utils from '../../utilities/utilities';
import './Cards.scss';

const Card = (props) => {
    const pathname = props.match.url === '/' ? '/' : `${props.match.url}/`;

    return (
        <div className="Card" tabIndex={0}>
            <Link to={`${pathname}${props.data.id}`} className="Card__wrapper">
                <figure className="Card__fig">
                    <LazyLoadImage 
                        src={props.data.img[0]} 
                        effect="opacity" 
                        alt={props.data.title} 
                        className="Card__img" 
                        height="100%"
                        width="100%" />
                </figure>
                <div className="Card__list">
                    <div className="Card__item Card__item--group" data-premium={props.data.premium}>
                        <h5 className="Card__heading">{props.data.title}</h5>
                        <span className="badge">TOP</span>
                    </div>
                    <span className="Card__item">{props.data.date}</span>
                    <p className="Card__item Card__item--location">{props.data.location}</p>
                    <div className="Card__item Card__item--space">
                        <span className="price-tag">{props.data.price}</span>
                    </div>
                </div>
            </Link>
            <button className="Card__btn" data-favorite={props.data.favorite}>
                <svg className="Card__icon" dangerouslySetInnerHTML={{__html: utils.use('heart')}} />
            </button>
        </div>
    );
}

export default withRouter(Card);
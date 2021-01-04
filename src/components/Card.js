import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, withRouter } from 'react-router-dom';

import * as utils from '../utilities/utilities';

const Card = (props) => {
    const pathname = props.match.url === '/' ? '/' : `${props.match.url}/`;

    return (
        <div className="card" tabIndex={0}>
            <Link to={`${pathname}${props.data.id}`} className="card__wrapper">
                <figure className="card__fig">
                    <LazyLoadImage 
                        src={props.data.img[0]} 
                        effect="opacity" 
                        alt={props.data.title} 
                        className="card__img" 
                        height="100%"
                        width="100%" />
                </figure>
                <div className="card__list">
                    <div className="card__item card__item--group" data-premium={props.data.premium}>
                        <h5 className="card__heading">{props.data.title}</h5>
                        <span className="badge">TOP</span>
                    </div>
                    <span className="card__item">{props.data.date}</span>
                    <p className="card__item card__item--location">{props.data.location}</p>
                    <div className="card__item card__item--space">
                        <span className="price-tag">{props.data.price}</span>
                    </div>
                </div>
            </Link>
            <button className="card__btn" data-favorite={props.data.favorite}>
                <svg className="card__icon" dangerouslySetInnerHTML={{__html: utils.use('heart')}} />
            </button>
        </div>
    );
}

export default withRouter(Card);
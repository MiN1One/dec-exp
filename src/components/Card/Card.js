import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, withRouter } from 'react-router-dom';

import * as utils from '../../utilities/utilities';
import './Cards.scss';

const Card = (props) => {
    const pathname = props.match.url === '/' ? '/' : `${props.match.url}/`;

    return (
        <div className="Card" tabIndex={0}>
            <Link to={`${pathname}${props.data.id}`} className="Card__wrapper">
                <div className="Card__list Card__list--head">
                    <figure className="Card__fig">
                        <LazyLoadImage 
                            src={props.data.img} 
                            effect="opacity" 
                            alt={props.data.title} 
                            className="Card__img" 
                            height="100%"
                            width="100%" />
                    </figure>
                </div>
                <div className="Card__list">
                    <h5 className="Card__item Card__item--heading">{props.data.title}</h5>
                    <span className="Card__item">{props.data.date}</span>
                    <p className="Card__item Card__item--location">{props.data.location}</p>
                    <div className="Card__item Card__item--space">
                        <span className="Card__item--price">{props.data.price}</span>
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
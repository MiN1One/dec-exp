import { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './Cards.scss';

import sprite from '../../assets/icons/sprite.svg';
const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

class Card extends Component {

    render() {

        return (
            <div className="Card" tabIndex={0}>
                <a tabIndex="0" href="#" className="Card__wrapper">
                    <div className="Card__list Card__list--head">
                        <figure className="Card__fig">
                            <LazyLoadImage 
                                src={this.props.data.img} 
                                effect="opacity" 
                                alt={this.props.data.title} 
                                className="Card__img" 
                                height="100%"
                                width="100%" />
                        </figure>
                    </div>
                    <div className="Card__list">
                        <h5 className="Card__item Card__item--heading">{this.props.data.title}</h5>
                        <span className="Card__item">{this.props.data.date}</span>
                        <p className="Card__item Card__item--location">{this.props.data.location}</p>
                        <div className="Card__item Card__item--space">
                            <span className="Card__item--price">{this.props.data.price}</span>
                        </div>
                    </div>
                </a>
                <button className="Card__btn" data-favorite={this.props.data.favorite}>
                    <svg className="Card__icon" dangerouslySetInnerHTML={{__html: use('heart')}} />
                </button>
            </div>
        );
    }
}

export default Card;
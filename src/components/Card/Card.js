import { Component } from 'react';
import './Cards.scss';

import sprite from '../../assets/icons/sprite.svg';
const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

class Card extends Component {

    render() {

        return (
            <a tabIndex="0" href="#" className="Card">
                <div className="Card__list Card__list--head">
                    <figure className="Card__fig">
                        <img src={this.props.data.img} alt={this.props.data.title} className="Card__img" />
                    </figure>
                </div>
                <div className="Card__list">
                    <h5 className="Card__item Card__item--heading">{this.props.data.title}</h5>
                    <span className="Card__item">{this.props.data.date}</span>
                    <p className="Card__item Card__item--location">{this.props.data.location}</p>
                    <div className="Card__item Card__item--space">
                        <span className="Card__item--price">{this.props.data.price}</span>
                        <button className="Card__btn">
                            <svg className="Card__icon" dangerouslySetInnerHTML={{__html: use('heart')}} />
                        </button>
                    </div>
                </div>

            </a>
        );
    }
}

export default Card;
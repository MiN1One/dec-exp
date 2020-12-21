import { Component } from 'react';
import './Cards.scss';

import sprite from '../../assets/icons/sprite.svg';
const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

class Card extends Component {

    render() {

        return (
            <div tabIndex="0" href="#" className="Card">
                <div className="Card__head">
                    <img src={this.props.data.img} alt={this.props.data.title} />
                </div>
                <div className="Card__body">
                    <h5 className="Card__heading">{this.props.data.title}</h5>
                    {this.props.data.location}
                    {this.props.data.date}
                </div>
                <div className="Card__footer">
                    {this.props.data.price}
                    <svg className="Header__icon" dangerouslySetInnerHTML={{__html: use('star')}} />
                </div>
            </div>
        );
    }
}

export default Card;
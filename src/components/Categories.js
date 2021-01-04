import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import catItems from '../store/Categories/categories';
import * as utils from '../utilities/utilities';

import Backdrop from '../UI/Backdrop';

SwiperCore.use([Mousewheel, Scrollbar]);

class Categories extends PureComponent {
    state = {
        catItems,
        activeCat: null,
    }

    componentDidUpdate() {
        console.log('updated')
    }

    setActiveCat = (cat) => this.setState({ activeCat: cat }, console.log('over'));
    unsetActiveCat = () => this.setState({ activeCat: null }, console.log('out'));

    onClickItem = () => {
        if (this.props.clickItem) this.props.clickItem();
    } 

    render() {
        const catItemsArr = [];
        for (let key in this.state.catItems) {
            catItemsArr.push({
                id: key,
                title: this.state.catItems[key].val,
                icon: this.state.catItems[key].icon
            });
        }

        const catItems = catItemsArr.map((el) => {
            return (
                <div 
                    className="categories__item"
                    key={el.id}
                    onClick={() => this.setActiveCat(el.id)}>
                    <div className="categories__link">
                        <div className="categories__group">
                            <svg className="categories__icon categories__icon--cat" dangerouslySetInnerHTML={{__html: utils.useCat(el.icon)}} />
                            {el.title}
                        </div>
                        <svg className="categories__icon categories__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                    </div>
                </div>
            );
        });
        
        let subItems = null;
        if (this.state.activeCat) {
            subItems = this.state.catItems[this.state.activeCat].subItems.map((el, i) => {
                return (
                    <li className="categories__subitem" key={i}>
                        <Link to={`/${utils.slug(this.state.catItems[this.state.activeCat].val)}/${utils.slug(el)}`} className="categories__link categories__link--sub" onClick={() => this.onClickItem()}>
                            <svg className="categories__icon categories__icon--sub" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                            {el}
                        </Link>
                    </li>
                );
            });
        }
        
        return (
            <React.Fragment>
                {this.state.activeCat && <Backdrop z={9} click={this.unsetActiveCat} />}
                <div className={`categories ${this.props.class ? this.props.class : ''}`}>
                    <div className="categories__head">
                        <h2 className="categories__heading">Categories</h2>
                        <Link to="/cats/all" className="categories__btn">See all</Link>
                    </div>
                    <ul className="categories__list">
                        {catItems}
                        <li className="categories__item">
                            <Link to="/exchange" className="categories__link">
                                <div className="categories__group">
                                    <svg className="categories__icon categories__icon--cat" dangerouslySetInnerHTML={{__html: utils.useCat('handshake-o')}} />
                                    Exchange
                                </div>
                                <svg className="categories__icon categories__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                            </Link>
                        </li>
                        <li className="categories__item">
                            <Link to="/give_away" className="categories__link">
                                <div className="categories__group">
                                    <svg className="categories__icon categories__icon--cat" dangerouslySetInnerHTML={{__html: utils.useCat('gift2')}} />
                                    Give away
                                </div>
                                <svg className="categories__icon categories__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                            </Link>
                        </li>
                    </ul>
                    {this.state.activeCat && 
                        <div className="categories__panel">
                            <div className="categories__subhead">
                                <h2 className="categories__heading categories__heading--sub">
                                    {this.state.catItems[this.state.activeCat].val}
                                    <svg className="categories__icon--large" dangerouslySetInnerHTML={{__html: utils.useCat(this.state.catItems[this.state.activeCat].icon)}} />
                                </h2>
                                <button className="categories__btn categories__btn--sub" onClick={() => this.unsetActiveCat()}>
                                    <svg className="categories__icon categories__icon--close" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                </button>
                            </div>
                            <ul className="categories__sublist">
                                {subItems}
                            </ul>
                        </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default React.memo(Categories);
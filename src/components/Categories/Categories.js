import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import catItems from '../../store/Categories/categories';
import * as utils from '../../utilities/utilities';

import Backdrop from '../../UI/Backdrop/Backdrop';
import './Categories.scss';
import Scrollbars from 'react-custom-scrollbars';

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
                icon: this.state.catItems[key].icon,
                // link: slugify(this.state.catItems[key].val, {
                //     replacement: '-',
                //     lower: true
                // })
            });
        }

        const catItems = catItemsArr.map((el) => {
            return (
                <div 
                    className="Categories__item"
                    key={el.id}
                    onClick={() => this.setActiveCat(el.id)}>
                    <div className="Categories__link">
                        <div className="Categories__group">
                            <svg className="Categories__icon Categories__icon--cat" dangerouslySetInnerHTML={{__html: utils.useCat(el.icon)}} />
                            {el.title}
                        </div>
                        <svg className="Categories__icon Categories__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                    </div>
                </div>
            );
        });
        
        let subItems = null;
        if (this.state.activeCat) {
            subItems = this.state.catItems[this.state.activeCat].subItems.map((el, i) => {
                return (
                    <li className="Categories__subitem" key={i}>
                        <Link to={`/${utils.slug(this.state.catItems[this.state.activeCat].val)}/${utils.slug(el)}`} className="Categories__link Categories__link--sub" onClick={() => this.onClickItem()}>
                            <svg className="Categories__icon Categories__icon--sub" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                            {el}
                        </Link>
                    </li>
                );
            });
        }
        
        return (
            <React.Fragment>
                {this.state.activeCat && <Backdrop z={9} click={this.unsetActiveCat} />}
                <div className={`Categories ${this.props.class ? this.props.class : ''}`}>
                    <div className="Categories__head">
                        <h2 className="Categories__heading">Categories</h2>
                        <Link to="/cats/all" className="Categories__btn">See all</Link>
                    </div>
                    <ul className="Categories__list">
                        {catItems}
                        <li className="Categories__item">
                            <Link to="/exchange" className="Categories__link">
                                <div className="Categories__group">
                                    <svg className="Categories__icon Categories__icon--cat" dangerouslySetInnerHTML={{__html: utils.useCat('handshake-o')}} />
                                    Exchange
                                </div>
                                <svg className="Categories__icon Categories__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                            </Link>
                        </li>
                        <li className="Categories__item">
                            <Link to="/give_away" className="Categories__link">
                                <div className="Categories__group">
                                    <svg className="Categories__icon Categories__icon--cat" dangerouslySetInnerHTML={{__html: utils.useCat('gift2')}} />
                                    Give away
                                </div>
                                <svg className="Categories__icon Categories__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                            </Link>
                        </li>
                    </ul>
                    {this.state.activeCat && 
                        <div className="Categories__panel">
                            <div className="Categories__subhead">
                                <h2 className="Categories__heading Categories__heading--sub">
                                    {this.state.catItems[this.state.activeCat].val}
                                    <svg className="Categories__icon--large" dangerouslySetInnerHTML={{__html: utils.useCat(this.state.catItems[this.state.activeCat].icon)}} />
                                </h2>
                                <button className="Categories__btn Categories__btn--sub" onClick={() => this.unsetActiveCat()}>
                                    <svg className="Categories__icon Categories__icon--close" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                </button>
                            </div>
                            <ul className="Categories__sublist">
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


/* 
{this.state.activeCat && <Backdrop z={9} click={this.unsetActiveCat} />}
                <div className={`Categories ${this.props.class ? this.props.class : ''}`}>
                    <div className="Categories__head">
                        <h2 className="Categories__heading">Categories</h2>
                        <Link to="/cats/all" className="Categories__btn">See all</Link>
                    </div>
                    <ul className="Categories__list">
                        {catItems}
                        <li className="Categories__item">
                            <Link to="/exchange" className="Categories__link">
                                <div className="Categories__group">
                                    <svg className="Categories__icon Categories__icon--cat" dangerouslySetInnerHTML={{__html: utils.useCat('handshake-o')}} />
                                    Exchange
                                </div>
                                <svg className="Categories__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                            </Link>
                        </li>
                        <li className="Categories__item">
                            <Link to="/give_away" className="Categories__link">
                                <div className="Categories__group">
                                    <svg className="Categories__icon Categories__icon--cat" dangerouslySetInnerHTML={{__html: utils.useCat('gift2')}} />
                                    Give away
                                </div>
                                <svg className="Categories__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                            </Link>
                        </li>
                    </ul>
                    {this.state.activeCat && 
                        <div className="Categories__panel">
                            <div className="Categories__subhead">
                                <h2 className="Categories__heading Categories__heading--sub">
                                    {this.state.catItems[this.state.activeCat].val}
                                    <svg className="Categories__icon--large" dangerouslySetInnerHTML={{__html: utils.useCat(this.state.catItems[this.state.activeCat].icon)}} />
                                </h2>
                                <button className="Categories__btn Categories__btn--sub" onClick={() => this.unsetActiveCat()}>
                                    <svg className="Categories__icon Categories__icon--close" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                </button>
                            </div>
                            <ul className="Categories__sublist">
                                {subItems}
                            </ul>
                        </div>
                    }
                </div>
                */

                /*
                const catItems = catItemsArr.map((el) => {
            return (
                <li 
                    className="Categories__item"
                    key={el.id}
                    onClick={() => this.setActiveCat(el.id)}>
                    <div className="Categories__link">
                        <div className="Categories__group">
                            <svg className="Categories__icon Categories__icon--cat" dangerouslySetInnerHTML={{__html: utils.useCat(el.icon)}} />
                            {el.title}
                        </div>
                        <svg className="Categories__icon" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                    </div>
                </li>
            );
        });
        */
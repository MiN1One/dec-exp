import React, { Component } from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import sprite from '../../assets/icons/sprite.svg';
import './Categories.scss';

const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

class Categories extends Component {
    state = {
        catItems: {
            kids: {
                val: 'For kids',
                subItems: ['item1', 'item1', 'item1', 'item1', 'item1', 'item1', 'item1'],
                icon: 'Icon'
            },
            props: {
                val: 'Properties',
                subItems: ['item2', 'item2', 'item2', 'item2', 'item2'],
                icon: 'Icon'
            },
            trans: {
                val: 'Transport / Auto',
                subItems: ['item3', 'item3', 'item3', 'item3', 'item3'],
                icon: 'Icon'
            },
            jobs: {
                val: 'Jobs',
                subItems: ['item4', 'item4', 'item4', 'item4', 'item4'],
                icon: 'Icon'
            },
            pets: {
                val: 'Pets',
                subItems: ['item5', 'item5', 'item5', 'item5', 'item5'],
                icon: 'Icon'
            },
            home: {
                val: 'Home & garden',
                subItems: ['item6', 'item6', 'item6', 'item6', 'item6'],
                icon: 'Icon'
            },
            business: {
                val: 'Business & services',
                subItems: ['item7', 'item7', 'item7', 'item7', 'item7'],
                icon: 'Icon'
            },
            fashion: {
                val: 'Fashion & style',
                subItems: ['item8', 'item8', 'item8', 'item8', 'item8'],
                icon: 'Icon'
            },
            sports: {
                val: 'Sports / Hobby & Comfort',
                subItems: ['item9', 'item9', 'item9', 'item9', 'item9'],
                icon: 'Icon'
            },
            exchange: {
                val: 'Exchange',
                subItems: ['item10', 'item10', 'item10', 'item10', 'item10'],
                icon: 'Icon'
            },
            give: {
                val: 'Give away',
                subItems: ['item11', 'item11', 'item11', 'item11', 'item11'],
                icon: 'Icon'
            }
        },
        activeCat: null,
    }

    componentDidUpdate() {
        console.log('updated')
    }

    setActiveCat = (cat) => this.setState({ activeCat: cat }, console.log('over'));
    unsetActiveCat = () => this.setState({ activeCat: null }, console.log('out'));

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
                <li 
                    className="Categories__item"
                    key={el.id}
                    onClick={() => this.setActiveCat(el.id)}>
                    <div className="Categories__link">
                        {/* <svg className="Categories__icon" dangerouslySetInnerHTML={{__html: use(el.icon)}} /> */}
                        {el.title}
                        <svg className="Categories__icon" dangerouslySetInnerHTML={{__html: use('chevron-right')}} />
                    </div>
                </li>
            );
        });

        let subItems = null;
        if (this.state.activeCat) {
            subItems = this.state.catItems[this.state.activeCat].subItems.map((el, i) => {
                return (
                    <li className="Categories__subitem" key={i}>
                        <a href="#" className="Categories__link Categories__link--sub">
                            {el}
                        </a>
                    </li>
                );
            });
        }
        
        return (
            <React.Fragment>
                {this.state.activeCat && <Backdrop z={9} click={this.unsetActiveCat} />}
                <div className="Categories">
                    <div className="Categories__head">
                        <h2 className="Categories__heading">Categories</h2>
                        <a href="#seeall" className="Categories__btn">See all</a>
                    </div>
                    <ul className="Categories__list">
                        {catItems}
                    </ul>
                    {
                        this.state.activeCat && 
                            <div className="Categories__panel">
                                <div className="Categories__subhead">
                                    <h2 className="Categories__heading Categories__heading--sub">{this.state.activeCat && this.state.catItems[this.state.activeCat].val}</h2>
                                    <button className="Categories__btn Categories__btn--sub" onClick={() => this.unsetActiveCat()}>
                                        <svg className="Categories__icon Categories__icon--close" dangerouslySetInnerHTML={{__html: use('clear')}} />
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

export default Categories;
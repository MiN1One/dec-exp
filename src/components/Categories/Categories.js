import React, { PureComponent } from 'react';
import slugify from 'slugify';
import { Link } from 'react-router-dom';

import Backdrop from '../../UI/Backdrop/Backdrop';
import sprite from '../../assets/icons/sprite.svg';
import sprite_cats from '../../assets/icons/sprite-cat.svg';
import './Categories.scss';

const use = (sprite, svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

class Categories extends PureComponent {
    state = {
        catItems: null,
        activeCat: null,
    }

    async componentDidMount() {
        const catsObj = await import('../../store/Categories/categories');
        this.setState({ catItems: catsObj.default });
    }

    componentDidUpdate() {
        console.log('updated')
    }

    setActiveCat = (cat) => this.setState({ activeCat: cat }, console.log('over'));
    unsetActiveCat = () => this.setState({ activeCat: null }, console.log('out'));

    slug = (string) =>  slugify(string, { replacement: '_', lower: true, remove: /[*+~.()'"!:@/]/g });

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
                <li 
                    className="Categories__item"
                    key={el.id}
                    onClick={() => this.setActiveCat(el.id)}>
                    <div className="Categories__link">
                        <div className="Categories__group">
                            <svg className="Categories__icon Categories__icon--cat" dangerouslySetInnerHTML={{__html: use(sprite_cats, el.icon)}} />
                            {el.title}
                        </div>
                        <svg className="Categories__icon" dangerouslySetInnerHTML={{__html: use(sprite, 'chevron-right')}} />
                    </div>
                </li>
            );
        });
        
        let subItems = null;
        if (this.state.activeCat) {
            subItems = this.state.catItems[this.state.activeCat].subItems.map((el, i) => {
                return (
                    <li className="Categories__subitem" key={i}>
                        <Link to={`/${this.slug(this.state.catItems[this.state.activeCat].val)}/${this.slug(el)}`} className="Categories__link Categories__link--sub">
                            <svg className="Categories__icon Categories__icon--sub" dangerouslySetInnerHTML={{__html: use(sprite, 'chevron-right')}} />
                            {el}
                        </Link>
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
                        <Link to="/cats/all" className="Categories__btn">See all</Link>
                    </div>
                    <ul className="Categories__list">
                        {catItems}
                        <li className="Categories__item">
                            <Link to="/exchange" className="Categories__link">
                                <div className="Categories__group">
                                    <svg className="Categories__icon Categories__icon--cat" dangerouslySetInnerHTML={{__html: use(sprite_cats,'handshake-o')}} />
                                    Exchange
                                </div>
                                <svg className="Categories__icon" dangerouslySetInnerHTML={{__html: use(sprite, 'chevron-right')}} />
                            </Link>
                        </li>
                        <li className="Categories__item">
                            <Link to="/give_away" className="Categories__link">
                                <div className="Categories__group">
                                    <svg className="Categories__icon Categories__icon--cat" dangerouslySetInnerHTML={{__html: use(sprite_cats,'gift2')}} />
                                    Give away
                                </div>
                                <svg className="Categories__icon" dangerouslySetInnerHTML={{__html: use(sprite, 'chevron-right')}} />
                            </Link>
                        </li>
                    </ul>
                    {this.state.activeCat && 
                        <div className="Categories__panel">
                            <div className="Categories__subhead">
                                <h2 className="Categories__heading Categories__heading--sub">
                                    {this.state.catItems[this.state.activeCat].val}
                                    <svg className="Categories__icon--large" dangerouslySetInnerHTML={{__html: use(sprite_cats, this.state.catItems[this.state.activeCat].icon)}} />
                                </h2>
                                <button className="Categories__btn Categories__btn--sub" onClick={() => this.unsetActiveCat()}>
                                    <svg className="Categories__icon Categories__icon--close" dangerouslySetInnerHTML={{__html: use(sprite, 'x')}} />
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
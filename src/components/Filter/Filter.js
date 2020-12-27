import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Filter.scss';
import sprite from '../../assets/icons/sprite.svg';
import Dropdown from '../Dropdown/Dropdown';
import * as actions from '../../store/actions';

const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

class Filter extends PureComponent {
    state = {
        filterConfig: {}
    }

    async componentDidMount() {
        const pathname = this.props.history.location.pathname;
        const url = pathname.split('/').toString().replace('', '/').split(',');
        const filter = await import(`../../store/Filters/${url[1]}`);
        console.log(filter)
        this.setState({ filterConfig: filter.default });
    }

    formatRouteString = (string) => {
        let str = string.charAt(0).toUpperCase() + string.slice(1);
        if (str.includes('_')) str = str.split('_').join(' ');
        return str;
    }

    capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    toLower = (str) => str.charAt(0).toLowerCase() + str.slice(1);

    render() {
        const pathname = this.props.history.location.pathname;
        const url = pathname.split('/').toString().replace('', '/').split(',');
        const [ home, category, subCategory ] = url;

        let subCatItems;
        let counters;
        
        const categoryObj = this.state.filterConfig[category];
        
        if (categoryObj) {

            const innerSubCatItems = categoryObj.items[subCategory];

            subCatItems = innerSubCatItems.sub.map((obj, index) => {

                const innerItems = obj.items.map((el, i) => {
                    return <div className="Filter__dropitem" key={i} onClick={() => this.props[obj.method](this.toLower(el))}>{this.capitalize(el)}</div>
                });

                return (
                    <li className="Filter__item" key={index}>
                        <p className="Filter__title">{obj.title}</p>
                        <div className="Filter__input input">
                            {this.capitalize(this.props[this.toLower(obj.title)])}
                            <svg className="Filter__icon Filter__icon--arrow" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                            <Dropdown class="Dropdown--full Dropdown--sm-s">
                                {innerItems}
                            </Dropdown>
                        </div>
                    </li>
                );
            });
        
            counters = innerSubCatItems.counters.map((el, i) => {
                return (
                    <li className="Filter__item" key={i}>
                        <p className="Filter__title">{el.title}</p>
                        <div className="Filter__group">
                            <label className="Filter__label">
                                <input 
                                    type="text" 
                                    className="Filter__input Filter__input--small input" 
                                    placeholder="from" 
                                    onChange={(e) => this.props[el.method](e.target.value)} 
                                    value={this.props[this.toLower(el.title)].from} />
                                <button className="Filter__btn Filter__btn--abs" onClick={() => this.props[el.method]('')}>
                                    <svg className="Filter__icon Filter__icon--arrow" dangerouslySetInnerHTML={{__html: use('x')}} />
                                </button>
                            </label>
                            <label className="Filter__label">
                                <input 
                                    type="text" 
                                    className="Filter__input Filter__input--small Filter__input--border  input" 
                                    placeholder="to" 
                                    onChange={(e) => this.props[el.methodEnd](e.target.value)} 
                                    value={this.props[this.toLower(el.title)].to} />
                                <button className="Filter__btn Filter__btn--abs" onClick={() => this.props[el.methodEnd]('')}>
                                    <svg className="Filter__icon Filter__icon--arrow" dangerouslySetInnerHTML={{__html: use('x')}} />
                                </button>
                            </label>
                        </div>
                    </li>
                )
            });
        } else return <h1>404 Not found!</h1>;

        return (
            <section className="Filter">
                <div className="container">
                    <div className="Filter__wrapper">
                        <div className="Filter__list Filter__list--headline">
                            <h3 className="heading heading__3 Filter__heading">Filters</h3>
                            <div className="Filter__group">
                                <button className="Filter__btn" onClick={() => this.props.onChangeCardView('grid')}>
                                    <svg className="Filter__icon" dangerouslySetInnerHTML={{__html: use('grid')}} />
                                </button>
                                <button className="Filter__btn" onClick={() => this.props.onChangeCardView('list-view')}>
                                    <svg className="Filter__icon" dangerouslySetInnerHTML={{__html: use('list')}} />
                                </button>
                                <button className="Filter__btn" onClick={() => this.props.onClearFilter()}>
                                    <svg className="Filter__icon" dangerouslySetInnerHTML={{__html: use('trash-2')}} />
                                </button>
                            </div>
                        </div>
                        <ul className="Filter__list Filter__list--midline">
                            <li className="Filter__item">
                                <p className="Filter__title">Price</p>
                                <div className="Filter__group">
                                    <label className="Filter__label">
                                        <input 
                                            type="text" 
                                            className="Filter__input Filter__input--small input" 
                                            placeholder="from" 
                                            onChange={(e) => this.props.onFilterByPriceStart(e.target.value)} 
                                            value={this.props.price.from} />
                                        <button className="Filter__btn Filter__btn--abs" onClick={() => this.props.onFilterByPriceStart('')}>
                                            <svg className="Filter__icon Filter__icon--arrow" dangerouslySetInnerHTML={{__html: use('x')}} />
                                        </button>
                                    </label>
                                    <label className="Filter__label">
                                        <input 
                                            type="text" 
                                            className="Filter__input Filter__input--small Filter__input--border  input" 
                                            placeholder="to" 
                                            onChange={(e) => this.props.onFilterByPriceEnd(e.target.value)} 
                                            value={this.props.price.to} />
                                        <button className="Filter__btn Filter__btn--abs" onClick={() => this.props.onFilterByPriceEnd('')}>
                                            <svg className="Filter__icon Filter__icon--arrow" dangerouslySetInnerHTML={{__html: use('x')}} />
                                        </button>
                                    </label>
                                </div>
                            </li>
                            {counters}
                            {subCatItems}
                            <li className="Filter__item">
                                <p className="Filter__title">Sort by</p>
                                <div className="Filter__input input">
                                    {this.capitalize(this.props.sort)}
                                    <svg className="Filter__icon Filter__icon--arrow" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                                    <Dropdown class="Dropdown--full Dropdown--sm-s">
                                        <div className="Filter__dropitem" onClick={() => this.props.onSortBy('Date')}>Date</div>
                                        <div className="Filter__dropitem" onClick={() => this.props.onSortBy('Most expensive')}>Most expensive</div>
                                        <div className="Filter__dropitem" onClick={() => this.props.onSortBy('Cheapest')}>Cheapest</div>
                                    </Dropdown>
                                </div>
                            </li>
                        </ul>
                        <div className="Filter__list Filter__list--headline Filter__list--bottomline">
                            <ul className="Filter__group">
                                <li className="Filter__item Filter__item--types">
                                    <a href="#" className="Filter__link">Lalaku</a>
                                </li>
                                <li className="Filter__item Filter__item--types">
                                    <a href="#" className="Filter__link">Baby jackets</a>
                                </li>
                                <li className="Filter__item Filter__item--types">
                                    <a href="#" className="Filter__link">Baby Jeans</a>
                                </li>
                            </ul>
                            <div className="Filter__group">
                                <Link to="/" className="Filter__link">Home</Link>
                                <span className="Filter__link">&bull;</span>
                                <Link to={'/' + category} className="Filter__link">{this.formatRouteString(category)}</Link>
                                <span className="Filter__link">&bull;</span>
                                <Link to={pathname} className="Filter__link">{this.formatRouteString(subCategory)}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

const mapStateToProps = state => {
    return {
        condition: state.filters.condition,
        type: state.filters.type,
        price: state.filters.price,
        size: state.filters.size,
        sort: state.filters.sort,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFilterByPriceStart: (val) => dispatch(actions.filterByPriceStart(val)),
        onFilterByPriceEnd: (val) => dispatch(actions.filterByPriceEnd(val)),
        onFilterBySizeStart: (val) => dispatch(actions.filterBySizeStart(val)),
        onFilterBySizeEnd: (val) => dispatch(actions.filterBySizeEnd(val)),
        onFilterByCondition: (val) => dispatch(actions.filterByCondition(val)),
        onFilterByType: (val) => dispatch(actions.filterByType(val)),
        onSortBy: (val) => dispatch(actions.sortBy(val)),
        onChangeCardView: (val) => dispatch(actions.changeCardView(val)),
        onClearFilter: () => dispatch(actions.clearFiler())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Filter));
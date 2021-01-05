import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';
import * as actions from '../store/actions';
import * as utils from '../utilities/utilities';
import Tooltip from '../UI/Tooltip';

class Filter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filterConfig: {}
        }
        this.category = this.props.match.params.category;
        this.subCategory = this.props.match.params.subcategory;
    }

    importFilter = async (cat) => {
        try {
            const filter = await import(`../store/Filters/${cat}`);
            this.setState({ filterConfig: filter.default });
        } catch(er) {
            this.setState({ filterConfig: null });
            console.log(er);
        }
    }

    componentDidMount() {
        this.importFilter(this.category);
    }

    componentDidUpdate() {
        // console.log('this.category: ' + this.category);
        // window.category = this.category;
        // console.log('this.props...category: ' + this.props.match.params.category);
        if (this.props.match.params.category !== this.category) this.importFilter(this.props.match.params.category);
    }

    render() {

        let subCatItems;
        let counters;
        
        const categoryObj = this.state.filterConfig[this.props.match.params.category];
        
        if (categoryObj) {

            const innerSubCatItems = categoryObj.items[this.props.match.params.subcategory];

            subCatItems = innerSubCatItems.sub.map((obj, index) => {

                const innerItems = obj.items.map((el, i) => {
                    return <div className="filter__dropitem" key={i} onClick={() => this.props[obj.method](utils.toLower(el))}>{utils.capitalize(el)}</div>
                });

                return (
                    <li className="filter__item" key={index}>
                        <p className="filter__title">{obj.title}</p>
                        <div className="filter__input filter__input--d input" tabIndex="0">
                            {utils.capitalize(this.props[utils.toLower(obj.title)])}
                            <svg className="filter__icon filter__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
                            <Dropdown class="dropdown--full dropdown--sm-s">
                                {innerItems}
                            </Dropdown>
                        </div>
                    </li>
                );
            });
        
            counters = innerSubCatItems.counters.map((el, i) => {
                return (
                    <li className="filter__item" key={i}>
                        <p className="filter__title">{el.title}</p>
                        <div className="filter__group">
                            <label className="filter__label">
                                <input 
                                    type="text" 
                                    className="filter__input filter__input--small input" 
                                    placeholder="from" 
                                    onChange={(e) => this.props[el.method](e.target.value)} 
                                    value={this.props[utils.toLower(el.title)].from} />
                                <button className="filter__btn filter__btn--abs" onClick={() => this.props[el.method]('')}>
                                    <svg className="filter__icon filter__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                </button>
                            </label>
                            <label className="filter__label">
                                <input 
                                    type="text" 
                                    className="filter__input filter__input--small filter__input--border  input" 
                                    placeholder="to" 
                                    onChange={(e) => this.props[el.methodEnd](e.target.value)} 
                                    value={this.props[utils.toLower(el.title)].to} />
                                <button className="filter__btn filter__btn--abs" onClick={() => this.props[el.methodEnd]('')}>
                                    <svg className="filter__icon filter__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                </button>
                            </label>
                        </div>
                    </li>
                )
            });
        } else return <h1>404 Not found!</h1>;

        return (
            <React.Fragment>
                <div className="filter">
                    <div className="container">
                        <div className="filter__wrapper">
                            <div className="filter__list filter__list--headline">
                                <h3 className="heading heading__3 filter__heading">Filters</h3>
                                <div className="filter__group">
                                    <button className="filter__btn filter__btn--close" onClick={() => this.props.onClearFilter()}>
                                        Clear
                                        <svg className="filter__icon ml-5" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                    </button>
                                </div>
                            </div>
                            <ul className="filter__list filter__list--midline">
                                <li className="filter__item">
                                    <p className="filter__title">Price</p>
                                    <div className="filter__group">
                                        <label className="filter__label">
                                            <input 
                                                type="text" 
                                                className="filter__input filter__input--small input" 
                                                placeholder="from" 
                                                onChange={(e) => this.props.onFilterByPriceStart(e.target.value)} 
                                                value={this.props.price.from} />
                                            <button className="filter__btn filter__btn--abs" onClick={() => this.props.onFilterByPriceStart('')}>
                                                <svg className="filter__icon filter__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                            </button>
                                        </label>
                                        <label className="filter__label">
                                            <input 
                                                type="text" 
                                                className="filter__input filter__input--small filter__input--border  input" 
                                                placeholder="to" 
                                                onChange={(e) => this.props.onFilterByPriceEnd(e.target.value)} 
                                                value={this.props.price.to} />
                                            <button className="filter__btn filter__btn--abs" onClick={() => this.props.onFilterByPriceEnd('')}>
                                                <svg className="filter__icon filter__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                            </button>
                                        </label>
                                    </div>
                                </li>
                                {counters}
                                {subCatItems}
                                <li className="filter__item">
                                    <p className="filter__title">Sort by</p>
                                    <div className="filter__input filter__input--d input" tabIndex="0">
                                        {utils.capitalize(this.props.sort)}
                                        <svg className="filter__icon filter__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
                                        <Dropdown class="dropdown--full dropdown--sm-s">
                                            <div className="filter__dropitem" onClick={() => this.props.onSortBy('Date')}>Date</div>
                                            <div className="filter__dropitem" onClick={() => this.props.onSortBy('Most expensive')}>Most expensive</div>
                                            <div className="filter__dropitem" onClick={() => this.props.onSortBy('Cheapest')}>Cheapest</div>
                                        </Dropdown>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="filter__topline">
                    <div className="container">
                        <div className="filter__list filter__list--headline filter__list--stickline">
                            <ul className="filter__group">
                                <li className="tag tag__types filter__item--tags mr-15">
                                    <a href="#" className="filter__link filter__link--tags">Lalaku</a>
                                </li>
                                <li className="tag tag__types filter__item--tags mr-15">
                                    <a href="#" className="filter__link filter__link--tags">Baby jackets</a>
                                </li>
                                <li className="tag tag__types filter__item--tags mr-15">
                                    <a href="#" className="filter__link filter__link--tags">Baby Jeans</a>
                                </li>
                                <li className="tag tag__types filter__item--tags mr-15">
                                    <a href="#" className="filter__link filter__link--tags">Carriages</a>
                                </li>
                                <li className="tag tag__types filter__item--tags">
                                    <a href="#" className="filter__link filter__link--tags">Toys</a>
                                </li>
                            </ul>
                            <div className="filter__group h-100">
                                <Link to="/" className="filter__link filter__link--route">Home</Link>
                                <span className="filter__link filter__link--route">&bull;</span>
                                <Link to={'/' + this.category} className="filter__link filter__link--route">{utils.formatRouteString(this.category)}</Link>
                                <span className="filter__link filter__link--route">&bull;</span>
                                <span className="filter__link filter__link--route">{utils.formatRouteString(this.subCategory)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
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
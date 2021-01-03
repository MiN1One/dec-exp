import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Filter.scss';
import Dropdown from '../Dropdown/Dropdown';
import * as actions from '../../store/actions';
import * as utils from '../../utilities/utilities';

class Filter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filterConfig: {}
        }
        this.category = this.props.match.params.category;
        this.subCategory = this.props.match.params.subcategory;
    }

    async componentDidMount() {
        try {
            const filter = await import(`../../store/Filters/${this.category}`);
            this.setState({ filterConfig: filter.default });
        } catch(er) {
            this.setState({ filterConfig: null });
            console.log(er);
        }
    }

    // onChangeCardView = (list) => {
    //     const root = document.documentElement;
    //     root.style.setProperty('--flex-dir', 'column');
    //     root.style.setProperty('--flex-basis', '100%');
    //     root.style.setProperty('--mr-card', '0');
    //     root.style.setProperty('--mb-card', '2rem');
    //     root.style.setProperty('--wrap-card-width', '20%');
    //     root.style.setProperty('--wrap-card-flex-dir', 'row');
    //     root.style.setProperty('--wrap-card-flex-just', 'space-between');
    //     root.style.setProperty('--height-card', 'max-content');
    //     root.style.setProperty('--fav-card-pos', 'relative');
    //     root.style.setProperty('--wrap-card-flex-align', 'center');
    //     root.style.setProperty('--card-list-just', 'flex-end');
    // }

    render() {

        let subCatItems;
        let counters;
        
        const categoryObj = this.state.filterConfig[this.category];
        
        if (categoryObj) {

            const innerSubCatItems = categoryObj.items[this.subCategory];

            subCatItems = innerSubCatItems.sub.map((obj, index) => {

                const innerItems = obj.items.map((el, i) => {
                    return <div className="Filter__dropitem" key={i} onClick={() => this.props[obj.method](utils.toLower(el))}>{utils.capitalize(el)}</div>
                });

                return (
                    <li className="Filter__item" key={index}>
                        <p className="Filter__title">{obj.title}</p>
                        <div className="Filter__input input">
                            {utils.capitalize(this.props[utils.toLower(obj.title)])}
                            <svg className="Filter__icon Filter__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
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
                                    value={this.props[utils.toLower(el.title)].from} />
                                <button className="Filter__btn Filter__btn--abs" onClick={() => this.props[el.method]('')}>
                                    <svg className="Filter__icon Filter__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                </button>
                            </label>
                            <label className="Filter__label">
                                <input 
                                    type="text" 
                                    className="Filter__input Filter__input--small Filter__input--border  input" 
                                    placeholder="to" 
                                    onChange={(e) => this.props[el.methodEnd](e.target.value)} 
                                    value={this.props[utils.toLower(el.title)].to} />
                                <button className="Filter__btn Filter__btn--abs" onClick={() => this.props[el.methodEnd]('')}>
                                    <svg className="Filter__icon Filter__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
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
                                {/* <button className="Filter__btn" onClick={() => this.onChangeCardView()}>
                                    <svg className="Filter__icon" dangerouslySetInnerHTML={{__html: utils.use('grid')}} />
                                </button>
                                <button className="Filter__btn" onClick={() => this.onChangeCardView(true)}>
                                    <svg className="Filter__icon" dangerouslySetInnerHTML={{__html: utils.use('list')}} />
                                </button> */}
                                <button className="Filter__btn" onClick={() => this.props.onClearFilter()}>
                                    <svg className="Filter__icon" dangerouslySetInnerHTML={{__html: utils.use('trash-2')}} />
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
                                            <svg className="Filter__icon Filter__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
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
                                            <svg className="Filter__icon Filter__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                        </button>
                                    </label>
                                </div>
                            </li>
                            {counters}
                            {subCatItems}
                            <li className="Filter__item">
                                <p className="Filter__title">Sort by</p>
                                <div className="Filter__input input">
                                    {utils.capitalize(this.props.sort)}
                                    <svg className="Filter__icon Filter__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
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
                                <li className="tag tag__types">
                                    <a href="#" className="Filter__link Filter__link--tags">Lalaku</a>
                                </li>
                                <li className="tag tag__types">
                                    <a href="#" className="Filter__link Filter__link--tags">Baby jackets</a>
                                </li>
                                <li className="tag tag__types">
                                    <a href="#" className="Filter__link Filter__link--tags">Baby Jeans</a>
                                </li>
                            </ul>
                            <div className="Filter__group">
                                <Link to="/" className="Filter__link">Home</Link>
                                <span className="Filter__link">&bull;</span>
                                <Link to={'/' + this.category} className="Filter__link">{utils.formatRouteString(this.category)}</Link>
                                <span className="Filter__link">&bull;</span>
                                <span className="Filter__link">{utils.formatRouteString(this.subCategory)}</span>
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
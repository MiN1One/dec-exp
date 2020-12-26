import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';

import './Filter.scss';
import sprite from '../../assets/icons/sprite.svg';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

class Filter extends PureComponent {
    state = {
        filterConfig: {

        }
    }

    componentDidMount() {
        // const filterObj = await import('../../store/Filters/for_kids');
        import('../../store/Filters/for_kids')
            .then(async data => {
                await this.setState({ filterConfig: data.default });
                console.log(this.state.filterConfig);
                console.log(data.default);
            });
        // this.setState({ filterConfig: filterObj.default }, console.log(this.state.filterConfig));
    }

    formatRouteString = (string) => {
        let str = string.charAt(0).toUpperCase() + string.slice(1);
        if (str.includes('_')) str = str.split('_').join(' ');
        return str;
    }

    capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    render() {
        const pathname = this.props.history.location.pathname;
        const url = pathname.split('/').toString().replace('', '/').split(',');
        const [ home, category, subCategory ] = url;
    
        let subCatItems;
        let counters;
        if (this.state.filterConfig[category]) {
            subCatItems = this.state.filterConfig[category].items[subCategory].sub.map((obj, index) => {
                const innerItems = obj.items.map((el, i) => {
                    return <div className="Filter__dropitem" key={i} onClick={() => obj.method(el)}>{el}</div>
                });
                return (
                    <li className="Filter__item" key={index}>
                        <p className="Filter__title">{obj.title}</p>
                        <div className="Filter__input input">
                            {obj.def}
                            <svg className="Filter__icon Filter__icon--arrow" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                            <Dropdown class="Dropdown--full Dropdown--sm-s">
                                {innerItems}
                            </Dropdown>
                        </div>
                    </li>
                );
            });
            console.log(this.state.filterConfig[category]);
        
            counters = this.state.filterConfig[category].items[subCategory].counters.map((el, i) => {
                return (
                    <li className="Filter__item" key={i}>
                        <p className="Filter__title">{el.title}</p>
                        <div className="Filter__group">
                            <input type="text" className="Filter__input Filter__input--small input" placeholder="from" onChange={(e) => el.method(e.target.value)} />
                            <input type="text" className="Filter__input Filter__input--small input" placeholder="to" onChange={(e) => el.methodEnd(e.target.value)} />
                        </div>
                    </li>
                )
            });
        } else return <h1>404 Not found!</h1>;

        return (
            <div className="Filter">
                <div className="container">
                    <div className="Filter__wrapper">
                        <div className="Filter__list Filter__list--headline">
                            <h3 className="heading heading__3 Filter__heading">Filters</h3>
                            <div className="Filter__group">
                                <button className="Filter__btn">
                                    <svg className="Filter__icon" dangerouslySetInnerHTML={{__html: use('grid')}} />
                                </button>
                                <button className="Filter__btn">
                                    <svg className="Filter__icon" dangerouslySetInnerHTML={{__html: use('list')}} />
                                </button>
                                <button className="Filter__btn" onClick={() => {}}>
                                    <svg className="Filter__icon" dangerouslySetInnerHTML={{__html: use('trash-2')}} />
                                </button>
                            </div>
                        </div>
                        <ul className="Filter__list">
                            <li className="Filter__item">
                                <p className="Filter__title">Price</p>
                                <div className="Filter__group">
                                    <input type="text" className="Filter__input Filter__input--small input" placeholder="from" />
                                    <input type="text" className="Filter__input Filter__input--small input" placeholder="to" />
                                </div>
                            </li>
                            {counters}
                            {subCatItems}
                            <li className="Filter__item">
                                <p className="Filter__title">Sort by</p>
                                <div className="Filter__input input">
                                    Date
                                    <svg className="Filter__icon Filter__icon--arrow" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                                </div>
                            </li>
                        </ul>
                        <div className="Filter__list Filter__list--bottomline">
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
                                <Link to={'/' + url[1]} className="Filter__link">{this.formatRouteString(category)}</Link>
                                <span className="Filter__link">&bull;</span>
                                <Link to={pathname} className="Filter__link">{this.formatRouteString(subCategory)}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default withRouter(Filter);
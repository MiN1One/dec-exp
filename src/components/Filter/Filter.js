import { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router';
import $ from 'jquery';

import './Filter.scss';
import sprite from '../../assets/icons/sprite.svg';
import { Link } from 'react-router-dom';

const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

const Filter = (props) => {
    const filterConfig = {

    }

    const [hideFilters, setFilters] = useState(false);
    const wrapperRef = useRef();
    const filterRef = useRef();

    useEffect(() => {
        if (hideFilters) {
            filterRef.current.style.padding = '1.5rem 0';
            $(wrapperRef.current).slideUp({ duration: 300 });
        } else {
            filterRef.current.style.padding = '3rem 0';
            $(wrapperRef.current).slideDown({ duration: 300 });
        }
    }, [hideFilters]);

    const formatRouteString = (string) => {
        let str = string.charAt(0).toUpperCase() + string.slice(1);
        if (str.includes('-')) str = str.split('-').join(' ');
        return str;
    }

    const pathname = props.history.location.pathname;
    const url = pathname.split('/').toString().replace('', '/').split(',');

    const iconClass = ['Filter__icon Filter__icon--big'];
    if (hideFilters) iconClass.push('Filter__icon--rotate');

    return (
        <div className="Filter" ref={filterRef}>
            <div className="container">
                <div className="Filter__wrapper">
                    <div className="Filter__list Filter__list--headline">
                        <h3 className="heading heading__3 Filter__heading">
                            {/* <svg className="Filter__icon Filter__icon--head" dangerouslySetInnerHTML={{__html: use('filter')}} /> */}
                            Filters
                        </h3>
                        <div className="Filter__group">
                            <button className="Filter__btn">
                                <svg className="Filter__icon" dangerouslySetInnerHTML={{__html: use('grid')}} />
                            </button>
                            <button className="Filter__btn">
                                <svg className="Filter__icon" dangerouslySetInnerHTML={{__html: use('list')}} />
                            </button>
                            <button className="Filter__btn" onClick={() => setFilters(!hideFilters)}>
                                <svg className={iconClass.join(' ')} dangerouslySetInnerHTML={{__html: use('chevron-up')}} />
                            </button>
                        </div>
                    </div>
                    <div ref={wrapperRef}>
                        <ul className="Filter__list">
                            <li className="Filter__item">
                                <p className="Filter__title">Price</p>
                                <div className="Filter__group">
                                    <input type="text" className="Filter__input Filter__input--small input" placeholder="from" />
                                    <input type="text" className="Filter__input Filter__input--small input" placeholder="to" />
                                </div>
                            </li>
                            <li className="Filter__item">
                                <p className="Filter__title">Size</p>
                                <div className="Filter__group">
                                    <input type="text" className="Filter__input Filter__input--small input" placeholder="from" />
                                    <input type="text" className="Filter__input Filter__input--small input" placeholder="to" />
                                </div>
                            </li>
                            <li className="Filter__item">
                                <p className="Filter__title">Condition</p>
                                <div className="Filter__input input">
                                    All
                                    <svg className="Filter__icon" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                                </div>
                            </li>
                            <li className="Filter__item">
                                <p className="Filter__title">Type</p>
                                <div className="Filter__input input">
                                    All
                                    <svg className="Filter__icon" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                                </div>
                            </li>
                            <li className="Filter__item">
                                <p className="Filter__title">Sort by</p>
                                <div className="Filter__input input">
                                    Date
                                    <svg className="Filter__icon Filter__icon--small" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                                </div>
                            </li>
                            
                        </ul>
                        <div className="Filter__list Filter__list--bottomline">
                            <ul className="Filter__group">
                                <li className="Filter__item Filter__item--auto">
                                    <a href="#" className="Filter__link">Lalaku</a>
                                </li>
                                <li className="Filter__item Filter__item--auto">
                                    <a href="#" className="Filter__link">Baby jackets</a>
                                </li>
                                <li className="Filter__item Filter__item--auto">
                                    <a href="#" className="Filter__link">Baby Jeans</a>
                                </li>
                            </ul>
                            <div className="Filter__group">
                                <Link to="/" className="Filter__link">Home</Link>
                                <span className="Filter__link">&bull;</span>
                                <Link to={'/' + url[1]} className="Filter__link">{formatRouteString(url[1])}</Link>
                                <span className="Filter__link">&bull;</span>
                                <Link to={pathname} className="Filter__link">{formatRouteString(url[2])}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Filter);
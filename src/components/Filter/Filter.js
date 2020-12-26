import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router';
import $ from 'jquery';

import './Filter.scss';
import sprite from '../../assets/icons/sprite.svg';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

const Filter = (props) => {
    const filterConfig = {
        for_kids: {
            title: 'For kids',
            items: {
                clothing: {
                    title: 'Clothing',
                    counters: [
                        {
                            title: 'Size', 
                            method: (val) => console.log('Init val: ' + val),
                            methodEnd: (val) => console.log('End val: ' + val)
                        }
                    ],
                    sub: [
                        {
                            title: 'Condition', 
                            items: ['Used', 'New', 'All'],
                            def: 'All',
                            method: (el) => console.log('Condition: ' + el)
                        },
                        {
                            title: 'Type',
                            items: ['For boys', 'For girls', 'All'],
                            def: 'All',
                            method: (el) => console.log('Type: ' + el)
                        },
                    ]
                },
                furniture: {
                    title: 'Furniture',
                    counters: [],
                    sub: [{ title: 'Condition', items: ['Used', 'New', 'All'], def: 'All', method: (el) => console.log('Condition: ' + el) }]
                },
                toys: {
                    title: 'Toys',
                    counters: [],
                    sub: [{ title: 'Condition', items: ['Used', 'New', 'All'], def: 'All', method: (el) => console.log('Condition: ' + el) }]
                },
                educational_assets: {
                    title: 'Educational assets',
                    counters: [],
                    sub: [{ title: 'Condition', items: ['Used', 'New', 'All'], def: 'All', method: (el) => console.log('Condition: ' + el) }]
                },
                carriages: {
                    title: 'Carriages',
                    counters: [],
                    sub: [{ title: 'Condition', items: ['Used', 'New', 'All'], def: 'All', method: (el) => console.log('Condition: ' + el) }]
                },
                food: {
                    title: 'Food',
                    counters: [],
                    sub: [{ title: 'Condition', items: ['Used', 'New', 'All'], def: 'All', method: (el) => console.log('Condition: ' + el) }]
                },
                child_car_seats: {
                    title: 'Child car seats',
                    counters: [],
                    sub: [{ title: 'Condition', items: ['Used', 'New', 'All'], def: 'All', method: (el) => console.log('Condition: ' + el) }]
                },
                others: {
                    title: 'Others',
                    counters: [],
                    sub: [{ title: 'Condition', items: ['Used', 'New', 'All'], def: 'All', method: (el) => console.log('Condition: ' + el) }]
                }
            }
        },
    };

    const [hideFilters, setFilters] = useState(false);
    const wrapperRef = useRef();
    const filterRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        if (hideFilters) {
            filterRef.current.style.padding = '1.5rem 0';
            $(wrapperRef.current).slideUp({ duration: 300 });
        } else {
            filterRef.current.style.padding = '3rem 0';
            $(wrapperRef.current).slideDown({ duration: 300 });
        }
    }, [hideFilters]);

    const iconClass = ['Filter__icon Filter__icon--big'];
    if (hideFilters) iconClass.push('Filter__icon--rotate');

    const formatRouteString = (string) => {
        let str = string.charAt(0).toUpperCase() + string.slice(1);
        if (str.includes('_')) str = str.split('_').join(' ');
        return str;
    };

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const showDrop = (ev) => {
        // ev.target.style.backgroundColor = '#fff';
        // ev.target.style.borderRadius = '.7rem .7rem 0 0';
        // ev.target.nextSibling.style.opacity = 1;
        // ev.target.nextSibling.style.visibility = 'visible';
        inputRef.current.nextSibling.style.visibility = 'visible';
        inputRef.current.nextSibling.style.opacity = 1;
    };

    const onClickItem = (ev, obj, el) => {
        obj.method(el);
        ev.target.parentElement.style.opacity = 0;
        ev.target.parentElement.style.visibility = 'visible';
    };

    const pathname = props.history.location.pathname;
    const url = pathname.split('/').toString().replace('', '/').split(',');
    const [ home, category, subCategory ] = url;

    let subCatItems;
    let counters;
    if (filterConfig[category]) {

        subCatItems = filterConfig[category].items[subCategory].sub.map((obj, index) => {
            const innerItems = obj.items.map((el, i) => {
                return (
                    <div className="Dropdown__link" key={i} onClick={(event) => onClickItem(event, obj, el)}>
                        {el}
                    </div>
                );
            });
            return (
                <li className="Filter__item" key={index}>
                    <p className="Filter__title">{obj.title}</p>
                    <div tabIndex="0" className="Filter__input input">
                        {obj.def}
                        <svg className="Filter__icon" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                    </div>
                    <Dropdown class="Dropdown--full">
                        {innerItems}
                    </Dropdown>
                </li>
            );
        });
        console.log(filterConfig[category]);
    
        counters = filterConfig[category].items[subCategory].counters.map((el, i) => {
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
        <div className="Filter" ref={filterRef}>
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
                            {counters}
                            {subCatItems}
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
                                <Link to={'/' + url[1]} className="Filter__link">{formatRouteString(category)}</Link>
                                <span className="Filter__link">&bull;</span>
                                <Link to={pathname} className="Filter__link">{formatRouteString(subCategory)}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Filter);
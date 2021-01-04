import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import Logo from '../components/Logo';
import * as utils from '../utilities/utilities';
import Dropdown from './Dropdown';
import Backdrop from '../UI/Backdrop';

class searchbar extends PureComponent {
    state = {
        locations: ['Whole country', 'Andijan', 'Bukhara', 'Jizzakh', 'Kashkadarya', 'Navoi', 'Namangan', 'Samarkand', 'Surkhandarya', 'Sirdarya', 'Tashkent region', 'Fergana', 'Khorezm', 'Karakalpakistan', 'Tashkent'],
        showDrop: false
    }
    
    onClick = () => this.setState({ showDrop: true });
    onClickOutside = () => this.setState({ showDrop: false });

    onSubmit = (e) => {
        e.preventDefault();
    }

    changeSearchLocation = (location) => {
        this.props.onChangeSearchLoc(location);
        this.onClickOutside();
    }

    clearInput = (event) => {
        event.preventDefault();
        this.props.onChangeSearchInput('');
    }

    render() {
        const dropClass = ['dropdown--right--fix dropdown--full dropdown--pad'];
        if (this.state.showDrop) dropClass.push('dropdown--show');

        const locations = this.state.locations.map((el, i) => {
            return (
                <li className="dropdown__item dropdown__item--float" key={i} onClick={() => this.changeSearchLocation(el)}>{el}</li>
            );
        });

        return (
            <div className="searchbar">
                <div className="container">
                    <div className="searchbar__wrapper">
                        <Logo class="searchbar__logo" />
                        {this.state.showDrop && <Backdrop z={1} click={this.onClickOutside} />}
                        <form className="searchbar__form" onSubmit={(event) => this.onSubmit(event)}>
                            <label className="searchbar__label" htmlFor="search">
                                <input 
                                    className="searchbar__input"
                                    type="text"
                                    placeholder="Search"
                                    id="search"
                                    onChange={(ev) => this.props.onChangeSearchInput(ev.target.value)}
                                    value={this.props.search} />
                                <button className="searchbar__btn searchbar__btn--map searchbar__btn--clear" onClick={(e) => this.clearInput(e)} >
                                    <svg className="searchbar__icon searchbar__icon--map searchbar__icon--clear" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                </button>
                            </label>
                            <div className="searchbar__btn searchbar__btn--map" onClick={() => this.onClick()}>
                                    <svg className="searchbar__icon searchbar__icon--map" dangerouslySetInnerHTML={{__html: utils.use('map-pin')}} />
                                    <span className="searchbar__title">{this.props.searchLocation}</span>
                            </div>
                            
                            <button className="searchbar__btn" type="submit">
                                <svg className="searchbar__icon" dangerouslySetInnerHTML={{__html: utils.use('search')}} />
                            </button>
                            <Dropdown class={dropClass.join(' ')}>
                                <p className="dropdown__heading">Search in:</p>
                                <ul className="dropdown__wrap">
                                    {locations}
                                </ul>
                            </Dropdown>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchLocation: state.localization.searchLocation,
        search: state.data.search
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeSearchLoc: (loc) => dispatch(actions.changeSearchLoc(loc)),
        onChangeSearchInput: (search) => dispatch(actions.changeSearchInput(search))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(searchbar);
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Logo from '../../components/Logo/Logo';

import sprite from '../../assets/icons/sprite.svg';
import './Searchbar.scss';
import Dropdown from '../Dropdown/Dropdown';
import Backdrop from '../../UI/Backdrop/Backdrop';

const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

class Searchbar extends PureComponent {
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
        const dropClass = ['Dropdown--right--fix Dropdown--full Dropdown--pad'];
        if (this.state.showDrop) dropClass.push('Dropdown--show');

        const locations = this.state.locations.map((el, i) => {
            return (
                <li className="Dropdown__item Dropdown__item--float" key={i} onClick={() => this.changeSearchLocation(el)}>{el}</li>
            );
        });

        return (
            <div className="Searchbar">
                <div className="container">
                    <div className="Searchbar__wrapper">
                        <Logo class="Searchbar__logo" />
                        {this.state.showDrop && <Backdrop z={1} click={this.onClickOutside} />}
                        <form className="Searchbar__form" onSubmit={(event) => this.onSubmit(event)}>
                            <label className="Searchbar__label" for="search">
                                <input 
                                    className="Searchbar__input"
                                    type="text"
                                    placeholder="Search"
                                    id="search"
                                    onChange={(ev) => this.props.onChangeSearchInput(ev.target.value)}
                                    value={this.props.search} />
                                <button className="Searchbar__btn Searchbar__btn--map Searchbar__btn--clear" onClick={(e) => this.clearInput(e)} >
                                    <svg className="Searchbar__icon Searchbar__icon--map Searchbar__icon--clear" dangerouslySetInnerHTML={{__html: use('x')}} />
                                </button>
                            </label>
                            <div className="Searchbar__btn Searchbar__btn--map" onClick={() => this.onClick()}>
                                    <svg className="Searchbar__icon Searchbar__icon--map" dangerouslySetInnerHTML={{__html: use('map-pin')}} />
                                    <span className="Searchbar__title">{this.props.searchLocation}</span>
                            </div>
                            
                            <button className="Searchbar__btn" type="submit">
                                <svg className="Searchbar__icon" dangerouslySetInnerHTML={{__html: use('search')}} />
                            </button>
                            <Dropdown class={dropClass.join(' ')}>
                                <p className="Dropdown__heading">Search in:</p>
                                <ul className="Dropdown__wrap">
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

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
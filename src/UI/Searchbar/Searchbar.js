import { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Dropdown from '../../components/Dropdown/Dropdown';

import sprite from '../../assets/icons/sprite.svg';
import './Searchbar.scss';

const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

class Searchbar extends Component {
    state = {
        locations: ['Andijan', 'Bukhara', 'Jizzakh', 'Kashkadarya', 'Navoi', 'Namangan', 'Samarkand', 'Surkhandarya', 'Sirdarya', 'Tashkent region', 'Fergana', 'Khorezm', 'Karakalpakistan', 'Tashkent'],
        showDrop: false
    }
    
    onHover = () => this.setState({ showDrop: true });
    onMouseOut = () => this.setState({ showDrop: false });

    render() {
        const dropClass = ['Dropdown--small Dropdown--right--fix Dropdown--full Dropdown--big'];
        if (this.state.showDrop) dropClass.push('Dropdown--show');

        const locations = this.state.locations.map((el, i) => {
            return (
                <div className="Dropdown__item" key={i} onClick={() => this.props.onChangeSearchLoc(el)}>
                    <div className="Dropdown__link Dropdown__link--thin">{el}</div>
                </div>
            );
        });

        return (
            <form className={`Searchbar ${this.props.class ? this.props.class : ''}`}>
                <input className="Searchbar__input" type="text" placeholder="Search" />
                <div className="Searchbar__btn Searchbar__btn--map" onMouseEnter={() => this.onHover()} onMouseLeave={() => this.onMouseOut()}>
                    <svg className="Searchbar__icon Searchbar__icon--map" dangerouslySetInnerHTML={{__html: use('map-pin')}} />
                    <span className="Searchbar__title">{this.props.searchLocation}</span>
                </div>
                
                <button className="Searchbar__btn" type="submit">
                    <svg className="Searchbar__icon" dangerouslySetInnerHTML={{__html: use('search')}} />
                </button>
                <Dropdown class={dropClass.join(' ')}>
                    <div className="Dropdown__wrapper">
                        <p className="Dropdown__title">Search in:</p>
                        {locations}
                    </div>
                </Dropdown>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchLocation: state.localization.searchLocation
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeSearchLoc: (loc) => dispatch(actions.changeSearchLoc(loc))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
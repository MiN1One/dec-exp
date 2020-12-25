import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import sprite from '../../assets/icons/sprite.svg';
import Dropdown from '../Dropdown/Dropdown';
const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

const Language = (props) => {

    const langs = ['O\'zbekcha', 'English', 'Русский'];

    const langItems = langs.map((el, i) => {
        return (
            <div className="Dropdown__item" key={i} onClick={() => props.onChangeLanguage(el)}>
                <div className="Dropdown__link">{el}</div>
            </div>
        );
    });

    return (
        <div className={`Language ${props.class ? props.class : ''}`}>
            <svg className="Navigation__icon" dangerouslySetInnerHTML={{__html: use('globe')}} />
            <span className="Navigation__title">{props.lang}</span>
            <svg className="Navigation__icon Navigation__icon--arrow" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
            <Dropdown class={props.dropClass}>
                <p className="Dropdown__title">Language:</p>
                {langItems}
            </Dropdown>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        lang: state.localization.lang
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeLanguage: (lang) => dispatch(actions.changeLanguage(lang)),
        onChangeLocation: (loc) => dispatch(actions.changeLocation(loc))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Language);
import { connect } from 'react-redux';

import * as actions from '../store/actions';
import * as utils from '../utilities/utilities';
import Dropdown from './Dropdown';

const Language = (props) => {

    const langs = ['O\'zbekcha', 'English', 'Русский'];

    const langItems = langs.map((el, i) => {
        return (
            <div className="dropdown__item" key={i} onClick={() => props.onChangeLanguage(el)}>
                <div className="dropdown__link">{el}</div>
            </div>
        );
    });

    return (
        <div className={`language ${props.class ? props.class : ''}`} tabIndex="0">
            <svg className="navigation__icon" dangerouslySetInnerHTML={{__html: utils.use('globe')}} />
            <span className="navigation__title">{props.lang}</span>
            <svg className="navigation__icon navigation__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
            <Dropdown class={props.dropClass}>
                <p className="dropdown__title">Language:</p>
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
import Dropdown from '../Dropdown/Dropdown';

import './Footer.scss';
import sprite from '../../assets/icons/sprite.svg';
import Logo from '../Logo/Logo';


const Footer = props => {
    const use = (svg) => `<use xlink:href="${sprite}#${svg}"></use>`;

    const year = new Date().getFullYear();

    const langs = ['O\'zbekcha', 'English', 'Русский']
    const navs = ['Help', 'Enterprise Adverts', 'Terms of use', 'Privacy Policy', 'SBUY Guide', 'Security measures', 'Site map', 'Map of regions', 'Career', 'Feedback'];

    const navItems = navs.map((el, i) => {
        return (
            <li className="Footer__item" key={i}>
                <a href="#" className="Footer__link">{el}</a>
            </li>
        );
    });

    const langItems = langs.map((el, i) => {
        return (
            <div className="Dropdown__item" key={i} onClick={() => props.prefs.onChangeLanguage(el)}>
                <div className="Dropdown__link">{el}</div>
            </div>
        );
    });

    return (
        <div className="Footer">
            <div className="Footer__head">
                <div className="container">
                    <div className="Footer__headwrap">
                        <div className="Navigation__item">
                            <svg className="Footer__icon" dangerouslySetInnerHTML={{__html: use('home')}} />
                            <h5 className="Footer__heading">Home</h5>
                        </div>
                        <div className="Navigation__item">
                            <svg className="Navigation__icon" dangerouslySetInnerHTML={{__html: use('globe')}} />
                            <span className="Navigation__title">{props.prefs.lang}</span>
                            <svg className="Navigation__icon Navigation__icon--arrow" dangerouslySetInnerHTML={{__html: use('chevron-down')}} />
                            <Dropdown class="Dropdown--right-fix">
                                <p className="Dropdown__title">Language:</p>
                                {langItems}
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="Footer__wrapper">
                    <div className="Footer__body">
                        <div div className="Footer__group">
                            <Logo class="Footer__logo" />
                            <ul className="Footer__list">
                                {navItems}
                            </ul>
                            <p className="Footer__info">
                                For all questions, you can contact us<br/> at any convenient time by phone <br/>
                                +998 (71) 240-60-50 <br/>
                                sbuy@retail.uz
                            </p>
                        </div>
                        <p className="Footer__info">{year} SBUY&copy;</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
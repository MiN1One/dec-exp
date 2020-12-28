import React from 'react';

import './Footer.scss';
import Logo from '../Logo/Logo';
import Language from '../Language/Language';

import * as utils from '../../utilities/utilities';

const Footer = props => {

    const year = new Date().getFullYear();

    const navs = ['Help', 'Enterprise Adverts', 'Terms of use', 'Privacy Policy', 'SBUY Guide', 'Security measures', 'Site map', 'Map of regions', 'Career', 'Feedback'];

    const navItems = navs.map((el, i) => {
        return (
            <li className="Footer__item" key={i}>
                <a href="#" className="Footer__link">{el}</a>
            </li>
        );
    });

    return (
        <footer className="Footer">
            <div className="Footer__head">
                <div className="container">
                    <div className="Footer__headwrap">
                        <div className="Navigation__item">
                            <svg className="Footer__icon" dangerouslySetInnerHTML={{__html: utils.use('home')}} />
                            <h5 className="Footer__heading">Home</h5>
                        </div>
                        <Language class="Navigation__item" dropClass="Dropdown--right-fix" />
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
                                For all questions, you can contact us<br/> at any convenient time by phone or email<br/>
                                +998 (71) 240-60-50 <br/>
                                sbuy@retail.uz
                            </p>
                        </div>
                        <p className="Footer__info">{year} SBUY&copy;</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default React.memo(Footer);
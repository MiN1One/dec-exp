import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import Searchbar from '../components/Searchbar';

const Layout = (props) => {

    return (
        <React.Fragment>
            <Navigation />
                {props.children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
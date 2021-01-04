import React, { PureComponent } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Filter from '../components/Filter';
import Adview from '../components/Adview';
import Card from '../components/Card';

import * as utils from '../utilities/utilities';

class Main extends PureComponent {

    render() {
        const premium = this.props.premium.map((el, i) => <Card data={el} key={i} />);
        const allAds = this.props.data.map((el, i) => <Card data={el} key={i} />);

        return (
            <React.Fragment>
                <Filter />
                <Route path="/:category/:subcategory/:id" exact render={() => <Adview {...this.props} data={this.props.data} />} />
                <section className="main">
                    <div className="container">
                        <div className="main__wrapper">
                            <div className="main__head">
                                <div className="main__group">
                                    <h2 className="heading heading__2 main__heading mb-5 mr-1">Premiuim ads</h2>
                                    <Link to="/" className="filter__btn filter__btn--close main__link">See all</Link>
                                </div>
                                <p className="main__subhead">Found 1,354 ads in this category</p>
                            </div>
                            <div className="main__list">{premium}</div>
                            <div className="main__head">
                                <div>
                                    <h2 className="heading heading__2 main__heading mb-5">Usual ads</h2>
                                    <p className="main__subhead">Found 4,635 ads in this category</p>
                                </div>
                            </div>
                            <div className="main__list">{allAds}</div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data.data,
        premium: state.data.premium
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
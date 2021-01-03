import { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Adview from '../Adview/Adview';
import Card from '../../components/Card/Card';

import * as utils from '../../utilities/utilities';
import './Main.scss';

class Main extends PureComponent {

    render() {
        const popular = this.props.data.map((el, i) => {
            return (
                <Card data={el} key={i} />
            );
        });

        return (
            <section className="Main">
                <div className="container">
                    <div className="Main__wrapper">
                        <div>
                            <div className="Main__group">
                                <h3 className="Main__heading">Premiuim ads</h3>
                                <button className="Main__btn Main__btn--green btn btn__secondary btn__secondary--outline">
                                    See all
                                </button>
                            </div>
                            <div className="Main__list">
                                {popular}
                            </div>
                        </div>
                        {this.props.header && <button className="btn btn__primary btn__primary--outline Main__btn">
                            Show more
                            <svg className="Main__icon icon" dangerouslySetInnerHTML={{__html: utils.use('chevrons-down')}} />
                        </button>}
                        <Route path="/:category/:subcategory/:id" exact render={() => <Adview data={this.props.data} />} />
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
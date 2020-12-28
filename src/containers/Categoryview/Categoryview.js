import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Adsview from '../Adsview/Adsview';
import './Categoryview.scss';

const Categoryview = (props) => {
    // const pathname = this.props.history.location.pathname;
    // const url = pathname.split('/').toString().replace('', '/').split(',');
    // const [ home, category, subCategory ] = url;

    return (
        <section className="Subcategory">
            <div className="container">
                <div className="Subcategory__wrapper">
                    <Route path="/:category/:subcategory/:id" exact render={() => <Adsview data={props.data} />} />
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.data.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Categoryview);
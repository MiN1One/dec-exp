import { connect } from 'react-redux';

import * as actions from '../store/actions';

import Footer from '../components/Footer.js/Footer';
import Navigation from '../components/Navigation/Navigation';
import './App.scss';
import Header from './Header/Header';
import Authorization from '../components/Authorization/Authorization';

function App(props) {
  return (
    <div className="App">
      <Navigation prefs={{ ...props }} />
      <Header />
      <Footer prefs={{ ...props }} />
      {/* <Authorization /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.localization.lang,
    searchLocation: state.localization.searchLocation,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLanguage: (lang) => dispatch(actions.changeLanguage(lang)),
    onChangeLocation: (loc) => dispatch(actions.changeLocation(loc))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

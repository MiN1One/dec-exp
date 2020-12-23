import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import * as actions from '../store/actions';

import Footer from '../components/Footer.js/Footer';
import Navigation from '../components/Navigation/Navigation';
import './App.scss';
import Header from './Header/Header';
import Authorization from '../components/Authorization/Authorization';

function App(props) {
  const header = (
    <React.Fragment>
      <Navigation prefs={{ ...props }} />
      <Header />
      <Footer prefs={{ ...props }} />
    </React.Fragment>
  );

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => header}/>
        <Route path="/signin/:id" exact render={() => <Authorization type="signin"/>} />
        <Route path="/signup" exact render={() => <Authorization type="signup"/>} />
      </Switch>
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

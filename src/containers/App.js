import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Searchbar from '../components/Searchbar/Searchbar';
import Main from './Main/Main';
import Footer from '../components/Footer.js/Footer';
import Navigation from '../components/Navigation/Navigation';
import './App.scss';
import Header from './Header/Header';
import Filter from '../components/Filter/Filter';
import asyncComponent from '../hoc/asyncComponent/asyncComponent';

const AsyncAuthSignin = asyncComponent(() => import('../components/Authorization/AuthSignin'));
const AsyncAuthSignup = asyncComponent(() => import('../components/Authorization/AuthSignup'));
const AsyncResetPass = asyncComponent(() => import('../components/Authorization/ResetPass'));

function App() {
  const header = (
    <React.Fragment>
      <Navigation />
      <Searchbar />
      <Header />
      <Main header />
      <Footer />
    </React.Fragment>
  );
  const categories = (
    <React.Fragment>
      <Navigation cat />
      <Searchbar />
      <Filter />
      <Main />
      <Footer />
    </React.Fragment>
  );

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => header}/>
        <Route path="/signin" exact component={AsyncAuthSignin} />
        <Route path="/password-reset" exact component={AsyncResetPass} />
        <Route path="/signup" exact component={AsyncAuthSignup} />
        <Route path="/:category" exact render={() => <h1>All</h1>} />
        <Route path="/:category/:subcategory" render={() => categories} />
      </Switch>
    </div>
  );
};

export default App;

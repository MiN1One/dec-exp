import React from 'react';
import { Route, Switch } from 'react-router';

import Searchbar from '../components/Searchbar/Searchbar';
import Premium from '../components/Premium/Premium';
import Footer from '../components/Footer.js/Footer';
import Navigation from '../components/Navigation/Navigation';
import './App.scss';
import Header from './Header/Header';
import { ResetPass } from '../components/Authorization/ResetPass';
import AuthSignin from '../components/Authorization/AuthSignin';
import AuthSignup from '../components/Authorization/AuthSignup';
import Subcategory from './Subcategory/Subcategory';
import Filter from '../components/Filter/Filter';

function App() {
  const header = (
    <React.Fragment>
      <Navigation />
      <Searchbar />
      <Header />
      <Premium />
      <Footer />
    </React.Fragment>
  );
  const subCategory = (
    <React.Fragment>
      <Navigation cat />
      <Searchbar />
      <Filter />
      <Premium />
      <Subcategory />
      <Footer />
    </React.Fragment>
  )
  const category = (
    <React.Fragment>
      <Navigation cat />
      <Searchbar />
      <Premium />
      <Subcategory />
      <Footer />
    </React.Fragment>
  );

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => header}/>
        <Route path="/signin" exact component={AuthSignin} />
        <Route path="/password-reset" exact component={ResetPass} />
        <Route path="/signup" exact component={AuthSignup} />
        <Route path="/:category" exact render={() => <h1>All</h1>} />
        <Route path="/:category/:subcategory" exact render={() => subCategory} />
      </Switch>
    </div>
  );
};

export default App;

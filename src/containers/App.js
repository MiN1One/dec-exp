import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import Searchbar from '../components/Searchbar';
import Main from './Main';
// import Footer from '../components/Footer';
// import Navigation from '../components/Navigation';
import Header from './Header';
// import Filter from '../components/Filter';
import asyncComponent from '../hoc/asyncComponent/asyncComponent';
// import LoadingScreen from '../UI/LoadingScreen';
import Layout from './Layout';

const AsyncAuthSignin = asyncComponent(() => import('./AuthSignin'));
const AsyncAuthSignup = asyncComponent(() => import('./AuthSignup'));
const AsyncResetPass = asyncComponent(() => import('./ResetPass'));

function App() {
  // routes = (
  //   <React.Fragment>
  //     <Navigation />
  //     <Searchbar />
  //     <Header />
  //     <Main header />
  //     <Footer />
  //   </React.Fragment>
  // );
  // routes = (
  //   <React.Fragment>
  //     <Navigation cat />
  //     <Searchbar />
  //     <Filter />
  //     <Main />
  //     <Footer />
  //   </React.Fragment>
  // );
  // <div className="App">
  //   <Switch>
  //     <Route path="/" exact render={() => header}/>
  //   </Switch>
  // </div>
  const header = (
    <Layout>
      <Header />
    </Layout>
  );

  const main = (
    <Layout>
      <Main />
    </Layout>
  );

  const singleCategory = (
    <Layout>
       <h1>All</h1>
    </Layout>
  );
  
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => header} />
        <Route path="/signin" exact component={AsyncAuthSignin} />
        <Route path="/password-reset" exact component={AsyncResetPass} />
        <Route path="/signup" exact component={AsyncAuthSignup} />
        <Route path="/:category" exact render={() => singleCategory} />
        <Route path="/:category/:subcategory" render={() => main} />
      </Switch>
    </div>
  );
};

export default App;

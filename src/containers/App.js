import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './Main';
import Header from './Header';
import asyncComponent from '../hoc/asyncComponent/asyncComponent';
import Layout from './Layout';
import Post from './Post';

const AsyncAuthSignin = asyncComponent(() => import('./AuthSignin'));
const AsyncAuthSignup = asyncComponent(() => import('./AuthSignup'));
const AsyncResetPass = asyncComponent(() => import('./ResetPass'));

function App() {
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

  const post = (
    <Layout>
      <Post />
    </Layout>
  )
  
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => header} />
        <Route path="/signin" exact component={AsyncAuthSignin} />
        <Route path="/password-reset" exact component={AsyncResetPass} />
        <Route path="/signup" exact component={AsyncAuthSignup} />
        <Route path="/post-new" exact render={() => post} />
        <Route path="/all/:category" exact render={() => singleCategory} />
        <Route path="/:category/:subcategory" render={() => main} />
        <Route path="*" render={() => <h1>404 Not Found</h1>} />
      </Switch>
    </div>
  );
};

export default App;

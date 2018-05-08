import React from 'react';
import Router from 'react-router-dom/HashRouter'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import Home from './components/Home'
import RemoveDups from './components/RemoveDups'
import IsPalindrome from './components/IsPalindrome'

import AppLayout from './layout/main'

const Routes = () => (
  <Router>
    <AppLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/remove_dups" component={RemoveDups} />
        <Route path="/is_palindrome" component={IsPalindrome} />
      </Switch>
    </AppLayout>
  </Router>
)

export default Routes
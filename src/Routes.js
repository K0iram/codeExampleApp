import React from 'react';
import Router from 'react-router-dom/HashRouter'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import Home from './components/Home'
import RemoveDups from './components/RemoveDups'
import IsPalindrome from './components/IsPalindrome'
import VideoSearch from './components/YoutubeSearch'
import Fibonacci from './components/Fibonacci'
import MaxSubArray from './components/MaxSubArray'
import Primes from './components/Primes'
import MergeSorted from './components/MergeSorted'
import Fizzbuzz from './components/Fizzbuzz'

import AppLayout from './layout/main'

const Routes = () => (
  <Router>
    <AppLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/remove_dups" component={RemoveDups} />
        <Route path="/is_palindrome" component={IsPalindrome} />
        <Route path="/video_search" component={VideoSearch} />
        <Route path="/fibonacci" component={Fibonacci} />
        <Route path="/max_sub_array" component={MaxSubArray} />
        <Route path="/primes" component={Primes} />
        <Route path="/merged_sorted" component={MergeSorted} />
        <Route path="/fizzbuzz" component={Fizzbuzz} />

      </Switch>
    </AppLayout>
  </Router>
)

export default Routes
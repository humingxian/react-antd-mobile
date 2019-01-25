import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom'
import Loading from '../component/Loading/Loading'
import Loadable from 'react-loadable'

// 首页
const Home = Loadable({
  loader: () => import('../page/Home/Home'),
  loading: Loading
})

// FlexExample
const FlexExample = Loadable({
  loader: () => import('../page/Flex/FlexExample'),
  loading: Loading
})


class MyRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/flex" exact component={FlexExample} />
      </Switch>
    );
  }
}

export default MyRouter;

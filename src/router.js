import React, { Component} from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import App from './pages/app';
import Home from './pages/home';
import ErrorPage from './pages/error';

export default class Routers extends Component{
  render(){
    return (
      // BrowserRouter渲染出的是location.hash为'',HashRouter渲染出是location.hash为'#/home'
      <HashRouter>
        {/* 不加div或Switch会报error：A <Router> may have only one child element */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/app" component={App} />
          <Route path="/404" component={ErrorPage} />
          <Redirect from="*" to="/404" />
        </Switch>
      </HashRouter>
    )
  }
}

import React from 'react';
import {Switch} from 'react-router-dom';
import PageRoute from './PageRoute';
import Home from '../pages/home';
import News from '../pages/news';
import Info from '../pages/info';
import Rules from '../pages/rules';
import WhereWePlay from '../pages/whereWePlay';

export default () => (
  <Switch>
    <PageRoute path="/" exact component={Home} />
    <PageRoute path="/news" exact component={News} />
    <PageRoute path="/info" exact component={Info} />
    <PageRoute path="/rules" exact component={Rules} />
    <PageRoute path="/where-we-play" exact component={WhereWePlay} />
  </Switch>
);

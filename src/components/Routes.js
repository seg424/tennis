import React from 'react';
import {Switch} from 'react-router-dom';
import PageRoute from './PageRoute';
import Home from '../pages/home';
import News from '../pages/news';
import Info from '../pages/info';
import Rules from '../pages/rules';
import UserManagement from '../pages/userManagement';
import WhereWePlay from '../pages/whereWePlay';

export default () => (
  <Switch>
    <PageRoute path="/" exact component={Home} />
    <PageRoute path="/news" component={News} />
    <PageRoute path="/info" component={Info} />
    <PageRoute path="/rules" component={Rules} />
    <PageRoute path="/where-we-play" component={WhereWePlay} />
    <PageRoute path="/manage-users" component={UserManagement} />
  </Switch>
);

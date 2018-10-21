import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import welcome from'./welcome'
import App from '../App'
import donate from './donate'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {App} />
            <Route path='/givemefood' component = {welcome}/>
            <Route path ='/donate' component = {donate}/>
        </Switch>
    </BrowserRouter>
);

export default Router;
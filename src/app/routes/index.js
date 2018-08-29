import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Login  from '../components/login/Login';
import User  from '../components/user/User';
import Post from '../components/post/Post';

export default() =>(
    <Router>
        <div>
            <Header/>
            <div className="m-top">
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/post" component={Post}/>
                    <Route path="/user" component={User}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    </Router>
)
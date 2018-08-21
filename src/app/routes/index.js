import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Login  from '../components/Login/Login';
import Home  from '../components/Pages/Home';
import About from '../components/Pages/About';
import Contact  from '../components/Pages/Contact';
import User  from '../components/Pages/User';
import Post from '../components/Post/Post';

export default() =>(
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/post" component={Post}/>
                <Route path="/user" component={User}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
            <Footer/>
        </div>
    </Router>
)
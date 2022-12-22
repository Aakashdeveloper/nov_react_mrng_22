import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Login from './component/login';
import Register from './component/register';
import Profile from './component/profile';
import Users from './component/userList';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/users" component={Users}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing
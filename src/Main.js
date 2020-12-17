import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Users from './listUsers/Users';
import User from './listUsers/UserRead';
import EditUser from './listUsers/listOfAll/EditUser';
import { useState } from 'react';
import HeadTop from './HeadTop';
import Tail from './Tail/Tail'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            changeLink : false
       };
    
    }
    render() {
        

        
        return (
            <div>
                <HeadTop />
                 <Router>
                     <Switch>
                <div className="form-group center">
                    
                     <Route exact path="/UserRead" component={User} />
                     <Route exact path="/" component={Users} />
                     <Route exact path="/createNew" component={SignIn} />
                     <Route exact path="/EditUser"  component={EditUser} />
                </div>
                </Switch>               
                </Router>
                <Tail />
            </div>
        )
    }
}

import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import listOfMail from './listOfAll/listOfMail';

export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: '',
            keys : listOfMail(),
            allUsers : [],
            user: '',
       };
       
       this.handleState = this.handleState.bind(this);
       this.handleUser = this.handleUser.bind(this);
       this.handleChangeSearch = this.handleChangeSearch.bind(this);
    }
//=======================================================================================================================
    handleUser = (event) =>{                                                  //Take key from User that was clicked in list(useState[0])
        useState[1] = localStorage.getItem(event.target.id);                  // Take value of this user(useState[1],useState[1])
        useState[2] = localStorage.getItem(event.target.id);                  // To work with them in UserRead Component
        useState[0] = event.target.id;
    }

//=======================================================================================================================
    handleChangeSearch = (event) =>{                                  //Function check telephone(useState[4]) or email(useState[5])                                
        const input = event.target.value;                             // of Users if there any matching value from input
        for (let i=0,j=0; i < useState[4].length; i++){               // If yes(diplay=block), if no(display=none)
            
             if (useState[4][i].indexOf(input) + 1  || useState[5][i].indexOf(input) + 1) 
             {   
                document.getElementById(this.state.keys[i]).style.display = "block";
                  
             }
             else{
               document.getElementById(this.state.keys[i]).style.display = "none";
             }
        }
        
    }
//===================================================================================================================
    handleState = (event) => {                                                        //Function checking dropped buttons value
        this.state.status = event.target.value;                                       //Display all users which status is matches
        document.getElementById('status_choose').innerText = event.target.value;      // with dropped button status.

        for (let key = 0; key < this.state.keys.length; key ++){

            if (this.state.status === JSON.parse(localStorage.getItem(this.state.keys[key])).status){
                document.getElementById(this.state.keys[key]).style.display = "block";
            }
            else{
                document.getElementById(this.state.keys[key]).style.display = "none"; 
             }
             if (this.state.status === 'All'){
            document.getElementById(this.state.keys[key]).style.display = "block";
        }
        }     
    }
//=================================================================================================================
    render() {
        
        return (
        <div className = "container">
            <div className = "users_list">
                <div className="form-group">
                    <div className="col text-center labelText">
                        <h3>
                            All Users
                        </h3>
                    </div>
                </div>
                <div className="form-group centrButtons">
                    <div class="btn-group">
                        <button id="status_choose" type="button" className="btn btn-info dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            All
                        </button>
                        <div className="dropdown-menu">
                        
                            <button className="dropdown-item labelText" onClick={this.handleState} value="Admin" >Admin</button>
                            <button className="dropdown-item labelText" onClick={this.handleState} value="Partner">Partner</button>
                            <button className="dropdown-item labelText" onClick={this.handleState} value="Client">Client</button>
                            <button className="dropdown-item labelText" onClick={this.handleState} value="All">All</button>
                        </div>
                    </div>
                    <div>
                        <Link to="/createNew">
                            <button type="button" className="btn btn-success" id="create">Create New User</button>
                        </Link>
                    </div>
                </div>
                
                <div className="form-group">
                    <label htmlFor="inputTelephone" className='labelText'>Search Bar</label>
                    <input name="search" telephone={this.state.telephone} onChange={this.handleChangeSearch}
                    type="text" className="form-control" id="searchBar"  placeholder="Search..."/>
                    <small id="telephoneHelp" className="form-text text-muted">You can find user by telephone or email</small>
                </div>
                <div className="form-group">
                    <ul className="list-group">
                        <div>
                            <ul className="list-group"> 
                                {this.state.keys.map((key) => (
                                    <li className="list-group-item" id ={key} key={key}>
                                        <Link to='/UserRead' style={{color: '#af4f87'}} key={key} id ={key}    onClick={this.handleUser}
                                            class="list-group-item list-group-item-action">{JSON.parse(localStorage.getItem(key))['email']}
                                        </Link>
                                    </li>)) 
                                }
                            </ul>
                
                         </div>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

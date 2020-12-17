import React, { Component } from 'react'
import { useState } from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

export default class UserRead extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            telephone: '',
            userName: '',
            status: '',
            dataCreate: '',
            dataChange: '',
       };
       
       this.hadnleDeleteUser = this.hadnleDeleteUser.bind(this);
    }

//==========================================================================================================================
    hadnleDeleteUser = () =>{                                                       //fucntion to delete User with a key from 
        localStorage.removeItem(useState[0]);                                       // localStorage
        alert('User was deleted!');
    }
//==========================================================================================================================
    render() {
        return (
            <div className = "creatingForm" >
                <div className="form-row">
                    <div className="col text-center labelText">
                        <h3>Users № {JSON.parse(useState[0])}</h3>
                    </div>
                </div>
                <div className="form-group">
                    <div className = "users_list">
                        <li className="list-group-item">
                            <label htmlFor="inputEmail">
                                <h4 class="labelText">
                                    email: 
                                </h4>
                                <p className="simpleText">
                                    {JSON.parse(useState[1])['email']}
                                </p>
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label htmlFor="inputEmail">
                                <h4 class="labelText">
                                    Password:
                                </h4>
                                <p className="simpleText">
                                    {JSON.parse(useState[1])['password']}
                                </p>
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label htmlFor="inputEmail">
                                <h4 class="labelText">
                                    Telephone Number:
                                </h4>
                                <p className="simpleText">
                                    {JSON.parse(useState[1])['telephone']}
                                </p>
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label htmlFor="inputEmail">
                                <h4 class="labelText">
                                    Name/Surname/Patronymic:
                                </h4>
                                <p className="simpleText">
                                    {JSON.parse(useState[1])['userName']}
                                </p>
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label htmlFor="inputEmail">
                                <h4 class="labelText">
                                    Status:
                                </h4>
                                <p className="simpleText">
                                    {JSON.parse(useState[1])['status']}
                                </p>
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label htmlFor="inputEmail">
                                <h4 class="labelText" > 
                                    Creating Date: 
                                </h4 >
                                <p className="simpleText">
                                    {JSON.parse(useState[1])['createDate']}
                                </p>
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label htmlFor="inputEmail">
                                <h4 className="labelText">
                                    Change Date:
                                </h4>
                                <p className="simpleText">
                                    {JSON.parse(useState[1])['changeDate']}
                                </p>
                            </label>
                        </li>
                    </div>
                </div>
                <div className="form-group centrButtons">
                   <div>
                        <Link to='/'>
                            <button type="button" className="btn btn-primary">Back List</button>
                        </Link>
                   </div>
                   <div>
                        <Link to='/'>
                            <button type="button" onClick={this.hadnleDeleteUser} className="btn btn-danger">Delete</button>
                        </Link>
                   </div>
                   <div>
                        <Link to='/EditUser'>
                            <button type="button" className="btn btn-warning">Edit User</button>
                        </Link>
                   </div>
                </div>   
            </div>
        )
    }
}

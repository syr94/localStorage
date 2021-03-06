import React, { Component } from 'react';
import { useState } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';


export default class EditUser extends Component {
    constructor(props){
        super(props);
        this.state = { 
        email: JSON.parse(useState[1]).email,
        password: JSON.parse(useState[1]).password,
        telephone: JSON.parse(useState[1]).telephone,
        userName: JSON.parse(useState[1]).userName,
        status: JSON.parse(useState[1]).status,
        key : useState[0],
        dataCreate: JSON.parse(useState[1]).status.createDate,
        dataChange: JSON.parse(useState[1]).status.dataChange,
        validName: 1,
        validMail:1 ,
        validPassword: 1,
        validTelephone: 1,
        userKeys: [],
        usersEmail: [],
        existUser: false,
        
       };
    
       this.handleChangeTelephone = this.handleChangeTelephone.bind(this);
       this.handleChangeMail = this.handleChangeMail.bind(this);
       this.handleChangePassword = this.handleChangePassword.bind(this);
       this.handleChangeName = this.handleChangeName.bind(this);
       this.handleChangeStatus = this.handleChangeStatus.bind(this);
       this.handleChangeUser = this.handleChangeUser.bind(this);
       this.handleUserEmailList = this.handleUserEmailList.bind(this);
    }
    //=======================================================================================================================
    handleUserEmailList = () => {                       //Creating list of all emails to 
      let UserEmailListValue  = [];                     // for function handleChangeMail()
      let UserEmailListKey = [];
      for (let key in localStorage){
        UserEmailListKey.push(key);
      }
      UserEmailListKey = UserEmailListKey.slice(0,-6)
      for (let i = 0; i < UserEmailListKey.length; i++){
        UserEmailListValue.push(JSON.parse(localStorage.getItem(UserEmailListKey[i]))['email']);
      }
      this.state.usersEmail = UserEmailListValue;
      this.state.userKeys = UserEmailListKey;
    };
    //======================================================================================================================
    handleChangeMail = (event) => {                    //Cheking if inputed email is already in localStorage
      const input = event.target;                      // and cheking email with regular expression
      const reMail = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;
      this.state.existUser = this.state.usersEmail.includes(input.value);
      this.state.validMail = reMail.test(input.value);
      if (this.state.validMail && !this.state.existUser){
        document.getElementById('inputEmail').className = "form-control is-valid";
        this.state.email = document.getElementById('inputEmail').value;
        document.getElementById('emailHelp').innerText = 'Email is valid';
      }
      else if (!this.state.validMail){
        document.getElementById('inputEmail').className = "form-control is-invalid";
        document.getElementById('emailHelp').innerText = 'Please input valid email';
      }
      else{
        document.getElementById('inputEmail').className = "form-control is-invalid";
        document.getElementById('emailHelp').innerText = 'User already exists';
      }
      
    };
    
    //=============================================================================================================================
      handleChangePassword = (event) =>{                                            //Function is checking is values from both 
        const input = event.target;                                                 // inputes matches
        if (document.getElementById("inputPassword_1").value != 0 && document.getElementById("inputPassword_2").value != 0){
          this.state.validPassword = (document.getElementById("inputPassword_1").value ===
            document.getElementById("inputPassword_2").value);
          if (this.state.validPassword){
            document.getElementById("inputPassword_1").className = "form-control is-valid";
            document.getElementById("inputPassword_2").className = "form-control is-valid";
            document.getElementById("passwordHelp").innerText = "Passwords match";
            document.getElementById("passwordHelp").className = "valid-feedback";
            this.state.password = document.getElementById('inputPassword_1').value;   
          }
          else{
            document.getElementById("inputPassword_1").className = "form-control is-invalid";
            document.getElementById("inputPassword_2").className = "form-control is-invalid";
            document.getElementById("passwordHelp").innerText = "Passwords do not match";
            document.getElementById("passwordHelp").className = "invalid-feedback";
          }
        }
    
      }
     //=========================================================================================================================
      handleChangeTelephone = (event) => {                                      //Cheks inputed Telephone with regular expression
        const input = event.target;
        const reTelephone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        this.state.validTelephone = reTelephone.test(input.value);
    
        if (this.state.validTelephone){
           document.getElementById("inputTelephone").className = "form-control is-valid";
           this.state.telephone = document.getElementById("inputTelephone").value;
        }
        else{
          document.getElementById("inputTelephone").className = "form-control is-invalid";
        }
      };
    
      //======================================================================================================================
      handleChangeName = (event) => {                             //Cheks inputed Name with regular expression
        const input = event.target;
        const reName = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;
        this.state.validName = reName.test(input.value);
        if (this.state.validName){
          document.getElementById("inputName").className = "form-control is-valid";
          this.state.userName = document.getElementById("inputName").value;    
       }
       else{
         document.getElementById("inputName").className = "form-control is-invalid";
       }
      };
    
      //========================================================================================================
    
      handleChangeStatus = (event) => {                            //Checks status from input radiobutton
        const input = event.target;
        switch(input.value) {
          case '0':  
            this.state.status = 'Admin';
            break;
          case '1': 
            this.state.status = 'Partner';
            break;
          case '2': 
            this.state.status = 'Client';
            break;
          default:
            break;
        }
      };
    
    //=============================================================================================================
    
      handleChangeUser = () => {                                                   //Creating new user if there were no errors
        const newTime = new Date().toLocaleString();
        const allIsGood = (this.state.validMail && this.state.validName 
          && this.state.validPassword && this.state.validTelephone)
          && !this.state.existUser;
        if (allIsGood){
          const user = JSON.stringify({
          'email' : this.state.email,
          'password' :  this.state.password,
          'telephone' :  this.state.telephone,
          'userName' :  this.state.userName,
          'status' : this.state.status,
          'createDate' : JSON.parse(localStorage.getItem(useState[0])).createDate,
          'changeDate' : newTime,
        });
            localStorage.setItem(this.state.key, user);
            this.props.history.push('/');
        }

      };
     //=====================================================================================================================
    render() {
        return (
            <form className = "creatingForm">
            <div className="col text-center labelText">
                        <h3>Edit User № {JSON.parse(useState[0])}</h3>
            </div>     
          <div className="form-group">
            <label htmlFor="inputEmail" className='labelText'>Enter New Email address</label>
            <input name="email" email={this.state.email} onFocusCapture={this.handleUserEmailList} onChange={this.handleChangeMail}
               type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder={this.state.email}/>
             <small id="emailHelp" className="form-text text-muted">Input email in format xxx@xxx.xx</small>
          </div>
          <div className="form-row">
             <div className="form-group col-md-6">
                <label htmlFor="inputPassword" className='labelText'>Enter New Password</label>
                    <input  password={this.state.password} onChange={this.handleChangePassword}
                     type="password" className="form-control" id="inputPassword_1" placeholder="*******"/>
                    <small id="passwordHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="inputPassword" className='labelText'>Check Password</label>
                    <input  password={this.state.password} onChange={this.handleChangePassword}
                    type="password" className="form-control" id="inputPassword_2" placeholder="*******"/>
            </div>
          </div>
          <div className="form-group">
           <label htmlFor="inputTelephone" className='labelText'>Enter New Telephone Number</label>
           <input name="telephone" telephone={this.state.telephone} onChange={this.handleChangeTelephone}
            type="text" className="form-control" id="inputTelephone"  placeholder={this.state.telephone}/>
           <small id="telephoneHelp" className="form-text text-muted"> Please input your telephone like "+7" or "8" format</small>
          </div>
        
        <div className="form-group">
           <label htmlFor="inputName" className='labelText'> Enter New Name/Surname/Patronymic</label>
           <input name="name"  onChange={this.handleChangeName}
            type="text" className="form-control" id="inputName"placeholder={this.state.userName}/>
           <small id="nameHelp" className="form-text text-muted"> Input Name in format Xxxx Xxxx Xxxx</small>
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <div className="custom-control custom-radio col-md-6">
              <input type="radio" className="custom-control-input" id="statusAdmin" name="radio-stacked"
              value = "0" onChange={this.handleChangeStatus} />
              <label className="custom-control-label labelText" htmlFor="statusAdmin">Admin</label>
            </div>
            <div className="custom-control custom-radio col-md-6">
              <input type="radio" className="custom-control-input labelText" id="statusPartner" name="radio-stacked"
              value = "1" onChange={this.handleChangeStatus}  />
              <label className="custom-control-label labelText" htmlFor="statusPartner">Partner</label>
            </div>
            <div className="custom-control custom-radio col-md-6">
              <input type="radio" className="custom-control-input" id="statusClient" name="radio-stacked"
              value = "2" onChange={this.handleChangeStatus} defaultChecked/>
              <label className="custom-control-label labelText" htmlFor="statusClient">Client</label>
            </div>
          </div>
        </div>
        <div className="form-group">
            <button type="button" onClick={this.handleChangeUser}   className="btn btn-warning">
              Confirm
            </button>
        </div> 
        <div className="form-group">
               
          <Link to="/">
            <button type="button" className="btn btn-success"id="list">
              Back to List
            </button>
          </Link> 
         </div>
      </form>
        )
    }
}

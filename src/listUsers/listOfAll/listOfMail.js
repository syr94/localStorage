import React from 'react'
import { useState } from 'react'

export default function listOfMail() {
    let i = 0;
    let listPassword = [];
    let listUser = [];
    let listEmail = [];
    let listTelephone = [];
    const forbidden = ['length', 'clear','getItem','key', 'removeItem', 'setItem']; // default elements of localStorage
    for (let key in localStorage) {                                                 // we don't need them, and getting all others
        if (!forbidden.includes(key)){ 
            listPassword[i] = key;
            i ++;
            listUser[i] = JSON.parse(localStorage.getItem(key));
            listEmail[i] = JSON.parse(localStorage.getItem(key)).email;
            listTelephone[i] = JSON.parse(localStorage.getItem(key)).telephone;

      }
            
    }
            useState[3] = listUser;
            useState[4] = listEmail.slice(1);
            useState[5] = listTelephone.slice(1);
            useState[6] = listPassword.slice(1);
    return (
        listPassword
    );
}

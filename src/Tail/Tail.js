import React, { Component } from 'react'
import './tail.css'
import Tail_right from './Tail_right'
import Tail_left from './Tail_left.js'

export default class Tail extends Component {
    render() {
        return (
            <div className = "tail">
                <Tail_left />
                <Tail_right />
                
            </div>
        )
    }
}
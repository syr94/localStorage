import React, { Component } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export default class HeadTop extends Component {
    render() {
        return (
            <div className = "head_top">
            <div className = "head_top_left">
                <a className = 'social' href = "#">
                    <FacebookIcon style = {{fontSize : "32px"}}/>
                </a>
                <a className = 'social' href = "#">
                    <InstagramIcon style = {{fontSize : "32px"}}/>
                </a>
                <a className = 'social' href = "#">
                    <TwitterIcon style = {{fontSize : "32px"}}/>
                </a>
            </div>
            <div className = "head_top_right">
                
            </div>
        </div>
        )
    }
}
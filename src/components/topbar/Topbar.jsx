import React from 'react'
import "./topbar.css"
import {Settings} from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <div className = "topbar">
            <div className = "topbarWrapper">
                <div className = "topLeft">
                    <Link to = '/'>
                    <span className = "logo">Busy Today</span>
                    </Link>
                </div>
                <div className = "topRight">
                    <Link to = "/login">
                        <button className="topbarButton">SIGN IN</button>
                    </Link>
                    <div className = "topbarIconContainer">
                        <Settings />
                    </div>
                </div>
            </div>
        </div>
    )
}
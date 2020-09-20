import React from 'react';
import './Header.css'

import logo from '../../assets/logonytimes.svg'

export default function Header() {
    return (
        <header>
            <div className="logo-container">
                <img id="logo" src={logo} alt="logo" />
            </div>
            <div className="date-time">
                <p>Tuesday, September 22. 2020</p>
            </div>


        </header>

    );


}
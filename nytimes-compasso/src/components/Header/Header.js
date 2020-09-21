import React from 'react';
import './Header.css'

import logo from '../../assets/logonytimes.svg'

export default function Header() {


    //dia, mes numero e ano

    const time = new Date();
    let dias = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    let mes = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')
    let dia = time.getDate();
    let ano = time.getFullYear();



    return (
        <header>
            <div className="logo-container">
                <img id="logo" src={logo} alt="logo" />
            </div>
            <div className="date-time">
                <p>{dias[time.getDay()]},     {mes[time.getMonth()]}     {dia},   {ano}</p>
            </div>


        </header>

    );


}
import React from 'react';
import './Page-title.css';


export default function PageTitle(props) {

    return (

        <div className="pagetitle">
            <h1>{props.title}</h1>
        </div>

    );




}
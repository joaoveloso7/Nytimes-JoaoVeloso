import React from 'react';
import './News-card.css';



export default function Newscard(props) {

    return (
        <div className="card">
            <ul>
                <li>
                    <h1>{props.newsTitle}</h1>
                    <p>{props.newsDescription}</p>
                </li>
            </ul>
        </div>
    );

}

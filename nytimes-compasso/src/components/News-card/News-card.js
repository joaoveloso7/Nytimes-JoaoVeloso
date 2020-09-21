import React, { useState } from 'react';
import './News-card.css';



export default function Newscard(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);


    return (
        <div onClick={() => setIsModalVisible(true)} className="card">
            <ul>
                <li>
                    <h1>{props.newsTitle}</h1>
                    <p>{props.newsDescription}</p>
                </li>
            </ul>

            <div>
                {isModalVisible ? <h1>MODAL</h1> : null}
            </div>
        </div>


    );

}

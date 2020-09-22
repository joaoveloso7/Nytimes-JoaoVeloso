import React, { useState, useEffect } from 'react';
import './News-card.css';

import Modal from '../Modal/Modal';


export default function Newscard(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div className="card">
            <ul>
                <li onClick={() => setIsModalVisible(true)}>
                    <h1>{props.newsTitle}</h1>
                    <p>{props.newsDescription}</p>
                </li>
            </ul>

            {isModalVisible ? (<Modal modalTitle={props.newsTitle} modalDescription={props.newsDescription} modalImage={props.newsImage} modalUrl={props.newsUrl} onClose={() => setIsModalVisible(false)} />) : null}
        </div>


    );

}

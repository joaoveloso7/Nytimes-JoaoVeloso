import React from 'react';
import '../Modal/Modal.css';


export default function Modal(props) {

    return (
        <div className="modal" onClick={() => props.onClose()}>
            <div className="container">
                <button className="close" onClick={() => props.onClose()} />

                <div className="content">
                    <img src={props.modalImage} alt="" />
                    <h1>{props.modalTitle}</h1>
                    <p>{props.modalDescription}</p>

                    <h2>Go to the link:</h2>
                    <a href={props.modalUrl}>{props.modalUrl}</a>
                </div>
            </div>
        </div>

    );

}
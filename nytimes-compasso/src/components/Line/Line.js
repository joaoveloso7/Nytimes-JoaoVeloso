import React from 'react';
import './Line.css';



export default function Line(props) {

    return (
        <div className="gray-line" style={{ borderBottom: `1px solid ${props.color}` }}>

        </div>
    );
}
import React from 'react';
import './Menu-nav.css'


export default function MenuNav(props) {

    const links = [{ id: "home", name: "Home" }, { id: "science", name: "Science" }, { id: "technology", name: "Technology" }]

    return (

        <div className="menunav">
            <nav>
                {links.map(link => {
                    return (
                        <a href="#" onClick={(event) => props.testFunction(event)} key={link.id}>{link.name}</a>
                    )
                })
                }
            </nav>
        </div>



    );
}
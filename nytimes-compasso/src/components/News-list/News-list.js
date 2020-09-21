import React, { useState, useEffect } from 'react';
import './News-list.css';
import axios from 'axios';

import Newscard from '../News-card/News-card';

export default function Newslist(props) {

    const [news, handleNews] = useState([]);


    useEffect(() => {
        console.log(props.category);
        axios.get(`https://api.nytimes.com/svc/topstories/v2/${props.category}.json?api-key=67OsbQtSXrGlCX9mhMLjAtE5FAfBpQc0`)
            .then(response => {
                const allNews = response.data.results;
                handleNews(allNews);
                console.log(allNews, news);
            });
    }, [props.category])

    return (

        <div className="cards">
            {
                news ? news.map(notice => {
                    return (
                        <Newscard newsTitle={notice.title} newsDescription={notice.abstract} key={Math.floor(Math.random() * 56456454)} />
                    )
                }) : null
            }
        </div>


    );



}

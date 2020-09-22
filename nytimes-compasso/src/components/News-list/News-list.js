import React, { useState, useEffect } from 'react';
import './News-list.css';
import axios from 'axios';

import Newscard from '../News-card/News-card';

export default function Newslist(props) {

    const [news, handleNews] = useState([]);

    const getNews = async (category) => {
        await axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=67OsbQtSXrGlCX9mhMLjAtE5FAfBpQc0`)
            .then(response => {
                const allNews = response.data.results;
                handleNews(allNews);
            });
    }

    useEffect(() => {
        getNews(props.category)
    }, [props.category])


    return (

        <div className="cards">
            {
                news ? news.map(({ title, abstract, multimedia, url }) => {
                    let newsImage = multimedia !== null ? multimedia[0].url : '';
                    console.log(newsImage);
                    return (
                        <Newscard newsTitle={title} newsDescription={abstract} newsImage={newsImage} newsUrl={url} key={Math.floor(Math.random() * 56456454)} />
                    )
                }) : null
            }
        </div>


    );



}

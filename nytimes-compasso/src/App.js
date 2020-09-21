import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import Line from './components/Line/Line.js';
import PageTitle from './components/Page-title/Page-title.js'
import MenuNav from './components/Menu-nav/Menu-nav.js'
import NewsList from './components/News-list/News-list'

function App() {
  const [category, newCategory] = useState('home');


  const teste = (event) => {
    newCategory(event.target.innerHTML.toLowerCase());
  }


  return (
    <div className="App">

      <Header />
      <Line />

      <MenuNav testFunction={teste} />
      <Line color="black" />
      <br />
      <Line color="black" />

      <PageTitle title={category === 'home' ? 'NEWS' : category.toLowerCase()} />
      <Line />

      <NewsList category={category} />

    </div>
  );
}

export default App;

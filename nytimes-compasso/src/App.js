import React from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import Line from './components/Line/Line.js';
import PageTitle from './components/Page-title/Page-title.js'
import MenuNav from './components/Menu-nav/Menu-nav.js'

function App() {

  return (
    <div className="App">

      <Header />
      <Line />
      <MenuNav />
      <PageTitle title="NEWS" />
      <Line />


    </div>
  );
}

export default App;

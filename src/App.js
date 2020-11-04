

import './App.scss';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Head from './components/Head';
import ItemList from './components/ItemList';
import ItemCreate from './components/ItemCreate';
import { ItemProvider } from './ItemContext';

const App = () => {
  return (
    <ItemProvider>
      <div className="template">
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
        </ul>
        <Head />
        <hr />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />

        <ItemList /> 
        <div className="buttonBlock"> 
          <ItemCreate type={"in"}/>    
          <ItemCreate type={"out"}/>
        </div>
      </div>
    </ItemProvider>
  );
};

export default App;

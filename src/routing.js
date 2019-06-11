import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import LineArrivals from './pages/LineArrivals.js';
import Searchpage from './pages/SearchPage.js';
import TubeStatuses from './pages/TubeStatuses.js';
import RecordsPage from './pages/RecordsPage.js';

export default class App extends React.Component  {
  render(){
    return (
      <div>
        <Route path="/" exact component={HomePage}/>
        <Route path="/arrivals" exact component={LineArrivals}/>
        <Route path="/search" exact component={Searchpage}/>
        <Route path="/statuses" exact component={TubeStatuses}/>
        <Route path="/records" exact component={RecordsPage}/>
      </div>
    )
  }
}
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './layout/Header'
import Foot from './layout/Footer'
import Home from './pages/Home'
import ListJob from './pages/ListJob'
import DetailBlog from './pages/DetailBlog';

const listlistjob =
    [
      {
        titleJob : 'Senior Product Manager - Security Experience',
        location : 'Jl.Kemang Raya, Jakarta Selatan',
        position : 'Security'
      },
      {
        titleJob : 'Senior Analytics Engineer - Payments & Partnerships',
        location : 'Jl.Kemang Raya, Jakarta Selatan',
        position : 'Data Science and Engineering'
      },
      {
        titleJob : 'Manager, Transportation',
        location : 'Jl.Kemang Raya, Jakarta Selatan',
        position : 'Facilities, Workplace Services and Real Estate'
      },
      {
        titleJob : 'Manager, Corporate Safety',
        location : 'Jl.Kemang Raya, Jakarta Selatan',
        position : 'Facilities, Workplace Services and Real Estate'
      },
      {
        titleJob : 'Manager, Content FP&A',
        location : 'Jl.Kemang Raya, Jakarta Selatan',
        position : 'Strategy and Analysis'
      }
    ];

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/ListJob">
          <ListJob lllist={listlistjob}/>
        </Route>
        <Route path="/:id">
          <DetailBlog />
        </Route>
      </Switch>
      <Foot />
    </Router>
  );
}

export default App;
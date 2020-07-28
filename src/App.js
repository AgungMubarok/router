import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css';
import Header from './layout/Header'
import Foot from './layout/Footer'
import Home from './Component/Home/Home'
import ListJob from './Component/Listjob/ListJob'
import DetailBlog from './Component/Detail/DetailBlog';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/ListJob">
          <ListJob />
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
import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Contents from './Contents.js';
import {Header} from './common/Header';
// import Footer from './common/Footer';
import { Home, About} from './pages'
import './sass/_main.scss'

import './App.scss';


function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
          <div className='content'>
            {switchRouter()}
          </div>
      </Router>
    </div>
  )
}

function switchRouter() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
    </Switch>
  )
}

export default App;

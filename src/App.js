import React from 'react';
import './App.css';


import {BrowserRouter as Router,Link, Switch,Route} from 'react-router-dom';

import Brands from './Components/Brands';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Transporters from './Components/Transporters';



function App() {
  return (
      <Router>
    <div className="App">
      <nav className="navbar navbar-default">
      <div className="container-fluid">
       <div className="navbar-header">
         <Link className="navbar-brand" to='/'>Intugine</Link>
         <button className='navbar-toggle' data-toggle='collapse' data-target='#menu'>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>
           <span className="icon-bar"></span>

         </button>
       </div>
       <div className='navbar-collapse collapse' id='menu'>
         <ul className='nav navbar-nav pull-right'>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/brands'>Brands</Link>
            </li>
            <li>
              <Link to='/transporters'>Transporters</Link>
            </li>
            <li>
              <Link to='/signup'><span class="glyphicon glyphicon-user"></span><span class="caret"></span></Link>
            </li>
         </ul>
       </div>
      </div>
    </nav>
    <div className="container">
      <Switch>
        {/* route passes 3 more paramters=>history location and match */}
        <Route exact path='/' component={Home}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/brands' component={Brands}/>
        <Route exact path='/transporters' component={Transporters}/>
        <Route exact path='/signup' component={Signup}/>
      </Switch>
    </div>

    </div>
    </Router>

  )
}

export default App;

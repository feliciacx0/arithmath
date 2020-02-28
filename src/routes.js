import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import App from './components/app/App';
import Frontpage from './containers/Frontpage';
import Equation from './containers/Equation';
import Endpage from './containers/Endpage';

export default function Routes(){
    
    return(


    <Router>
    <h1> Welcome to Arithmath</h1>

    <div className="routes">
      <u1 className="Frontpage">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/equation">Equations</Link>
        </li>
        <li>
          <Link to="/endpage">Finish</Link>
        </li>
      </u1>
      
      <Switch>
        <Route exact path='/' component={Frontpage}></Route>
        <Route exact path='/equation' component={Equation}></Route>
        <Route exact path='/endpage' component={Endpage}></Route>
      </Switch>
    </div>
  </Router>

    );


}
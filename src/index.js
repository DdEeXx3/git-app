import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavigationLink from './components/navlink';
import Home from './components/home';
import Equation from './components/calc';
import Reps from './components/repos';
import RepoDescription from './components/repoDescription';
import Favourites from './components/favourites';

ReactDOM.render(
  <Router>
    <div className="container text-center">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div id="nav-sticky" className="text-center nav-default-color nav-medium">
        <ul className="topnav" id="myTopnav">
            <NavigationLink value="Home" link="/"/>
            <NavigationLink value="Calculator" link="/calc"/>
            <NavigationLink value="Repositories" link="/reps"/>
            <NavigationLink value="Favourites" link="/favourites"/>
            <li className="icon" onClick={() => window.responsiveNavigation()}><a href="javascript:void(0);">&#9776;</a></li>
        </ul>
      </div>
    </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/calc" component={Equation} />
        <Route path="/reps" exact component={Reps}/>
        <Route path="/favourites" component={Favourites}/>
        <Route path="/reps/:username/:repo" component={RepoDescription}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
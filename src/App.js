import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavigationLink from './components/navlink';
import Home from './components/home';
import Equation from './components/calc';
import Reps from './components/repos';
import RepoDescription from './components/repoDescription';
import MyRepoDescription from './components/myRepoDescription';
import Favourites from './components/favourites';
import MyRepos from './components/myrepos';
import ToDoList from './components/todolist';



function App() {
    return (
        <Router>
            <div className="container text-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <div id="nav-sticky" className="text-center nav-default-color nav-medium">
                <ul className="topnav" id="myTopnav">
                    <NavigationLink value="Home" link="/"/>
                    <li class="dropdown">
                        <div class="dropbtn">Tools <i class="fa fa-caret-down"></i></div>
                        <ul class="dropdown-content">
                            <NavigationLink value="Calculator" link="/calc"/>
                            <NavigationLink value="To Do List" link="/todo"/>
                        </ul>
                    </li>
                    <NavigationLink value="Repositories" link="/reps"/>
                    <NavigationLink value="Favourites" link="/favourites"/>
                    <NavigationLink value="My Repositories" link="/my_repos"/>
                    <li className="icon" onClick={() => window.responsiveNavigation()}><a href="javascript:void(0);">&#9776;</a></li>
                </ul>
            </div>
            </div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/calc" component={Equation} />
                <Route path="/todo" component={ToDoList} />
                <Route path="/reps" exact component={Reps}/>
                <Route path="/favourites" component={Favourites}/>
                <Route path="/reps/:username/:repo" component={RepoDescription}/>
                <Route path="/my_repos" exact component={MyRepos}/>
                <Route path="/my_repos/:username/:repo" component={MyRepoDescription}/>
            </Switch>
            </div>
        </Router>
    );
}

export default App;
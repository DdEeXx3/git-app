import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import NavigationLink from './components/navlink';
import Home from './components/home';
import Equation from './components/calc';
import Reps from './components/repos';

// class Reps extends React.Component
// {
//   render(){
//     return(
//       this.props.names.map((value, key) => {
//         return <div className="col-lg-6 col-md-6 col-sm-6">{parseInt(key)+1}. {value}</div>
//     }));
//   }
// }

// class Equation extends React.Component
// {
//   constructor(props)
//   {
//     let names = [];
//     fetch("https://api.github.com/repositories?since=364")
//     .then(resp => {
//       resp.json().then((json)=> 
//       {
//         for (let i=0; i<json.length; i++)
//         {
//           names[i] = json[i].name;
//         }
//         this.setState({names})
//       }
//       );
//     }
//     )
    
//     super(props);
//     this.state = 
//     {
//       value1: "",
//       value2: "",
//       score: "",
//       select: "+",
//       names: names
//     };
//   }
//   handleValue1Change(e)
//   {
//     this.setState
//     (
//       {
//         value1: (e.target.value),
//       } , () => this.calcResult()
//     );

//   }
//   handleValue2Change(e)
//   {
//     this.setState
//     (
//       {
//         value2: (e.target.value),
//       }, () => this.calcResult()
//     );

//   }

//   handleSelect(e) {
//     this.setState({
//       select: e.target.value,
//     }, () => this.calcResult());
//   }

//   calcResult() {
//     let calcString = this.state.value1 + this.state.select + this.state.value2;
//     console.log(calcString);
//     console.log(this.state.names[2]);
//     if (this.state.value1 === "" || this.state.value2 === "")
//     {
//       this.setState({
//         score: "PUT TWO VALUES TO SEE A SCORE"
//       })
//     }
//     else
//     {
//       let score = eval(calcString);
//       this.setState({
//         score: score
//       })
//     }
//   }

//   render()
//   {
//     return(
//       <div className="col-lg-12 col-md-12 col-sm-12 container text-center">
//         <div className="col-lg-12 col-md-12 cols-sm-12 padding-bottom-50px">
//           <h2>This is simple calculator:</h2>
//         </div>
//         <div className="col-lg-2 col-md-1 col-sm-1"></div>
//         <div className="container col-lg-8 col-md-10 col-sm-10 padding-top-50px padding-bottom-50px button-small-radius shadow">
//           <div className="col-lg-3 col-md-3 col-sm-3"><input className="input-style1-secondary input-medium-60" type="number" value={this.state.value1} onChange={(e) => this.handleValue1Change(e)}></input></div>
//           <div className="col-lg-1 col-md-1 col-sm-1"><select className="input-style1-secondary input-medium-100" onChange={(event) => this.handleSelect(event)}>
//             <option>+</option>
//             <option>-</option>
//             <option>*</option>
//             <option>/</option>
//           </select>
//           </div>
//           <div className="col-lg-3 col-md-3 col-sm-3"><input className="input-style1-secondary input-medium-60" type="number" value={this.state.value2} onChange={(e) => this.handleValue2Change(e)}></input></div>
//           <span className="col-lg-1 col-md-1 col-sm-1">=</span>
//           <div className="col-lg-4 col-md-4 col-sm-4"><input className="input-style1-secondary input-medium-60" value={this.state.score} readOnly></input></div>
//         </div>
//         <div className="col-lg-2 col-md-1 col-sm-1"></div>
//         <div className="col-lg-12 col-md-12 col-sm-12 padding-50px">
//           <h2>This are all of the repositories names:</h2>
//         </div>
//         <div className="col-lg-2 col-md-2 col-sm-1"></div>
//         <div className="text-center container col-lg-8 col-md-8 col-sm-10">
//           <Reps names={this.state.names} />
//         </div>
//         <div className="col-lg-2 col-md-2 col-sm-1"></div>
//       </div>
//     )
//   }
// }


ReactDOM.render
(
  <Router>
    <div className="container text-center">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div id="nav-sticky" className="text-center nav-default-color nav-medium">
        <ul className="topnav" id="myTopnav">
            <NavigationLink value="Home" link="/"/>
            <NavigationLink value="Calculator" link="/calc"/>
            <NavigationLink value="Repositories" link="/reps"/>
            <li className="icon" onClick={() => window.responsiveNavigation()}><a href="javascript:void(0);">&#9776;</a></li>
        </ul>
      </div>
    </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/calc" component={Equation} />
        <Route path="/reps" component={Reps}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
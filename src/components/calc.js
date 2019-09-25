// import React from 'react';

// class Equation extends React.Component
// {
//   constructor(props)
//   { 
//     super(props);
//     this.state = 
//     {
//       value1: "",
//       value2: "",
//       score: "",
//       select: "+"
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
//         <div className="col-lg-12 col-md-12 cols-sm-12 padding-top-50px padding-bottom-50px">
//           <h2>This is simple calculator:</h2>
//         </div>
//         <div className="col-lg-2 col-md-1 col-sm-12"></div>
//         <div className="container col-lg-8 col-md-10 col-sm-12 margin-left-20px margin-right-20px padding-top-50px padding-bottom-50px button-small-radius shadow">
//           <div className="col-lg-3 col-md-3 col-sm-2"><input className="input-style1-secondary input-small-50" type="number" value={this.state.value1} onChange={(e) => this.handleValue1Change(e)}></input></div>
//           <div className="text-center col-lg-1 col-md-1 col-sm-3"><select className="input-style1-secondary input-small-100" onChange={(event) => this.handleSelect(event)}>
//             <option>+</option>
//             <option>-</option>
//             <option>*</option>
//             <option>/</option>
//           </select>
//           </div>
//           <div className="col-lg-3 col-md-3 col-sm-2"><input className="input-style1-secondary input-small-50" type="number" value={this.state.value2} onChange={(e) => this.handleValue2Change(e)}></input></div>
//           <span className="col-lg-1 col-md-1 col-sm-1">=</span>
//           <div className="col-lg-4 col-md-4 col-sm-4"><input className="input-style1-secondary input-small-50" value={this.state.score} readOnly></input></div>
//         </div>
//         <div className="col-lg-2 col-md-1 col-sm-12"></div>
//       </div>
//     )
//   }
// }

// export default Equation;

import React from 'react';
import { connect } from 'react-redux';
import {handleValue1, handleValue2, handleSelect} from '../redux/actions/calc';

class Equation extends React.Component
{
  render()
  {
    console.log(this.props)
    return(
      <div className="col-lg-12 col-md-12 col-sm-12 container text-center">
        <div className="col-lg-12 col-md-12 cols-sm-12 padding-top-50px padding-bottom-50px">
          <h2>This is simple calculator:</h2>
        </div>
        <div className="col-lg-2 col-md-1 col-sm-12"></div>
        <div className="container col-lg-8 col-md-10 col-sm-12 margin-left-20px margin-right-20px padding-top-50px padding-bottom-50px button-small-radius shadow">
          <div className="col-lg-3 col-md-3 col-sm-2"><input className="input-style1-secondary input-small-50" type="number" value={this.props.calc.calcValue1} onChange={(e) => this.props.handleValue1(e)}></input></div>
          <div className="text-center col-lg-1 col-md-1 col-sm-3"><select className="input-style1-secondary input-small-100" onChange={(e) => this.props.handleSelect(e)}>
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
          </select>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-2"><input className="input-style1-secondary input-small-50" type="number" value={this.props.calc.calcValue2} onChange={(e) => this.props.handleValue2(e)}></input></div>
          <span className="col-lg-1 col-md-1 col-sm-1">=</span>
          <div className="col-lg-4 col-md-4 col-sm-4"><input className="input-style1-secondary input-small-50" value={this.props.calc.score} readOnly></input></div>
        </div>
        <div className="col-lg-2 col-md-1 col-sm-12"></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  calc: state.calc
});

const mapDispatchToProps = dispatch => ({
  handleValue1: (e) => dispatch(handleValue1(e)),
  handleValue2: (e) => dispatch(handleValue2(e)),
  handleSelect: (e) => dispatch(handleSelect(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Equation);
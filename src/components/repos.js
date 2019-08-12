import React from 'react';

class Reps extends React.Component
{
    constructor(props)
    {
        let names = [];
        fetch("https://api.github.com/repositories?since=364")
        .then(resp => {
            resp.json().then((json)=> {
                for (let i=0; i<json.length; i++){
                    names[i] = json[i].name;
        }
        this.setState({names})
        });
    })
        super(props);
        this.state=
        {
            names: names
        }
    }
  render(){
    return(
        <div className="col-lg-12 col-md-12 col-sm-12 container text-center">
            <div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px padding-bottom-50px">
                <h2>This are all of the repositories names:</h2>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-1"></div>
            <div className="text-center container col-lg-8 col-md-8 col-sm-10">
                {this.state.names.map((value, key) => {
                    return <div className="col-lg-6 col-md-6 col-sm-6">{parseInt(key)+1}. {value}</div>
                })}
            </div>
            <div className="col-lg-2 col-md-2 col-sm-1"></div>
        </div>
    )
  }
}

export default Reps;
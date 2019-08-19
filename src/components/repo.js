import React from 'react';
import {Link} from "react-router-dom";

class Repo extends React.Component
{
    render(){
        const repo = this.props.repo;
        return(
            <div key={repo.id} className="container button-small-radius margin-10percent text-center shadow width-80percent col-lg-4 col-md-6 col-sm-12">
                <div className="margin-top-auto margin-bottom-auto padding-10percent col-lg-6 col-md-6 col-sm-6"><h4 className="bold"><Link className="a-secondary" to={"/reps/" + repo.owner.login + "/" + repo.name}>{repo.name}</Link></h4></div>
                <div className="margin-top-auto margin-bottom-auto padding-10percent col-lg-6 col-md-6 col-sm-6"><img className="button-oval width-50percent" src={repo.owner.avatar_url}></img></div>
                <div className="line width-80percent text-center col-lg-12 col-md-12 col-sm-12 padding-top-10px"></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-10 col-md-10 col-sm-10"><h5>{repo.description}</h5></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-5 col-md-5 col-sm-5"><h5 className="bold">Owner:</h5></div>
                <div className="col-lg-5 col-md-5 col-sm-5"><h5>{repo.owner.login}</h5></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-5 col-md-5 col-sm-5"><h5 className="bold">Language:</h5></div>
                <div className="col-lg-5 col-md-5 col-sm-5"><h5>{repo.language ? repo.language : "Not defined"}</h5></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-5 col-md-5 col-sm-5"><h5 className="bold">Public:</h5></div>
                <div className="col-lg-5 col-md-5 col-sm-5"><h5>{repo.private ? "No" : "Yes"}</h5></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="col-lg-8 col-md-8 col-sm-8"><a className="small a-link" href={repo.html_url}>See repository on GitHub ></a></div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="padding-bottom-10px col-lg-8 col-md-8 col-sm-8"><a className="small a-link" href={repo.homepage}>Visit homepage ></a></div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
            </div>
        )
    }
}

export default Repo;
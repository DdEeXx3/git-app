import React from 'react';

class RepoDescription extends React.Component
{

    constructor(props) {
        super();
        this.state = {
            currentRepo: {
                owner: {}
            },
            loading: true,
        }
        let link = window.location.pathname.split('/');
        let repoName = link[link.length - 1];
        fetch("https://api.github.com/search/repositories?q=" + repoName + " in:name")
        .then(resp => {
            resp.json().then((json)=> {
                this.setState({
                    currentRepo: json.items[0],
                    loading: false,
                })
            });
        }).catch((error) =>  {
            console.log(error);
        });
    }

    render(){
        const repo = this.state.currentRepo;
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 container">
                <div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px"></div>
                {this.state.loading && (<div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px padding-bottom-50px">LOADING DATA<div className="loader text-center"></div></div>)}
                <div className="text-center margin-top-auto margin-bottom-auto padding-10percent col-lg-6 col-md-6 col-sm-6">
                    <h2>{repo.name}</h2>
                </div>
                <div className="margin-top-auto margin-bottom-auto padding-10percent text-center col-lg-6 col-md-6 col-sm-6">
                    <img className="button-oval width-50percent" src={repo.owner.avatar_url}></img>
                </div>
                <div className="line width-80percent text-center col-lg-12 col-md-12 col-sm-12 padding-top-10px"></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-10 col-md-10 col-sm-10 padding-10px"><h4>{repo.description}</h4></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-5 col-md-5 col-sm-5 padding-10px"><h4 className="bold">Owner:</h4></div>
                <div className="col-lg-5 col-md-5 col-sm-5 padding-10px"><h4>{repo.owner.login}</h4></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-5 col-md-5 col-sm-5 padding-10px"><h4 className="bold">Language:</h4></div>
                <div className="col-lg-5 col-md-5 col-sm-5 padding-10px"><h4>{repo.language ? repo.language : "Not defined"}</h4></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-5 col-md-5 col-sm-5 padding-10px"><h4 className="bold">Public:</h4></div>
                <div className="col-lg-5 col-md-5 col-sm-5 padding-10px"><h4>{repo.private ? "No" : "Yes"}</h4></div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="padding-10px col-lg-8 col-md-8 col-sm-8"><a className="medium-small a-link" href={repo.html_url}>See repository on GitHub ></a></div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
                <div className="padding-10px col-lg-8 col-md-8 col-sm-8"><a className="medium-small a-link" href={repo.homepage}>Visit homepage ></a></div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
            </div>
        )
    }
}

export default RepoDescription;
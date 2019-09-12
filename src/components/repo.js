// import React from 'react';
// import {Link} from "react-router-dom";

// class Repo extends React.Component
// {
//     constructor(props){
//         super(props);
//         this.state = {
//             favourite: false,
//             starColor: ""
//         }
//     }

//     componentDidMount() {
//         // this.checkFavourites();
//     }

//     addToFavourites()
//     {
//         if (!this.state.favourite) {
//             this.setState({
//                 favourite: true,
//                 starColor: "colored"
//             });
//             fetch("http://localhost:3004/favourites", {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 id: this.props.repo.id,
//                 name: this.props.repo.name,
//                 description: this.props.repo.description,
//                 owner: {
//                     login: this.props.repo.owner.login,
//                     avatar_url: this.props.repo.owner.avatar_url
//                 },
//                 language: this.props.repo.language,
//                 public: this.props.repo.private,
//                 githubLink: this.props.repo.html_url,
//                 homepage: this.props.repo.homepage,
//             })
//         })
//         }
//         else {
//             setTimeout(() => this.props.onUncheck(this.props.repo.id), 400);
//             this.setState({
//                 favourite: false,
//                 starColor: ""
//             });
//             fetch("http://localhost:3004/favourites/" + this.props.repo.id, {
//             method: 'DELETE',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 id: this.props.repo.id,
//             })
//         })
//         }
//     }

//     checkFavourites()
//     {
//         const favList = this.props.fav;
//         for (let i=0; i<favList.length; i++){    
//             if (favList[i] == this.props.repo.id) {
//                 this.setState({
//                     favourite: true,
//                     starColor: "colored"
//                 })
//             }
//         }
//     }

//     render(){
//         const repo = this.props.repo;
//         return(
//             <div key={repo.id} className="container button-small-radius margin-10percent text-center shadow width-80percent col-lg-4 col-md-6 col-sm-12">
//                 <div className="margin-top-auto margin-bottom-auto padding-10percent col-lg-6 col-md-6 col-sm-6"><h4 className="bold"><Link className="a-secondary" to={"/reps/" + repo.owner.login + "/" + repo.name}>{repo.name}</Link></h4></div>
//                 <div className="margin-top-auto margin-bottom-auto padding-10percent col-lg-6 col-md-6 col-sm-6"><img className="button-oval width-50percent" src={repo.owner.avatar_url}></img></div>
//                 <div className="line width-80percent text-center col-lg-12 col-md-12 col-sm-12 padding-top-10px"></div>
//                 <div className="col-lg-1 col-md-1 col-sm-1"></div>
//                 <div className="col-lg-10 col-md-10 col-sm-10"><h5>{repo.description}</h5></div>
//                 <div className="col-lg-1 col-md-1 col-sm-1"></div>
//                 <div className="col-lg-1 col-md-1 col-sm-1"></div>
//                 <div className="col-lg-5 col-md-5 col-sm-5"><h5 className="bold">Owner:</h5></div>
//                 <div className="col-lg-5 col-md-5 col-sm-5"><h5>{repo.owner.login}</h5></div>
//                 <div className="col-lg-1 col-md-1 col-sm-1"></div>
//                 <div className="col-lg-1 col-md-1 col-sm-1"></div>
//                 <div className="col-lg-5 col-md-5 col-sm-5"><h5 className="bold">Language:</h5></div>
//                 <div className="col-lg-5 col-md-5 col-sm-5"><h5>{repo.language ? repo.language : "Not defined"}</h5></div>
//                 <div className="col-lg-1 col-md-1 col-sm-1"></div>
//                 <div className="col-lg-1 col-md-1 col-sm-1"></div>
//                 <div className="col-lg-5 col-md-5 col-sm-5"><h5 className="bold">Public:</h5></div>
//                 <div className="col-lg-5 col-md-5 col-sm-5"><h5>{repo.private ? "No" : "Yes"}</h5></div>
//                 <div className="col-lg-1 col-md-1 col-sm-1"></div>
//                 <div className="col-lg-2 col-md-2 col-sm-2"></div>
//                 <div className="col-lg-8 col-md-8 col-sm-8"><a className="small a-link" href={repo.html_url}>See repository on GitHub ></a></div>
//                 <div className="col-lg-2 col-md-2 col-sm-2"></div>
//                 <div className="col-lg-2 col-md-2 col-sm-2"></div>
//                 <div className="padding-bottom-10px col-lg-8 col-md-8 col-sm-8"><a className="small a-link" href={repo.homepage}>Visit homepage ></a></div>
//                 <div className="col-lg-2 col-md-2 col-sm-2"></div>
//                 <div className="paddin-10px col-lg-10 col-md-10 col-sm-10"></div>
//                 <div className="padding-10px col-lg-2 col-md-2 col-sm-2"><i className={this.state.starColor + " button button-hover-opacity medium fa fa-star"} onClick={() => this.addToFavourites()}></i></div>
//             </div>
//         )
//     }
// }

// export default Repo;

import React from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import {changeFavourites} from '../redux/actions/repos';

class Repo extends React.Component
{
    render(){
        const repo = this.props.repo;
        let starClass = '';
        if (repo.fav) {
            starClass = 'colored';
        }
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
                <div className="paddin-10px col-lg-10 col-md-10 col-sm-10"></div>
                <div className="padding-10px col-lg-2 col-md-2 col-sm-2"><i className={starClass + " button button-hover-opacity medium fa fa-star"} onClick={(e) => this.props.changeFavourites(e, repo)}></i></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    repos: state.repos
});
  
const mapDispatchToProps = dispatch => ({
    changeFavourites: (e, repo) => dispatch(changeFavourites(repo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Repo);
import React from 'react';
import Repo from './repo';

class Favourites extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            reps: [],
            loading: true,
            favourites: [],
            message: "There is nothing here :(",
        };
        this.createFavourites();
        this.showFavourites();
    }

    createFavourites(){
        const favourites = [];
        fetch("http://localhost:3004/favourites/")
        .then(resp => {
            resp.json().then((json)=> {
                json.map((value) => favourites.push(value.id))
                this.setState({
                    favourites: favourites
                });
            });
        })
    }

    showFavourites()
    {
        fetch("http://localhost:3004/favourites/")
        .then(resp => {
            resp.json().then((json) => {
                if (json == "") {
                    this.setState({
                        reps: [],
                        loading: false,
                    })
                }
                else {
                    this.setState({
                        reps: json,
                        loading: false,
                        message: '',
                    })
                }
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    uncheck(repoId) {
        let reps = this.state.reps
        reps.map((r, key) => {
            if (r.id === repoId ) {
                reps.splice(key, 1);
            }
        })
        this.setState({reps});
    }

    render(){
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 container">
            <div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px padding-bottom-50px">
                <h2>This are your favourite repositories:</h2>
            </div>
            {this.state.loading && (<div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px padding-bottom-50px">LOADING DATA<div className="loader text-center"></div></div>)}
            <div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px padding-bottom-50px"></div>
            {this.state.reps.map(repo => { return <Repo repo={repo} key={repo.id} fav={this.state.favourites} onUncheck={(repoId) => this.uncheck(repoId)}/>})}
            <div className="col-lg-12 col-md-12 col-sm-12">{this.state.message}</div>
            </div>
        )
    }

}

export default Favourites;
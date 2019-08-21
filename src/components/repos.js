import React from 'react';
import Repo from './repo';
import SearchInput from './searchInput';

class Reps extends React.Component
{
    constructor(props)
    {
        super(props);
        this.filter('q=language:');
        this.createFavourites();
        this.state = {
            reps: [],
            errorMessage: '',
            loading: true,
            category: "All",
            search: "",
            currentRepo: "",
            favourites: [],
            favChecked: false,
        }
    }

    handleLanguage(e)
    {
        let param = "";
        if (this.state.search == ""){
            param = "q=";
        }
        else {
            param = "q=" + this.state.search + "+";
        }
        let lang = e.target.value;
        if (lang == "All") {
            lang = "";
        }
        param = param + "language:" + lang;
        this.setState({
            errorMessage: "",
            category: e.target.value,
            reps: [],
            loading: true,
        }, () => this.filter(param));
    }

    handleSearch(value)
    {
        let param="";
        if ((this.state.category == "All") && (value == "")) {
            param = "q=language:";
        }
        else {
            param = "q=" + value + "+language:" + this.state.category;
        }
        this.setState({
            errorMessage: "",
            search: value,
            reps: [],
            loading: true,
        }, () => this.filter(param))
    }

    handleFavourites()
    {
        if (this.state.favChecked) {
            let param = "";
            if (this.state.category == "All") {
                param = "q=" + this.state.search + "+language:";
            }
            else {
                param = "q=" + this.state.search + "+language:" + this.state.category;
            }
            this.setState({
                errorMessage: "",
                reps: [],
                loading: true,
                favChecked: false
            }, () => this.filter(param))
        }
        else {
            let param = "";
            if ((this.state.category == "All") && (this.state.search == "")) {
                param = "";
            }
            else {
                if ((this.state.search == "") && (this.state.category != "All")) {
                    param = "&language=" + this.state.category;
                }
                else if ((this.state.category == "All") && (this.state.search != "")) {
                    param = this.state.search;
                }
                else if ((this.state.search != "") && (this.state.category != "All")) {
                    param = this.state.search + "&language=" + this.state.category;
                }
            }
            this.setState({
                errorMessage: "",
                reps: [],
                loading: true,
                favChecked: true,
            }, () => this.showFavourites(param))
        }
    }

    filter(param)
    {
        let query = "https://api.github.com/search/repositories?" + param;
        fetch(query)
        .then(resp => {
            resp.json().then((json)=> {
                if (json.message)
                {
                    this.setState({
                        errorMessage: json.message,
                        reps: [],
                        loading: false,
                    })
                }
                else if (json.items.length === 0) {
                    this.setState({
                        errorMessage: "Nothing found :(",
                        reps: [],
                        loading: false,
                    })
                }
                else {
                    this.setState({
                        errorMessage: "",
                        reps: json.items,
                        loading: false,
                    })
                }
            }).catch((error) => {
                console.log(error);
            });;
        })
    }

    showFavourites(param)
    {
        let query = "http://localhost:3004/favourites?q=" + param
        fetch(query)
        .then(resp => {
            resp.json().then((json)=> {
                if (json.message)
                {
                    this.setState({
                        errorMessage: json.message,
                        reps: [],
                        loading: false,
                    })
                }
                else if (json.length === 0) {
                    this.setState({
                        errorMessage: "Nothing found :(",
                        reps: [],
                        loading: false,
                    })
                }
                else {
                    this.setState({
                        errorMessage: "",
                        reps: json,
                        loading: false,
                    })
                }
            }).catch((error) => {
                console.log(error);
            });;
        })
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
    
  render(){
    let languages = ["All", "HTML", "CSS", "JavaScript", "Python", "Java", "PHP"];
    return(
        <div className="col-lg-12 col-md-12 col-sm-12 container">
            <div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px padding-bottom-50px">
                <h2>This are all of the GitHub repositories:</h2>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-1"></div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                Search by name:
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <SearchInput handleSearch={(e) => this.handleSearch(e)}/>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-1"></div>
            <div className="col-lg-2 col-md-2 col-sm-1"></div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                Filter by languages:
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <select className="input-style1-secondary input-medium-70" onChange={(event) => this.handleLanguage(event)}>
                    {languages.map((value, key) => {return <option key={value}>{value}</option>})}
                </select>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-1"></div>
            <div className="col-lg-2 col-md-2 col-sm-1"></div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                See Favourites only:
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                <input type="checkbox" className="input-style1-secondary" onChange={() => this.handleFavourites()}></input>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-1"></div>
            {this.state.loading && (<div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px padding-bottom-50px">LOADING DATA<div className="loader text-center"></div></div>)}
            <div className="col-lg-2 col-md-2 col-sm-1"></div>
            <div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px padding-bottom-50px"></div>
            {this.state.reps.map(repo => { return <Repo repo={repo} fav={this.state.favourites}/>})}
            <div className="col-lg-12 col-md-12 col-sm-12">{this.state.errorMessage}</div>
        </div>
    )
  }
}

export default Reps;
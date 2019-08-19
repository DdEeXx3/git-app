import React from 'react';
import Repo from './repo';
import SearchInput from './searchInput';

class Reps extends React.Component
{
    constructor(props)
    {
        super(props);
        this.filterByLanguage('');
        this.state = {
            reps: [],
            errorMessage: '',
            loading: true,
            category: "All",
            search: "",
            currentRepo: ""
        }
    }

    handleLanguage(e)
    {
        this.setState({
            errorMessage: "",
            category: e.target.value,
            reps: [],
            loading: true,
        }, () => this.filterByLanguage(this.state.category));
    }

    handleSearch(value)
    {
        this.setState({
            errorMessage: "",
            search: value,
            reps: [],
            loading: true,
        }, () => this.searchByName(this.state.search))
    }

    filterByLanguage(language)
    {
        if (language == "All"){
            language = '';
        }

        fetch("https://api.github.com/search/repositories?q=language:" + language)
        .then(resp => {
            resp.json().then((json)=> {
                this.setState({
                    reps: json.items,
                    loading: false,
                })
            });
        }).catch((error) =>  {
            console.log(error);
        });
    }

    searchByName(name)
    {
        if (name === ""){
            this.filterByLanguage("All");
            return
        }
        fetch("https://api.github.com/search/repositories?q=" + name)
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
    
  render(){
    let languages = ["All", "HTML", "CSS", "JavaScript", "Python", "Java", "PHP"]
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
            {this.state.loading && (<div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px padding-bottom-50px">LOADING DATA<div className="loader text-center"></div></div>)}
            <div className="col-lg-2 col-md-2 col-sm-1"></div>
            <div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px padding-bottom-50px"></div>
            {this.state.reps.map(repo => { return <Repo repo={repo}/>})}
            <div className="col-lg-12 col-md-12 col-sm-12">{this.state.errorMessage}</div>
        </div>
    )
  }
}

export default Reps;
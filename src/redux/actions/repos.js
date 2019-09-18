export const fetchData1 = () => {
    return {
        type: 'FETCH_DATA_1_REQUEST',
    }
}

export const successFetchData1 = (response) => {
    return {
        type: 'FETCH_DATA_1_SUCCESS',
        response
    }
}

export const errorFetchData1 = (error) => {
    return {
        type: 'FETCH_DATA_1_FAILURE',
        error
    }
}

export const fetchData2 = () => {
    return {
        type: 'FETCH_DATA_2_REQUEST',
    }
}

export const successFetchData2 = (response) => {
    return {
        type: 'FETCH_DATA_2_SUCCESS',
        response
    }
}

export const errorFetchData2 = (error) => {
    return {
        type: 'FETCH_DATA_2_FAILURE',
        error
    }
}

export const fetchData3 = () => {
    return {
        type: 'FETCH_DATA_3_REQUEST',
    }
}

export const successFetchData3 = (response) => {
    return {
        type: 'FETCH_DATA_3_SUCCESS',
        response
    }
}

export const errorFetchData3 = (error) => {
    return {
        type: 'FETCH_DATA_3_FAILURE',
        error
    }
}

const fetchFavourites = (favourites, favouritesState) => {
    return {
        type: 'CREATE_FAVOURITES',
        value: favourites,
        favouritesState: favouritesState,
    }
}

const createFavouritesState = () => {
    return (dispatch, getState) => {
        const favouritesList = getState().repos.favourites;
        const favouritesState = []
        favouritesList.map( (value) => {
            fetch("https://api.github.com/repositories/" + value)
            .then(resp => {
                resp.json().then((json) => {
                    json.fav = true;
                    favouritesState.push(json);
                    dispatch(fetchFavourites(getState().repos.favourites, favouritesState));
                    return favouritesState;
                })
            })
        })
    }
}

export const createFavourites = () => {
    return (dispatch, getState) => {
        const favourites = [];
        fetch("http://localhost:3004/favourites/")
        .then(resp => {
            resp.json().then((json) => { 
                json.map((value) => favourites.push(value.id));
                dispatch(fetchFavourites(favourites, getState().repos.favReps));
                dispatch(createFavouritesState());
                return favourites; 
            })
            
        })
    }
}

const handleSearchAction = (e) => {
    return {
        type: 'HANDLE_SEARCH',
        value: e,
    }
}

export const handleSearch = (e) => {
    return (dispatch, getState) => {
        dispatch(handleSearchAction(e))
        dispatch(filter(getState().repos.param))
    }
}

const handleLanguageAction = (e) => {
    return {
        type: 'HANDLE_LANGUAGE',
        value: e.target.value,
    }
}

export const handleLanguage = (e) => {
    return (dispatch, getState) => {
        dispatch(handleLanguageAction(e))
        dispatch(filter(getState().repos.param))
    }
}

const handleFavouritesAction = () => {
    return {
        type: 'HANDLE_FAVOURITES'
    }
}

export const handleFavourites = () => {
    return (dispatch, getState) => {
        dispatch(handleFavouritesAction());
        if (getState().repos.favChecked) {
            dispatch(showFavourites(getState().repos.param));
        }
        else {
            dispatch(filter(getState().repos.param));
        }
    }
}

const changeFavouritesAction = (reps, favReps, repo) => {
    return {
        type: 'CHANGE_FAVOURITES',
        reps: reps,
        repo: repo,
        favReps: favReps
    }
}   

export const changeFavourites = (repo) => {
    return (dispatch, getState) => {
        const reps = getState().repos.reps;
        const favReps = getState().repos.favReps;
        reps.map((rep, key) => {
            if (rep.id == repo.id) {
                if (!reps[key].fav) {
                    reps[key].fav = true;
                    favReps.push(reps[key]);
                    fetch("http://localhost:3004/favourites", {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: repo.id,
                            name: repo.name,
                            description: repo.description,
                            owner: {
                                login: repo.owner.login,
                                avatar_url: repo.owner.avatar_url
                            },
                            language: repo.language,
                            public: repo.private,
                            githubLink: repo.html_url,
                            homepage: repo.homepage,
                        })
                    })
                }
                else {
                    reps[key].fav = false;
                    favReps.splice(key, 1);
                    fetch("http://localhost:3004/favourites/" + repo.id, {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: repo.id,
                        })
                    })
                }
            }
        })
        dispatch(changeFavouritesAction(reps, favReps, repo));
        return reps;
    }
}

export const filter = (param) => {
    return dispatch => {
        dispatch(fetchData1());
        let query = "https://api.github.com/search/repositories?" + param;
        fetch(query)
        .then(resp => {
            resp.json().then((json) => {
                if (json.message) {
                    dispatch(errorFetchData2(json.message));
                }
                else if (json.items.length === 0) {
                    dispatch(errorFetchData2("Nothing found :("));
                }
                else {
                    dispatch(successFetchData1(json.items));
                }
                return json.items;
            })
            .catch(error => {
                dispatch(errorFetchData1(error));
            })
        })
    }
};

export const showFavourites = (param) => {
    return dispatch => {
        dispatch(fetchData2());
        let query = "http://localhost:3004/favourites?q=" + param;
        fetch(query)
        .then(resp => {
            resp.json().then((json) => {
                if (json.message) {
                    dispatch(errorFetchData2(json.message));
                }
                else if (json.length === 0) {
                    dispatch(errorFetchData2("Nothing found :("));
                }
                else {
                    dispatch(successFetchData2(json));
                }
                return json;
            })
            .catch(error => {
                console.log(error);
            })
        })
    }
};

export const showMyRepos = () => {
    return dispatch => {
        dispatch(fetchData3());
        fetch("http://localhost:3005/my_repos")
        .then(resp => {
            resp.json().then((json) => {
                if (json.message) {
                    dispatch(errorFetchData3(json.message));
                }
                else if (json.length === 0) {
                    dispatch(errorFetchData3("Nothing found :("));
                }
                else {
                    dispatch(successFetchData3(json));
                }
                return json;
            })
            .catch(error => {
                console.log(error);
            })
        })
    }
}


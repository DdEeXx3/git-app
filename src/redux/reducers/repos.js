const repos = {reps: [], favReps: [], myReps: [], errorMessage: '', loading: true, category: 'All', search: '', currentRepo: '', favourites: [], favChecked: false, param: 'q=language:'};

const reposReducer = (state = repos, action) => {
    switch(action.type) {
        case 'FETCH_DATA_1_REQUEST':
            return Object.assign({}, state)
        case 'FETCH_DATA_1_SUCCESS':
            return Object.assign({}, state, {loading: false, reps: populateFav(action.response, state.favourites)})
        case 'FETCH_DATA_1_FAILURE':
            return Object.assign({}, state, {loading: false, errorMessage: action.error})
        case 'FETCH_DATA_2_REQUEST':
            return Object.assign({}, state)
        case 'FETCH_DATA_2_SUCCESS':
            return Object.assign({}, state, {loading: false, reps: populateFav(action.response, state.favourites)})
        case 'FETCH_DATA_2_FAILURE':
            return Object.assign({}, state, {loading: false, errorMessage: action.error})
        case 'FETCH_DATA_3_REQUEST':
            return Object.assign({}, state)
        case 'FETCH_DATA_3_SUCCESS':
            return Object.assign({}, state, {loading: false, reps: action.response, myReps: action.response})
        case 'FETCH_DATA_3_FAILURE':
            return Object.assign({}, state, {loading: false, errorMessage: action.error})
        case 'HANDLE_SEARCH':
            return Object.assign({}, state, {errorMessage: '', search: action.value, reps: [], loading: true, param: createSearchQueryParam(state.category, action.value)})
        case 'HANDLE_LANGUAGE':
            return Object.assign({}, state, {errorMessage: '', category: action.value, reps: [], loading: true, param: createLanguageQueryParam(state.search, action.value)})
        case 'HANDLE_FAVOURITES':
            return Object.assign({}, state, {errorMessage: '', reps: [], loading: true, favChecked: !state.favChecked, param: createFavouritesQueryParam(state.favChecked, state.category, state.search)})
        case 'CREATE_FAVOURITES':
            return Object.assign({}, state, {favourites: action.value, reps: populateFav(state.reps, action.value), favReps: action.favouritesState})
        case 'CHANGE_FAVOURITES':
            return Object.assign({}, state, {reps: action.reps, favReps: action.favReps})
        default:
            return state;
    }
};

function createSearchQueryParam (categoryState, value) {
    let param = "";
    if ((categoryState == "All") && (value == "")) {
        param = "q=language:";
    }
    else {
        param = "q=" + value + "+language:" + categoryState;
    }
    return param;
};

function createLanguageQueryParam (searchState, value) {
    let param = "";
    if (searchState == ""){
        param = "q=";
    }
    else {
        param = "q=" + searchState + "+";
    }
    let lang = value;
    if (lang == "All") {
        lang = "";
    }
    param = param + "language:" + lang;
    return param;
};

function createFavouritesQueryParam (favCheckedState, categoryState, searchState) {
    let param = "";
    if (favCheckedState) {
        if (categoryState == "All") {
            param = "q=" + searchState + "+language:";
        }
        else {
            param = "q=" + searchState + "+language:" + categoryState;
        }
    }
    else {
        if ((categoryState == "All") && (searchState == "")) {
            param = "";
        }
        else {
            if ((searchState == "") && (categoryState != "All")) {
                param = "&language=" + categoryState;
            }
            else if ((categoryState == "All") && (searchState != "")) {
                param = searchState;
            }
            else if ((searchState != "") && (categoryState != "All")) {
                param = searchState + "&language=" + categoryState;
            }
        }
    }
    return param;
};


const populateFav = (reps, favs) => {
    reps.map((rep, key) => {
        if (favs.indexOf(rep.id) >= 0) {
            reps[key].fav = true;
        } else {
            reps[key].fav = false;
        }
    })
    return reps;
}

export default reposReducer;
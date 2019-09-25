import Swal from 'sweetalert2';

export const showForm = () => {
    return {
        type: 'SHOW_FORM'
    }
}

export const showSendButton = () => {
    return {
        type: "SHOW_SEND_BUTTON"
    }
}

const handleRepoNameAction = (e) => {
    return {
        type: "HANDLE_REPO_NAME",
        value: e.target.value
    }
}

export const handleRepoName = (e) => {
    return (dispatch) => {
        dispatch(handleRepoNameAction(e));
        dispatch(showSendButton());
    }
}

const handleDescriptionAction = (e) => {
    return {
        type: "HANDLE_DESCRIPTION",
        value: e.target.value
    }
}

export const handleDescription = (e) => {
    return (dispatch) => {
        dispatch(handleDescriptionAction(e));
        dispatch(showSendButton());
    }
}

const handleOwnerAction = (e) => {
    return {
        type: "HANDLE_OWNER",
        value: e.target.value
    }
}

export const handleOwner = (e) => {
    return (dispatch) => {
        dispatch(handleOwnerAction(e));
        dispatch(showSendButton());
    }
}

const handleLanguageAction = (e) => {
    return {
        type: "HANDLE_FORM_LANGUAGE",
        value: e.target.value
    }
}

export const handleLanguage = (e) => {
    return (dispatch) => {
        dispatch(handleLanguageAction(e));
        dispatch(showSendButton());
    }
}

const handlePrivacyAction = (e) => {
    return {
        type: "HANDLE_PRIVACY",
        value: e.target.value
    }
}

export const handlePrivacy = (e) => {
    return (dispatch) => {
        dispatch(handlePrivacyAction(e));
        dispatch(showSendButton());
    }
}

const handleGithubURLAction = (e) => {
    return {
        type: "HANDLE_GITHUB_URL",
        value: e.target.value
    }
}

export const handleGithubURL = (e) => {
    return (dispatch) => {
        dispatch(handleGithubURLAction(e));
        dispatch(showSendButton());
    }
}

const handleHomepageURLAction = (e) => {
    return {
        type: "HANDLE_HOMEPAGE_URL",
        value: e.target.value
    }
}

export const handleHomepageURL = (e) => {
    return (dispatch) => {
        dispatch(handleHomepageURLAction(e));
        dispatch(showSendButton());
    }
}

const handleImageURLAction = (e) => {
    return {
        type: "HANDLE_IMAGE_URL",
        value: e.target.value
    }
}

export const handleImageURL = (e) => {
    return (dispatch) => {
        dispatch(handleImageURLAction(e));
        dispatch(showSendButton());
    }
}

export const addRepo = (repo) => {
    return (dispatch) => {
        if (repo[4] == 'yes') {
            repo[4] = false;
        }
        else {
            repo[4] = true;
        }
        const query = "https://api.github.com/search/repositories?q=" + repo[0] + " in:name+user:" + repo[2];
        fetch(query)
        .then(resp => {
            resp.json().then((json) => {
                var id; 
                var avatar;
                if (repo[7] == '') {
                    if (json.message == "Validation Failed") {
                        avatar = "https://i.ibb.co/bLfJvqH/Circle-icons-camera-svg.png";
                    }
                    else {
                        id = json.items[0].id;
                        avatar = json.items[0].owner.avatar_url;
                    }
                }
                else {
                    avatar = repo[7];
                } 
                fetch("http://localhost:3005/my_repos", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: id,
                        name: repo[0],
                        description: repo[1],
                        owner: {
                            login: repo[2],
                            avatar_url: avatar
                        },
                        language: repo[3],
                        public: repo[4],
                        html_url: repo[5],
                        homepage: repo[6],
                    })
                })
                dispatch(showForm());
                Swal.fire({
                    position: 'middle-center',
                    type: 'success',
                    title: 'Your repository has been added!',
                    showConfirmButton: false,
                    timer: 2000
                });
                setTimeout(function () {
                    if(window.location.hash != '#r') {
                        window.location.hash = 'r';
                        window.location.reload(1);
                    }
                    else {
                        window.location.hash = '#r';
                        window.location.reload(1);
                    }
                }, 2000);
            })
        })
    }
}

export const deleteMyRepo = (repo) => {
    return () => {
        const query = "http://localhost:3005/my_repos/" + repo.id;
        fetch(query, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: repo.id,
            })
        })
        Swal.fire({
            position: 'middle-center',
            type: 'success',
            title: 'Selected repository has been removed!',
            showConfirmButton: false,
            timer: 2000
        });
        setTimeout(function () {
            if(window.location.hash != '#r') {
                window.location.hash = 'r';
                window.location.reload(1);
            }
            else {
                window.location.hash = '#r';
                window.location.reload(1);
            }
        }, 2000);
    }
}

export const showImageInfo = () => {
    return {
        type: "SHOW_IMAGE_INFO"
    }
}

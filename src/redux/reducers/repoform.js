const repoForm = {
    displayForm: "none", 
    buttonInformation: "Add new repository", 
    buttonColor: "success", 
    buttonIcon: "fa-plus-circle", 
    validationSuccess: ["", "", "", "", "", "", "", true], 
    validationIcon: ["", "", "", "", "", "", "", ""], 
    validationFormColor: ["primary", "primary", "primary", "primary", "primary", "primary", "primary", "primary"], 
    validationMessage: ["", "", "", "", "", "", "", ""],
    sendButtonVisibility: "hide-button",
    formValues: ["", "", "", "", "", "", "", ""],
    displayImageInfo: "none",
    imageButtonTransition: "",
    imageEffect: "",
};

const repoFormReducer = (state = repoForm, action) => {
    switch(action.type) {
        case "SHOW_FORM":
            return Object.assign({}, state, {
                displayForm: changeFormVisibility(state.displayForm, state.buttonInformation, state.buttonColor, state.buttonIcon, 0), 
                buttonInformation: changeFormVisibility(state.displayForm, state.buttonInformation, state.buttonColor, state.buttonIcon, 1), 
                buttonColor: changeFormVisibility(state.displayForm, state.buttonInformation, state.buttonColor, state.buttonIcon, 2), 
                buttonIcon: changeFormVisibility(state.displayForm, state.buttonInformation, state.buttonColor, state.buttonIcon, 3),
            });
        case "HANDLE_REPO_NAME":
            return Object.assign({}, state, {
                validationSuccess: [validateRepoName(action.value, 0), state.validationSuccess[1], state.validationSuccess[2], state.validationSuccess[3], state.validationSuccess[4], state.validationSuccess[5], state.validationSuccess[6], state.validationSuccess[7]],
                validationIcon: [validateRepoName(action.value, 1), state.validationIcon[1], state.validationIcon[2], state.validationIcon[3], state.validationIcon[4], state.validationIcon[5], state.validationIcon[6], state.validationIcon[7]],
                validationFormColor: [validateRepoName(action.value, 2), state.validationFormColor[1], state.validationFormColor[2], state.validationFormColor[3], state.validationFormColor[4], state.validationFormColor[5], state.validationFormColor[6], state.validationFormColor[7]],
                validationMessage: [validateRepoName(action.value, 3), state.validationMessage[1], state.validationMessage[2], state.validationMessage[3], state.validationMessage[4], state.validationMessage[5], state.validationMessage[6], state.validationMessage[7]],
                formValues: [action.value, state.formValues[1], state.formValues[2], state.formValues[3], state.formValues[4], state.formValues[5], state.formValues[6], state.formValues[7]]            
            });
        case "HANDLE_DESCRIPTION":
            return Object.assign({}, state, {
                validationSuccess: [state.validationSuccess[0], validateDescription(action.value, 0), state.validationSuccess[2], state.validationSuccess[3], state.validationSuccess[4], state.validationSuccess[5], state.validationSuccess[6], state.validationSuccess[7]],
                validationIcon: [state.validationIcon[0], validateDescription(action.value, 1), state.validationIcon[2], state.validationIcon[3], state.validationIcon[4], state.validationIcon[5], state.validationIcon[6], state.validationIcon[7]],
                validationFormColor: [state.validationFormColor[0], validateDescription(action.value, 2), state.validationFormColor[2], state.validationFormColor[3], state.validationFormColor[4], state.validationFormColor[5], state.validationFormColor[6], state.validationFormColor[7]],
                validationMessage: [state.validationMessage[0], validateDescription(action.value, 3), state.validationMessage[2], state.validationMessage[3], state.validationMessage[4], state.validationMessage[5], state.validationMessage[6], state.validationMessage[7]],
                formValues: [state.formValues[0], action.value, state.formValues[2], state.formValues[3], state.formValues[4], state.formValues[5], state.formValues[6], state.formValues[7]]
            });
        case "HANDLE_OWNER":
            return Object.assign({}, state, {
                validationSuccess: [state.validationSuccess[0], state.validationSuccess[1], validateRepoName(action.value, 0), state.validationSuccess[3], state.validationSuccess[4], state.validationSuccess[5], state.validationSuccess[6], state.validationSuccess[7]],
                validationIcon: [state.validationIcon[0], state.validationIcon[1], validateRepoName(action.value, 1), state.validationIcon[3], state.validationIcon[4], state.validationIcon[5], state.validationIcon[6], state.validationIcon[7]],
                validationFormColor: [state.validationFormColor[0], state.validationFormColor[1], validateRepoName(action.value, 2), state.validationFormColor[3], state.validationFormColor[4], state.validationFormColor[5], state.validationFormColor[6], state.validationFormColor[7]],
                validationMessage: [state.validationMessage[0], state.validationMessage[1], validateRepoName(action.value, 3), state.validationMessage[3], state.validationMessage[4], state.validationMessage[5], state.validationMessage[6], state.validationMessage[7]],
                formValues: [state.formValues[0], state.formValues[1], action.value, state.formValues[3], state.formValues[4], state.formValues[5], state.formValues[6], state.formValues[7]]
            });
        case "HANDLE_FORM_LANGUAGE":
            return Object.assign({}, state, {
                validationSuccess: [state.validationSuccess[0], state.validationSuccess[1], state.validationSuccess[2], true, state.validationSuccess[4], state.validationSuccess[5], state.validationSuccess[6], state.validationSuccess[7]],
                validationIcon: [state.validationIcon[0], state.validationIcon[1], state.validationIcon[2], "fa-check-circle", state.validationIcon[4], state.validationIcon[5], state.validationIcon[6], state.validationIcon[7]],
                validationFormColor: [state.validationFormColor[0], state.validationFormColor[1], state.validationFormColor[2], "success", state.validationFormColor[4], state.validationFormColor[5], state.validationFormColor[6], state.validationFormColor[7]],
                validationMessage: [state.validationMessage[0], state.validationMessage[1], state.validationMessage[2], "", state.validationMessage[4], state.validationMessage[5], state.validationMessage[6], state.validationMessage[7]],
                formValues: [state.formValues[0], state.formValues[1], state.formValues[2], action.value, state.formValues[4], state.formValues[5], state.formValues[6], state.formValues[7]]
            });
        case "HANDLE_PRIVACY":
            return Object.assign({}, state, {
                validationSuccess: [state.validationSuccess[0], state.validationSuccess[1], state.validationSuccess[2], state.validationSuccess[3], validatePrivacy(action.value, 0), state.validationSuccess[5], state.validationSuccess[6], state.validationSuccess[7]],
                validationIcon: [state.validationIcon[0], state.validationIcon[1], state.validationIcon[2], state.validationIcon[3], validatePrivacy(action.value, 1), state.validationIcon[5], state.validationIcon[6], state.validationIcon[7]],
                validationFormColor: [state.validationFormColor[0], state.validationFormColor[1], state.validationFormColor[2], state.validationFormColor[3], validatePrivacy(action.value, 2), state.validationFormColor[5], state.validationFormColor[6], state.validationFormColor[7]],
                validationMessage: [state.validationMessage[0], state.validationMessage[1], state.validationMessage[2], state.validationMessage[3], validatePrivacy(action.value, 3), state.validationMessage[5], state.validationMessage[6], state.validationMessage[7]],
                formValues: [state.formValues[0], state.formValues[1], state.formValues[2], state.formValues[3], action.value, state.formValues[5], state.formValues[6], state.formValues[7]]
            });
        case "HANDLE_GITHUB_URL":
            return Object.assign({}, state, {
                validationSuccess: [state.validationSuccess[0], state.validationSuccess[1], state.validationSuccess[2], state.validationSuccess[3], state.validationSuccess[4], validateGithubURL(action.value, 0), state.validationSuccess[6], state.validationSuccess[7]],
                validationIcon: [state.validationIcon[0], state.validationIcon[1], state.validationIcon[2], state.validationIcon[3], state.validationIcon[4], validateGithubURL(action.value, 1), state.validationIcon[6], state.validationIcon[7]],
                validationFormColor: [state.validationFormColor[0], state.validationFormColor[1], state.validationFormColor[2], state.validationFormColor[3], state.validationFormColor[4], validateGithubURL(action.value, 2), state.validationFormColor[6], state.validationFormColor[7]],
                validationMessage: [state.validationMessage[0], state.validationMessage[1], state.validationMessage[2], state.validationMessage[3], state.validationMessage[4], validateGithubURL(action.value, 3), state.validationMessage[6], state.validationMessage[7]],
                formValues: [state.formValues[0], state.formValues[1], state.formValues[2], state.formValues[3], state.formValues[4], action.value, state.formValues[6], state.formValues[7]]
            });
        case "HANDLE_HOMEPAGE_URL":
            return Object.assign({}, state, {
                validationSuccess: [state.validationSuccess[0], state.validationSuccess[1], state.validationSuccess[2], state.validationSuccess[3], state.validationSuccess[4], state.validationSuccess[5], validateHomepageURL(action.value, 0), state.validationSuccess[7]],
                validationIcon: [state.validationIcon[0], state.validationIcon[1], state.validationIcon[2], state.validationIcon[3], state.validationIcon[4], state.validationIcon[5], validateHomepageURL(action.value, 1), state.validationIcon[7]],
                validationFormColor: [state.validationFormColor[0], state.validationFormColor[1], state.validationFormColor[2], state.validationFormColor[3], state.validationFormColor[4], state.validationFormColor[5], validateHomepageURL(action.value, 2), state.validationFormColor[7]],
                validationMessage: [state.validationMessage[0], state.validationMessage[1], state.validationMessage[2], state.validationMessage[3], state.validationMessage[4], state.validationMessage[5], validateHomepageURL(action.value, 3), state.validationMessage[7]],
                formValues: [state.formValues[0], state.formValues[1], state.formValues[2], state.formValues[3], state.formValues[4], state.formValues[5], action.value, state.formValues[7]]
            });
        case "SHOW_SEND_BUTTON":
            return Object.assign({}, state, {
                sendButtonVisibility: validateButtonVisibility(state.validationSuccess),
            });
        case "SHOW_IMAGE_INFO":
            return Object.assign({}, state, {
                displayImageInfo: changeImageInfoVisibility(state.displayImageInfo, state.imageButtonTransition, state.imageEffect, 0),
                imageButtonTransition: changeImageInfoVisibility(state.displayImageInfo, state.imageButtonTransition, state.imageEffect, 1),
                imageEffect: changeImageInfoVisibility(state.displayImageInfo, state.imageButtonTransition, state.imageEffect, 2)
            });
        case "HANDLE_IMAGE_URL":
            return Object.assign({}, state, {
                validationSuccess: [state.validationSuccess[0], state.validationSuccess[1], state.validationSuccess[2], state.validationSuccess[3], state.validationSuccess[4], state.validationSuccess[5], state.validationSuccess[6], validateHomepageURL(action.value, 0)],
                validationIcon: [state.validationIcon[0], state.validationIcon[1], state.validationIcon[2], state.validationIcon[3], state.validationIcon[4], state.validationIcon[5], state.validationIcon[6], validateHomepageURL(action.value, 1)],
                validationFormColor: [state.validationFormColor[0], state.validationFormColor[1], state.validationFormColor[2], state.validationFormColor[3], state.validationFormColor[4], state.validationFormColor[5], state.validationFormColor[6], validateHomepageURL(action.value, 2)],
                validationMessage: [state.validationMessage[0], state.validationMessage[1], state.validationMessage[2], state.validationMessage[3], state.validationMessage[4], state.validationMessage[5], state.validationMessage[6], validateHomepageURL(action.value, 3)],
                formValues: [state.formValues[0], state.formValues[1], state.formValues[2], state.formValues[3], state.formValues[4], state.formValues[5], state.formValues[6], action.value]
            })
        default:
            return state;
    }
}

const changeFormVisibility = (displayForm, buttonInformation, buttonColor, buttonIcon, index) => {
    const state = [displayForm, buttonInformation, buttonColor, buttonIcon];
    if (state[0] == "none") {
        state[0] = "block";
        state[1] = "Cancel";
        state[2] = "error";
        state[3] = "fa-times-circle";
    }
    else {
        state[0] = "none";
        state[1] = "Add new repository";
        state[2] = "success";
        state[3] = "fa-plus-circle";
    }
    return state[index];
}

const validateRepoName = (value, index) => {
    const state = [];
    var format = /[!@#$%^&*()+\=\[\]{};':"\\|,<>\/?]+/;
    if (!format.test(value) && value.length != 0) {
        state[0] = true;
        state[1] = "fa-check-circle";
        state[2] = "success";
        state[3] = "";
    }
    else {
        state[0] = false;
        state[1] = "fa-exclamation-circle";
        state[2] = "error";
        if (value.length == 0) {
            state[3] = "This field cannot be empty!";
        }
        else {
            state[3] = 'You cannot use special characters! (except -, _ and .)';
        }
    }
    return state[index];
}

const validateDescription = (value, index) => {
    const state = [];
    if (value.length > 10) {
        state[0] = true;
        state[1] = "fa-check-circle";
        state[2] = "success";
        state[3] = "";
    }
    else {
        state[0] = false;
        state[1] = "fa-exclamation-circle";
        state[2] = "error";
        if (value.length == 0) {
            state[3] = "This field cannot be empty!";
        }
        else {
            state[3] = "Description must have at least 10 characters length!";
        }
    }
    return state[index];
}

const validatePrivacy = (value, index) => {
    const state = [];
    if ((value == "yes") || (value == "no")) {
        state[0] = true;
        state[1] = "fa-check-circle";
        state[2] = "success";
        state[3] = "";
    }
    else {
        state[0] = false;
        state[1] = "fa-exclamation-circle";
        state[2] = "error";
        if (value.length == 0) {
            state[3] = "This field cannot be empty!";
        }
        else {
            state[3] = 'This field can get "yes" or "no" value only';
        }
    }
    return state[index];
}

const validateGithubURL = (value, index) => {
    const state = [];
    if (((value.startsWith("http://")) || (value.startsWith("https://"))) && value.length != 0) {
        state[0] = true;
        state[1] = "fa-check-circle";
        state[2] = "success";
        state[3] = "";
    }
    else {
        state[0] = false;
        state[1] = "fa-exclamation-circle";
        state[2] = "error";
        if (value.length == 0) {
            state[3] = "This field cannot be empty!";
        }
        else {
            state[3] = "Invalid URL!"
        }
    }
    return state[index];
}

const validateHomepageURL = (value, index) => {
    const state = [];
    if ((value.startsWith("http://")) || (value.startsWith("https://")) || value.length == 0) {
        state[0] = true;
        state[1] = "fa-check-circle";
        state[2] = "success";
        state[3] = "";
    }
    else {
        state[0] = false;
        state[1] = "fa-exclamation-circle";
        state[2] = "error";
        state[3] = "Invalid URL!";
    }
    return state[index];
}

const validateButtonVisibility = (validationSuccess) => {
    var state = "show-button";
    console.log(validationSuccess);
    for (var i=0; i<validationSuccess.length; i++) {
        if (validationSuccess[i] == false) {
            state = "hide-button";
        }
    }
    return state;
}

const changeImageInfoVisibility = (displayImageInfo, imageButtonTransition, imageEffect, index) =>
{
    const state = [displayImageInfo, imageButtonTransition, imageEffect];
    if (state[0] == "none") {
        state[0] = "block";
        state[1] = "transition";
        state[2] = "image-effect";
    }
    else {
        state[0] = "none";
        state[1] = "";
        state[2] = "";
    }
    return state[index];
}

export default repoFormReducer;
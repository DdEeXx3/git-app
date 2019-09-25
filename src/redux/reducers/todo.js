const toDoList = {
    tasks: [],
    errorMessage: "",
    currentTask: "",
    currentTaskDeadline: "",
    doneSwitcher: false,
    sortValue: "Default",
    tasksDisplayed: []
};

const toDoListReducer = (state = toDoList, action) => {
    switch(action.type) {
        case "FETCH_TO_DO_LIST":
            return Object.assign({}, state, {
                tasks: action.value, 
                tasksDisplayed: action.value
            });
        case "ERROR_FETCH_TO_DO_LIST":
            return Object.assign({}, state, {
                errorMessage: action.error
            });
        case "HANDLE_CURRENT_TASK":
            return Object.assign({}, state, {
                currentTask: action.value}
            );
        case "HANDLE_CURRENT_TASK_DEADLINE":
            return Object.assign({}, state, {
                currentTaskDeadline: action.value
            });
        case "CLEAR_CURRENT_TASK":
            return Object.assign({}, state, {
                currentTask: "", 
                currentTaskDeadline: ""
            });
        case "CHANGE_DONE_TASK":
            return Object.assign({}, state, {tasks: action.value});
        case "SHOW_DONE":
            return Object.assign({}, state, {doneSwitcher: !state.doneSwitcher});
        case "SHOW_DONE_TASKS":
            return Object.assign({}, state, {tasksDisplayed: action.value});
        case "HANDLE_SORT_VALUE":
            return Object.assign({}, state, {sortValue: action.value});
        case "SORT_ACTION":
            return Object.assign({}, state, {tasksDisplayed: action.value});
        default:
            return state;
    }
};

export default toDoListReducer;
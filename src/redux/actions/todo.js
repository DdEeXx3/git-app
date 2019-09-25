import Swal from 'sweetalert2';

export const handleCurrentTask = (e) => {
    return {
        type: "HANDLE_CURRENT_TASK",
        value: e.target.value
    }
}

export const handleCurrentTaskDeadline = (e) => {
    return {
        type: "HANDLE_CURRENT_TASK_DEADLINE",
        value: e.target.value
    }
}

export const clearCurrentTask = () => {
    return {
        type: "CLEAR_CURRENT_TASK"
    }
}

export const addTask = (addDate, text, deadline) => {
    return (dispatch) => {
        fetch("http://localhost:3006/to_do_list", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                addDate: addDate,
                text: text,
                deadline: deadline,
                done: false,
            })
        });
        dispatch(clearCurrentTask());
        Swal.fire({
            position: 'middle-center',
            type: 'success',
            title: 'Your task has been added!',
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

export const deleteTask = (task) => {
    return () => {
        fetch("http://localhost:3006/to_do_list/" + task.id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: task.id,
            })
        });
        Swal.fire({
            position: 'middle-center',
            type: 'success',
            title: 'Selected task has been removed!',
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

export const getAddedTaskTime = () => {
    return () => {
        var today = new Date();
        var month = today.getMonth()+1;
        if (month > 0 && month < 10){
            month = "0" + month;
        }
        var date = today.getFullYear() + '-' + month + '-' + today.getDate();
        var time = "T" + today.getHours() + ":" + today.getMinutes();
        var dateTime = date + time;
        return dateTime;
    }
}

const fetchToDoList = (value) => {
    return {
        type: "FETCH_TO_DO_LIST",
        value
    }
}

const errorFetchToDoList = (error) => {
    return {
        type: "ERROR_FETCH_TO_DO_LIST",
        error
    }
}

export const createToDoList = () => {
    return (dispatch) => {
        fetch("http://localhost:3006/to_do_list")
        .then(resp => {
            resp.json().then((json) => {
                if (json.length == 0) {
                    dispatch(errorFetchToDoList("You haven't added any tasks yet :("));
                }
                else {
                    dispatch(fetchToDoList(json));
                }
                return json;
            })
        })
    }
}

const changeDoneTaskAction = (state) => {
    return {
        type: "CHANGE_DONE_TASK",
        value: state
    }
}

export const changeDoneTask = (task) => {
    return (dispatch, getState) => {
        const state = getState().toDoList.tasks;
        state.map((value, key) => {
            if (value.id == task.id) {
                if (!task.done) {
                    state[key].done = true;
                    fetch("http://localhost:3006/to_do_list/" + task.id, {
                        method: 'PATCH',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            done: true,
                        })
                    });
                }
                else {
                    state[key].done = false;
                    fetch("http://localhost:3006/to_do_list/" + task.id, {
                        method: 'PATCH',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            done: false,
                        })
                    });
                }
            }
        });
        dispatch(changeDoneTaskAction(state));
    }
}

const showDoneAction = () => {
    return {
        type: "SHOW_DONE",
    }
}

const showDoneTasks = (state) => {
    return {
        type: "SHOW_DONE_TASKS",
        value: state
    }
}

export const showDone = () => {
    return (dispatch, getState) =>
    {
        dispatch(showDoneAction())
        var tasks = getState().toDoList.tasks;
        var toDoTasks = [];
        var doneSwitch = getState().toDoList.doneSwitcher;
        tasks.map((task) => {
            if (doneSwitch) {
                if (!task.done) {
                    toDoTasks.push(task);
                }
            }
            else {
                toDoTasks.push(task);
            }
        });
        dispatch(showDoneTasks(toDoTasks));
        var sortValue = getState().toDoList.sortValue;
        dispatch(handleSort(sortValue));
    }
}

const handleSortAction = (e) => {
    return {
        type: "HANDLE_SORT_VALUE",
        value: e
    }
}

export const handleSort = (e) => {
    return (dispatch, getState) => {
        dispatch(handleSortAction(e));
        var doneSwitch = getState().toDoList.doneSwitcher;
        var tasks = getState().toDoList.tasks;
        var beforeSort = [];
        tasks.map((task) => {
            if (doneSwitch) {
                if (!task.done) {
                    beforeSort.push(task);
                }
            }
            else {
                beforeSort.push(task);
            }
        });
        if (e == "Default") {
            dispatch(setDefaultSort(beforeSort));
        }
        else if (e == "Alphabetically") {
            dispatch(sortAlphabetically(beforeSort)); 
        }
        else if (e == "By remaining time (most urgent first)") {
            dispatch(sortByRemainingTimeIncreasing(beforeSort));
        }
        else if (e == "By remaining time (least urgent first)") {
            dispatch(sortByRemainingTimeDecreasing(beforeSort));
        }
    }
}

const sortAction = (state) => {
    return {
        type: "SORT_ACTION",
        value: state
    }
}

const setDefaultSort = (beforeSort) => {
    return (dispatch) => {
        dispatch(sortAction(beforeSort));
    }
}

const sortAlphabetically = (beforeSort) => {
    return (dispatch) => {
        var afterSort = [];
        afterSort = beforeSort.sort((a, b) => a.text > b.text ? 1 : -1);
        dispatch(sortAction(afterSort));
    }
}

const sortByRemainingTimeIncreasing = (beforeSort) => {
    return (dispatch) => {
        var afterSort = [];
        var noDeadlineArray = [];
        afterSort = beforeSort.sort((a, b) => a.deadline > b.deadline ? 1 : -1);
        afterSort.map(task => {
            if (task.deadline == "") {
                noDeadlineArray.push(task);
            }
        });
        afterSort = afterSort.filter (task => task.deadline !== "");
        afterSort = afterSort.concat(noDeadlineArray);
        dispatch(sortAction(afterSort));
    }
}

const sortByRemainingTimeDecreasing = (beforeSort) => {
    return (dispatch) => {
        var afterSort = [];
        var noDeadlineArray = [];
        afterSort = beforeSort.sort((a, b) => a.deadline > b.deadline ? 1 : -1);
        afterSort = afterSort.reverse();
        afterSort.map(task => {
            if (task.deadline == "") {
                noDeadlineArray.push(task);
            }
        });
        afterSort = afterSort.filter (task => task.deadline !== "");
        afterSort = noDeadlineArray.concat(afterSort);
        dispatch(sortAction(afterSort));
    }
}
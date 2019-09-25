import React from 'react';
import Task from './task';
import {connect} from 'react-redux';
import {handleCurrentTask, handleCurrentTaskDeadline, clearCurrentTask, addTask, getAddedTaskTime, createToDoList, showDone, handleSort} from '../redux/actions/todo';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.props.createToDoList();
    }

    render() {
        return(
            <div className="col-lg-12 col-md-12 col-sm-12 container">
                <div className="col-lg-12 col-md-12 cols-sm-12 padding-top-50px padding-bottom-50px">
                    <h2>This is simple To Do List:</h2>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="container col-lg-8 col-md-10 col-sm-12 margin-left-20px margin-right-20px padding-top-50px padding-bottom-50px button-small-radius shadow">
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-10 col-md-10 col-sm-10">
                        <input type="text" className="input-big-80 input-style1-secondary" placeholder="Type what you have to do..." value={this.props.toDoList.currentTask} onChange={(e) => this.props.handleCurrentTask(e)}></input>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <h4 className="margin-top-4percent">Deadline (optional):</h4>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <input type="datetime-local" className="input-medium-80 input-style1-secondary" value={this.props.toDoList.currentTaskDeadline} onChange={(e) => this.props.handleCurrentTaskDeadline(e)}></input>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    <div className="col-lg-4 col-md-4 col-sm-4"></div>
                    <div className="col-lg-4 col-md-4 col-sm-4 container">
                        <button className="col-lg-6 col-md-6 col-sm-6 button-small button-medium-radius button-success button-hover-shadow-success" onClick={() => this.props.addTask(this.props.getAddedTaskTime(), this.props.toDoList.currentTask, this.props.toDoList.currentTaskDeadline)}>Add</button>
                        <button className="col-lg-6 col-md-6 col-sm-6 button-small button-medium-radius button-error button-hover-shadow-error" onClick={() => this.props.clearCurrentTask()}>Clear</button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4"></div>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className="col-lg-12 col-md-12 col-sm-12 padding-top-30px container">
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="padding-bottom-10px">Show only "to do" tasks:</div>
                        <label className="switch">
                            <input type="checkbox" onChange={() => this.props.showDone()}></input>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="padding-bottom-10px">Sort:</div>
                        <select className="input-style1-secondary input-medium-50" onChange={(e) => this.props.handleSort(e.target.value)}>
                            <option>Default</option>
                            <option>Alphabetically</option>
                            <option>By remaining time (most urgent first)</option>
                            <option>By remaining time (least urgent first)</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 padding-top-30px">{this.props.toDoList.errorMessage}</div>
                {this.props.toDoList.tasksDisplayed.map(task => { return <Task task={task} key={task.id}/>})}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    toDoList: state.toDoList
})

const mapDispatchToProps = dispatch => ({
    handleCurrentTask: (e) => dispatch(handleCurrentTask(e)),
    handleCurrentTaskDeadline: (e) => dispatch(handleCurrentTaskDeadline(e)),
    clearCurrentTask: () => dispatch(clearCurrentTask()),
    addTask: (addDate, text, deadline) => dispatch(addTask(addDate, text, deadline)),
    getAddedTaskTime: () => dispatch(getAddedTaskTime()),
    createToDoList: (tasks) => dispatch(createToDoList(tasks)),
    showDone: () => dispatch(showDone()),
    handleSort: (e) => dispatch(handleSort(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
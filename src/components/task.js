import React from 'react';
import {connect} from 'react-redux';
import { deleteTask, changeDoneTask} from '../redux/actions/todo';

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            remaining: '',
            deadlineInfoColor: '',
            deadlineInfoIcon: '',
            doneVisibility: '',
        }
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                remaining: this.calculateRemainingTime(this.props.task.deadline),
                deadlineInfoColor: this.updateDeadlineDesign(this.props.task.deadline, 0),
                deadlineInfoIcon: this.updateDeadlineDesign(this.props.task.deadline, 1)
            });
        }, 1000);
    }

    calculateRemainingTime = (date) => {
        var now = new Date();
        var deadline = date;
        deadline = new Date(deadline);
        var remainingTime = deadline.getTime() - now.getTime();
        var seconds = Math.floor((remainingTime) / (1000));
        var days = 0;
        var hours = 0;
        var minutes = 0;
        if (seconds <= 0) {
            remainingTime = "Remining time is out!";
        }
        else if (seconds > 0) {
            days = Math.floor(seconds / 86400);
            seconds = seconds - days * 86400;
            hours = Math.floor(seconds / 3600);
            seconds = seconds - hours * 3600;
            minutes = Math.floor(seconds / 60);
            const sec = seconds - minutes* 60;
            remainingTime = `${days}d ${hours}h ${minutes}min ${sec}s`;
        }
        else {
            remainingTime = "";
        }
        return remainingTime;
    }

    updateDeadlineDesign = (date, index) => {
        var design = ["", ""];
        var now = new Date();
        var deadline = date;
        deadline = new Date(deadline);
        var remainingTime = deadline.getTime() - now.getTime();
        var seconds = Math.floor((remainingTime) / (1000));
        if (seconds > 259200) {
            design[0] = "success";
            design[1] =  "fa-thumbs-up";
        }
        else if (seconds > 86400 && seconds <= 259200) {
            design[0] = "warning"; 
            design[1] = "fa-exclamation-circle";
        }
        else if (seconds < 86400){
            design[0] = "error";
            design[1] = "fa-exclamation-circle";
        }
        else {
            design[0] = "";
            design[1] = "fa-question-circle";
        }
        return design[index];
    }

    render() {
        const task = this.props.task;
        var doneStyle = "";
        var doneText = "";
        var doneIcon = ""
        if (task.done) {
            doneStyle = "done";
            doneText = "cross";
            doneIcon = "done-task-colored"
        }
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 container">
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
                <div className={"container col-lg-8 col-md-10 col-sm-12 margin-left-20px margin-right-20px margin-top-5px margin-bottom-5px padding-top-30px padding-bottom-30px button-small-radius shadow " + doneStyle}>
                    <div className={"deadline-container-" + this.state.deadlineInfoColor + " col-lg-2 col-md-2 col-sm-2"}>
                        <i class={"fa " + this.state.deadlineInfoIcon}></i>
                        <div className="the-smallest">{task.deadline != "" ? "Deadline in:" : "No deadline"}</div>
                        <div className="the-smallest">{this.state.remaining}</div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 flex">
                        <div className={"medium-small margin-auto " + doneText}>{task.text}</div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 flex">
                        <i className={"button done-task margin-top-auto margin-bottom-auto fa fa-check " + doneIcon} onClick={() => this.props.changeDoneTask(task)}></i>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 flex">
                        <i className="button delete-task margin-top-auto margin-bottom-auto fa fa-times" onClick={() => this.props.deleteTask(task)}></i>
                    </div>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-12"></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    toDoList: state.toDoList
})

const mapDispatchToProps = dispatch => ({
    deleteTask: (task) => dispatch(deleteTask(task)),
    changeDoneTask: (state, task) => dispatch(changeDoneTask(state, task))
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
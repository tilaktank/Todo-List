import React, {useState} from 'react';
import EditTasks from '../modals/EditTask';

const Card = ({taskObj, index, deleteTask, updateListArray, taskDone}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            // primaryColor : "#5D93E1",
            primaryColor : "#64FFDA",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    const handleDone = () => {
        taskDone(index)
    }
    let styleNotDoneTick = {
        "color" : "#fff", "cursor" : "pointer", "position" : "absolute", "right" : "15px", "top" : "27px"
    }
    let styleDoneTick = {
        "color" : "#00D100", "cursor" : "pointer", "position" : "absolute", "right" : "15px", "top" : "27px"
    }

    return (
        <div className = "card-wrapper m-4">
            <div className = "task-holder ">
                <div className='mt-2'>
                    <div className="card-header" style={{backgroundColor: colors[index%5].secondaryColor, borderRadius: "10px", maxWidth: "fit-content"}}>
                        <b style={taskObj.IsDone ? {textDecoration : "line-through", fontWeight : "bold", color : "#525252"} : {color : "#3B3B3B"}}>{taskObj.Name}</b>
                    </div>
                    <div>
                        <i className="far fa-2xl fa-circle-check m-1" style={taskObj.IsDone ? styleDoneTick : styleNotDoneTick} onClick = {handleDone}></i>
                    </div>
                </div>
                <div className="mt-3">
                    <p style={taskObj.IsDone ? {textDecoration : "line-through", fontWeight : "bold", color : "#C5C5C5"} : {}}>{taskObj.Description}</p>
                </div>
                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className="far fa-edit m-1" style={{"color" : "#F9D288", "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i className="fas fa-trash-alt m-1" style = {{"color" : "#F48687", "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
            </div>
            <EditTasks modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;
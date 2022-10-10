import React, {useState} from 'react';
import EditTasks from '../modals/EditTask';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
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

    return (
        <div className = "card-wrapper m-4">
            {/* <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div> */}
            <div className = "task-holder ">
                <div className='mt-2'>
                    <span className="card-header" style={{backgroundColor: colors[index%5].secondaryColor, borderRadius: "10px"}}>
                        <b>{taskObj.Name}</b>
                    </span>
                    <i class="fa-solid fa-2xl fa-check m-1" style={{"color" : "#64ffda", "cursor" : "pointer", "position" : "absolute", "right" : "20px", "top" : "25px"}}></i>
                </div>
                <div className="mt-3">
                    <p>{taskObj.Description}</p>
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
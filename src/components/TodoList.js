import React, {useEffect, useState} from 'react';
import CreateTasks from '../modals/CreateTasks';
import Card from './Cards';

const TodoList = () => {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    const toggle = () => {
        setModal(!modal);
    }

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const taskToggle = (index) => {
        let tempList = taskList
        let taskObj = {}
        taskObj["Name"] = tempList[index].Name
        taskObj["Description"] = tempList[index].Description
        taskObj["IsDone"] = !tempList[index].IsDone
        updateListArray(taskObj, index)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }

    return (
        <>
            <div className='col'>
                <div className='head text-center'>
                    <h1 className='mb-3'><b>Todo List</b></h1>
                    <button className='btn btn-primary' onClick={() => setModal(true)}>Create Task</button>
                </div>
                <div className='task-container col-md-12 flex-wrap d-flex mx-auto'>
                    <div className='card-division justify-items-center row mx-auto'>
                        {taskList && taskList.map((obj, index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray} taskDone = {taskToggle} key={index} />)}
                    </div>
                </div>
            </div>
            <CreateTasks modal = {modal} toggle={toggle} save = {saveTask} />
        </>
    );
};

export default TodoList;
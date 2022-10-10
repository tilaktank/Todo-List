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

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    return (
        <>
            <div className='col'>
                <div className='head text-center'>
                    <h1>Todo List</h1>
                    <button className='btn btn-primary' onClick={() => setModal(true)}>Create Task</button>
                </div>
                <div className='list'>
                    {taskList && taskList.map((obj, index) => <Card taskObj = {obj} index = {index} />)}
                </div>
            </div>
            <CreateTasks modal = {modal} toggle={toggle} save = {saveTask} />
        </>
    );
};

export default TodoList;
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const EditTasks = ({modal, toggle, taskObj, updateTask}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        if(name === "task-name"){
            setTaskName(value)
        }
        else(
            setDescription(value)
        )
    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj["Name"] = taskName
        tempObj["Description"] = description
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}><b>Update Task</b></ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group p-2'>
                        <label>Title</label>
                        <input className='form-control' type="text" name="task-name" value={taskName} onChange={handleChange} />
                    </div>
                    <div className='form-group p-2'>
                        <label>Description</label>
                        <textarea className='form-control' name="task-details" rows="5" value={description} onChange={handleChange} ></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>
                    Save
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTasks;
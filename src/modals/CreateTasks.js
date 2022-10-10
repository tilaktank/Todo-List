import React from 'react';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateTasks = ({modal, toggle, save}) => {
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

    const createTask = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>New Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group p-2'>
                        <label>Task Title</label>
                        <input className='form-control' type="text" name="task-name" value={taskName} onChange={handleChange} />
                    </div>
                    <div className='form-group p-2'>
                        <label>Description</label>
                        <textarea className='form-control' name="task-details" rows="5" value={description} onChange={handleChange} ></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={createTask}>
                    Create
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTasks;
import React from 'react';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateTasks = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [isDone, setIsDone] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === "task-name"){
            setTaskName(value)
        }
        else(
            setDescription(value)
        )
    }

    const createTask = () => {
        let taskObj = {}
        setIsDone(false)
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["IsDone"] = isDone
        save(taskObj)
        window.location.reload()
        document.querySelector("#title").value=""
        document.querySelector("#des").value=""
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}><b>New Task</b></ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group p-2'>
                        <label>Title</label>
                        <input className='form-control' type="text" id="title" name="task-name" value={taskName} onChange={handleChange} />
                    </div>
                    <div className='form-group p-2'>
                        <label>Description</label>
                        <textarea className='form-control' id="des" name="task-details" rows="5" value={description} onChange={handleChange} ></textarea>
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
import React, {useState} from 'react';

import{Task} from '../models/task';

export default function TaskInput() {

    const [taskName, setTaskName] = useState('');
    
    function onButtonPressed() {
      event.preventDefault();
      
      //create a new Task
      const task = new Task(
        (new Date()).getTime(),
        taskName,
        false,
      );

      props.onTaskCreated(task);

      setTaskName('');
    }

    return (
      <div className='mt-4'>
        <form onSubmit={onButtonPressed}>
          <div className="input-group mb-3">
            <input
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter task name"
            />
          <button
            className="btn btn-outline-secondary"
            type="submit">
            +
          </button>
          </div>
        </form>
      </div>
    )
}
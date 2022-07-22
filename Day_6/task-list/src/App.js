import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import TaskInput from './components/TaskInput'
import TaskTable from './components/TaskTable'

export default function App() {

  const [tasks, setTasks] = useState([]);

  function onFormSubmitted(task) {
    // console.log('onTaskCreated', task);
    const newTask = [];
    for (let t of tasks) { newTasks.push(t); }
    newTasks.push(task);

    setTasks(newTasks);
  }

  return (
    <div className='container mt-4'>
      <div className='card card-body text-center'>
        <h1>Task List</h1>
        <hr></hr>
        <div>Our Simple Task List</div>

        <TaskInput onTaskCreated={onTaskCreated}></TaskInput>
        
        <TaskTable></TaskTable>
      </div>
    </div>
  )
}

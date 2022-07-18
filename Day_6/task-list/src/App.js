import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className='container mt-4'>
      <div className='card card-body text-center'>
        <h1>Task List</h1>
        <div>Our Simple Task List</div>

        <TaskInput></TaskInput>
        
        <TaskTable></TaskTable>
      </div>
    </div>
  )
}

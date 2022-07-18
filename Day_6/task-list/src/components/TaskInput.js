import React from 'react';

export default function App() {
    return (
      <div>

        <div className="input-group mb-3">
            <input
            type="text"
            className="form-control"
            placeholder="Enter task name"
            />
        <button
            className="btn btn-outline-secondary"
            type="button">
            +
        </button>
        </div>
      </div>
    )
}
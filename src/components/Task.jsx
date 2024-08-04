import React, { useState } from 'react';

const Task = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.taskName);
  const [description, setDescription] = useState(task.description);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSave = () => {
    const updatedTask = { ...task, taskName, description, lastUpdated: new Date().toISOString() };
    onUpdate(updatedTask);
    setIsEditing(false);
  };

  const handleToggleComplete = () => {
    const updatedTask = { ...task, isCompleted: !task.isCompleted, lastUpdated: new Date().toISOString() };
    onUpdate(updatedTask);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <li className="my-4">
      <div className="w-100 flex gap-3 items-center">
      <div>
                <input type="checkbox" checked={task.isCompleted} onChange={handleToggleComplete} />
                <label>Mark as Done</label>
              </div>
        <div id="accordion-collapse" data-accordion="collapse" className="w-2/3">
          <h2 id={`accordion-collapse-heading-${task.id}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target={`#accordion-collapse-body-${task.id}`}
              aria-expanded={isExpanded}
              aria-controls={`accordion-collapse-body-${task.id}`}
              onClick={handleToggleExpand}
            >
              <span>{task.taskName}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${isExpanded ? 'rotate-180' : ''} shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5L5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${task.id}`}
            className={`${isExpanded||isEditing ? '' : 'hidden'}`}
            aria-labelledby={`accordion-collapse-heading-${task.id}`}
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 ">
              {/* <p className="mb-2 text-gray-500 dark:text-gray-400">{task.description}</p> */}
              {/* <small className="text-gray-500 dark:text-gray-400">
                Last updated: {new Date(task.lastUpdated).toLocaleString()}
              </small> */}
              {isEditing ? (
                <div>
                  <p>Task Name</p>
                  <input
                  className='my-5'
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                  />
                  <p>Description</p>
                  <textarea
                    className='my-5'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <button onClick={handleSave}  className="bg-violet-800 hover:bg-violet-950 px-4 text-sm font-bold text-white rounded-md mx-1 h-8">Save</button>
                </div>
              ) : (
                <div className="flex gap-5">
                  {/* <span>{description}</span> */}
                  <p className="mb-2 text-gray-500 dark:text-gray-400">{task.description}</p>
                  <small className="text-gray-500 dark:text-gray-400">
                Last updated: {new Date(task.lastUpdated).toLocaleString()}
              </small>
                </div>
              )}
              {/* <div>
                <input type="checkbox" checked={task.isCompleted} onChange={handleToggleComplete} />
                <label>Mark as Done</label>
              </div> */}
            </div>
          </div>
        </div>
        <button
          className="bg-violet-800 hover:bg-violet-950 px-4 text-sm font-bold text-white rounded-md mx-1 h-8"
          onClick={() => setIsEditing(!isEditing)}
        >
          Edit
        </button>
        <button
          className="bg-violet-800 hover:bg-violet-950 px-4 text-sm font-bold text-white rounded-md mx-1 h-8"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;

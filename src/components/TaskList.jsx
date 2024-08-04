import React, { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, onAdd, onUpdate,onDelete }) => {
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    const newTask = {
      id: Date.now().toString(),
      taskName: newTaskName,
      description: newTaskDescription,
      lastUpdated: new Date().toISOString(),
      isCompleted: false
    };
    onAdd(newTask);
    setNewTaskName('');
    setNewTaskDescription('');
  };

  return (
    <div>
      <h2 className='text-2xl font-bold'>Tasks</h2>
      <div>
        <input
            className='w-full rounded-full px-5 py-1'
          type="text"
          placeholder="Task name"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <textarea
            className='w-full rounded-md px-5 py-10 my-5'
          placeholder="Task description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        ></textarea>
        <button onClick={handleAddTask} className='bg-violet-800 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white'>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

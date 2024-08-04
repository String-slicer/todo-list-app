import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import Search from './components/Search';
import './App.css';
import data from './Data.json';
import Navbar from './components/Navbar';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTasks(data.tasks);
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTasks = tasks.filter(task =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <Navbar />
      <div className='mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[50%]'>

      <h1 className='font-bold text-center text-3xl'>Todo List</h1>
      <Search onSearch={handleSearch} />
      <TaskList tasks={filteredTasks} onAdd={addTask} onUpdate={updateTask} onDelete={handleDeleteTask}/>
      </div>
    </div>
  );
};

export default App;

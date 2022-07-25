import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import ToDo from './components/ToDo';
import Updateform from './components/Updateform';
import AddTaskForm from './components/AddTaskForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const App = () => {

  // Tasks { to do list } State
  const [toDo, setToDo] = useState([]);

  // New Task
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add Task
  // ////////////////////
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1; 
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  // Delete Task
  // ////////////////////
  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks)
    

  }

  // Mark Task As Done
  // ///////////////////

  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if( task.id === id ) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }




  // Cancel Update
    // ////////////////////
  const cancelUpdate = () => {
    setUpdateData('');

  }

  // Change Task For Update
  // ////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);

  }


  // Update Task
  // ////////////////////
  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }

  return (
    <div className='container App'>
      <br></br>
      <h2 className='head'>ginger LX TO-DO-APP</h2>
      <br></br>

     
      {updateData && updateData ? (
        <Updateform 
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
         />
      

      ) : (
        <AddTaskForm 
        newTask={newTask}
        addTask={addTask}
        setNewTask={setNewTask}
        />

      )}
     

      {/* Display Todo */}
     
      
      {toDo && toDo.length ? '' : 'No TASKS...'}

       <ToDo 
       toDo={toDo}
       markDone={markDone}
       setUpdateData={setUpdateData}
       deleteTask={deleteTask}
       />
     

      </div>
  );
};

export default App;







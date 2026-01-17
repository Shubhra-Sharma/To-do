import React, {useState} from "react";
function Todo(){
    const [tasks, setTasks] = useState([]);
    const [newTask,setnewTask] = useState("");

    function addTask(){
        // To prevent adding empty task
        if(newTask.trim()!== ""){       
        setTasks(t => [...t,newTask]);
        setnewTask("");
        }
    }

    function removeTask(index){
      setTasks(t => (t.filter( (_,idx) => idx!==index)));
    }

    function handlenewTask(event){
      setnewTask(event.target.value);
    }

    function moveTaskUp(index){
       if(index>0){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
       }
    }

    function moveTaskDown(index){
      if(index<tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);
       }
    }
  return(
    <div className = "to-do-list">
    <h1>To-Do-List</h1>
    <ul>
        {tasks.map( (task,index) => <li key = {index}>
            <span className = "text">{task}</span>
            <button className = "dlt" onClick = {() => removeTask(index)}>Task Completed</button>
            <button className = "up" onClick = {() => moveTaskUp(index)}>Move Up</button>
             <button className = "down" onClick = {() => moveTaskDown(index)}>Move Down</button>
            </li>)}
    </ul>
    <div>
        <input type = "text" placeholder = "Enter new task." value = {newTask} onChange = {handlenewTask}/>
        <button className = "Add-btn" onClick = {addTask}>Add Task</button>
    </div>
    </div>
  )
}
export default Todo;
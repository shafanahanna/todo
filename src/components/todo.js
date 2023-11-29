import React ,{ useState} from 'react';
import './todo.css'
import Addtask from './addtask';
import Listtask from './listtask';
import { useEffect } from 'react';

function Todo() {
    const [tasks,setTasks]=useState([]);

    useEffect(()=>{
      document.title = `you have ${tasks.length} pending task(s)`
    },)

    
    const addtask = (title)=>{
        const newTask=[...tasks,{title}]
        setTasks(newTask);
    }
    const removetask=(index)=>{
        const newtask =[...tasks]
        newtask.splice(index,1)
        setTasks(newtask)
    }
  return (
    <>
      <div className='todo-container'>
        <div className='header'>TODO APP</div>
        <div className='add-task'><Addtask addtask={addtask} />
        </div>
        <div className='tasks'>
            {tasks.map((task,index)=>(
                <Listtask key={index} task={task}  removetask={removetask} index={index}/>
            ))}
            </div>
      </div>
    </>
  )
}

export default Todo
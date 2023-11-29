import React ,{useState}from 'react'

function Addtask({addtask}) {
    const [value,setValue]=useState("")
    const additem=()=>{
        addtask(value)
        setValue("")
    }
  return (
    <>
        <div className='input-container'>
            <input
             type='text'
             className='input'
             placeholder='Add a new Task'
             value={value}
             onChange={(evt)=>{setValue(evt.target.value);}}
              /><span>
              <button onClick={additem} className='add-btn'>Add Task</button></span>
            
        </div>
    </>
  )
}

export default Addtask
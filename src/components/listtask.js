import { Button } from 'bootstrap'
import React from 'react'

function Listtask({task,index, removetask}) {
  return (
    <>
        <div className='list-task'>
            {task.title}
            <button onClick={()=>{removetask(index)}} className='delete-btn'>Delete</button>
        </div>
    </>
  )
}

export default Listtask
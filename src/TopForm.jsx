import React, { Fragment, useContext, useState } from 'react';
import { TaskContext } from './TaskContext';

const TopForm = ()=>{

    const [task , setTask] = useState("")

    const {taskItems , setTaskItems} = useContext(TaskContext)

    const handleSetTask =(event)=>{
        setTask(event.target.value)
    }
    const handleAddTask =(event)=>{
        event.preventDefault()
        setTaskItems([...taskItems , {id: Math.random() , title :task , done:false}])
    }
    return(
        <>
            <h4 className="text-center text-info text_shdow">به کدیاد خوش اومدید</h4>
            <form onSubmit={handleAddTask}>
                <div className="form-group d-flex">
                    {/* {task} */}
                    <input type="text" className="form-control"  value={task} onChange={handleSetTask}/>
                    {/* با هر بار تغییر اینپوت، ولیو مربوط به همین اینپوت که از این متود استفاده می کنه رو بریز توی استیت */}
                    <button type="submit" className="btn btn-success me-1">ثبت</button>
                </div>
            </form>
        </>
    )
}

export default TopForm;
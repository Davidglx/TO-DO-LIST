import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Updateform from './Updateform';

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return (
   <>   
        {toDo && toDo
       .map((task, index) => {
         return (
          <React.Fragment key={task.id}>
            <div className="col taskBg">
               <div className={task.status ? 'done' : ''}>
                <span className='taskNumber'>{index + 1}</span>
                <span className='taskText'>{task.title}</span>
               </div>
               <div className='iconswrap'>
                 <span title='Completed / Not Completed' 
                 onClick={(e) => markDone(task.id)}
                 >
                   <FontAwesomeIcon icon={faCircleCheck} /></span>

                 {task.status ? null : (
                    <span title='Edit'
                    onClick={() => setUpdateData({ id: task.id, 
                      title: task.title,
                      status: task.status ? true : false
                    })}>
                    <FontAwesomeIcon icon={faPen} />
                    </span>
                 )}
                 <span title='Delete' 
                 onClick={() => deleteTask(task.id)}>
                 <FontAwesomeIcon icon={faTrashCan} />
                 </span>
               </div>
            </div>
           </React.Fragment>
         )
       })}
   
   </>
  )
}

export default ToDo


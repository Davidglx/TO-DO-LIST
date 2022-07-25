import React from 'react'

const Updateform = ({changeTask, updateData, updateTask, cancelUpdate }) => {
  return (
    <>
    {/* {Update App} */}
    <div className="row">
            <div className="col">
        <input 
            value={ updateData && updateData.title }
            onChange={ (e) => changeTask(e)}
            className="form-control form-control-lg"
            />
            </div>
            <div className="col-auto">
            <button
                onClick={updateTask}
                className="btn btn-lg btn-success mr-20"
            >Update</button>
            <button
                onClick={cancelUpdate}
                className="btn btn-lg btn-warning"
            >Cancel</button>
        </div>
    </div>
        <br />
        </>
  )
}

export default Updateform 
  
// </>
// )
// }
// <div className='row'>
//      <div className='col'>
//        <input className='form-control form-control-lg'
//        value={ updateData && updateData.title }
//        onChange={ (e) => changeTask(e)}
//        />
//        </div>
//        <div className='col-auto'>
//          <button
//          onClick={updateTask}
//          className='btn btn-lg btn-success mr-20'>
//            Update
//          </button>
//          <button
//          className='btn btn-lg btn-danger mx-2 my-2 mr-20'
//          onClick={cancelUpdate}
//          >Cancel</button>
//         </div>
//       </div>
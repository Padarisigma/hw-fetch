import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {  useState } from 'react'
import {  Modal } from 'antd';


const Edit = ({api, get, name, id}) => {

    const [openEditModal,setEditModal]= useState(false)
     const [taskEditName,setEditTaskName]= useState('')
     const [idx,setIdx]= useState('')

     // put async
     const put = async () => {
        try {
          setEditModal(false);
           await fetch(`${api}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: taskEditName,
              id: idx,
            }),
          });
      
          get()
        } catch (error) {
          console.error(error);
        }
      };
      
      // edit user
      const editUser=(name, id)=>{
        setEditModal(true)
        setEditTaskName(name)
        setIdx(id)
        
      }
      
  return (
    <>
    <div className='editmodal'> 
      <Modal open= {openEditModal} onCancel={()=>setEditModal(false)} onOk={put}>
      <TextField id="standard-basic" label="Edit user" variant="standard" value={taskEditName} onChange={(e)=>setEditTaskName(e.target.value)}/>
      </Modal>
    </div>
    <Button color="secondary" onClick={()=>editUser(name,id)}>Edit</Button> 
    </>
  )
}

export default Edit
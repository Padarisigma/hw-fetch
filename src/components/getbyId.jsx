import React from 'react'
import { useState } from 'react'
import {  Modal } from 'antd';
import Button from '@mui/material/Button';


const Show = ({name,id}) => {
    const [openShowModal,setShowModal]= useState(false)
    const [taskShowName,setShowTaskName]= useState('')
    const [idx,setIdx]= useState('')

    const show=(name, id)=>{
        setShowModal(true)
        setShowTaskName(name)
        setIdx(id)
       }

  return (
    <>
    <div className='showmodal'> 
      <Modal open= {openShowModal} onCancel={()=>setShowModal(false)} onOk={()=>setShowModal(false)}>
        <p>Name : {taskShowName}</p>
        <p>Id : {idx}</p>
      </Modal>
    </div>
    <Button variant="outlined" onClick={()=>show(name,id)}>Show</Button>
    </>
  )
}

export default Show
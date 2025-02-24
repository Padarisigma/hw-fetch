import React from 'react'
import Button from '@mui/material/Button';
const Delete = ({api, get, id}) => {
    const userDelete = async (id) => {
        try {
           await fetch(`${api}?id=${id}`, {
            method: "DELETE",})
          get(); 
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <> 
    <Button variant="outlined" color="error" onClick={()=>userDelete(id)}> Delete</Button>
    </>
  )
}

export default Delete
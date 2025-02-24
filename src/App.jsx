import { useEffect, useState } from 'react'
import './App.css'
import Add from './components/add';
import Delete from './components/delete';
import Edit from './components/edit';
import Show from './components/getbyId';

const Api='https://to-dos-api.softclub.tj/api/categories'

function App() {
  const [data,setData]= useState([])

// get 
  const get = async () => {
    try {
      const response = await fetch(Api); 
      const result = await response.json();
      setData( result.data)
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
// use effect
  useEffect(()=>{
    get()
  }, [])

  return (
    <>
    <div className="osnBox">
    <Add api={Api} get={get} />
    <div className='box'>
    {
      data.map((e)=>{
       return <div key={e.id} className='boxx'>
       <i><p className='osntxt'> {e.name}</p></i> 
       <div className='btns'>
        <Delete api={Api} get={get} id={e.id} />
        <Edit api={Api} get={get} name={e.name} id={e.id}/>
        <Show name={e.name} id={e.id}  />
       </div>
        
       </div>
       
      })
    }
    
    </div>
    </div>
    </>
  )
}

export default App

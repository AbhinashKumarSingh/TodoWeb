import  Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router'
import {useLocation} from 'react-router-dom';
 const UpdateEmployee=(props)=>{
     const navigate=useNavigate()
     const [avatar,setAvatar]=useState("");
     const [performance,setPerformance]=useState("");
     const location=useLocation();
    //console.log(location.state)
    useEffect(()=>{
        const get=async()=>{
           const result= await Axios.get(`http://localhost:5000/edit-user/${location.state}`);
           console.log(result.data);
           setAvatar(result.data.avatar)
           setPerformance(result.data.performance)

        }
        get()
    },[location.state])
    const SubmitHandler=async(e)=>{
        e.preventDefault()
       const result= await Axios.put(`http://localhost:5000/update-user/${location.state}`,{avatar:avatar,performance:performance});
       navigate('/')
        console.log(result)
    }
    return (
        <>
        <div className='data'><h1>Edit Employee Details</h1></div>
        <div className='employees-details'>
        
        <form onSubmit={(e)=>SubmitHandler(e)}>
            <input type='text' value={avatar} onChange={(e)=>setAvatar(e.target.value) } ></input>
            <input type='number' value={performance} onChange={(e)=>setPerformance(e.target.value) } ></input>
            <div>
            <button  type='submit'  className="edit">Click to edit</button>
            </div>
        </form>
        </div>
        </>
    )
}
export default UpdateEmployee
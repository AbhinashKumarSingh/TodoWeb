import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
//import ListEmployee from './ListEmployee';
//import UpdateEmployee from './UpdateEmployee';
export default function HomeScreen(){
    const [todo,setTodo]=useState([])
    //const [id,setId]=useState('')
    const navigate=useNavigate()
    const Get=async()=>{
        const data=await  Axios.get("http://localhost:5000/get")
        //console.log(data.data);
        setTodo(data.data);
      }
    useEffect(()=>{
        
        Get();
        
    },[])
    const deleteHandler = async(e,id) => {
        //e.preventDefault()
    await Axios.delete(`http://localhost:5000/delete-user/${id}`);
    setTodo((data) => {
        return data.filter((todo) => todo._id !== id);
      });
        //console.log(result)
    //Get()
      };
      const editHandler=async(e,id)=>{
          console.log(id);
          navigate('/update',{state:id})
          
      }
      const detailsHandler=async(e,x)=>{
        //console.log(id);
        navigate('/details',{state:x})
        
    }

    
    return (
        <div >
        <div className='data'>
            

            
            <h1>List of User</h1>
                   <Link to='/add-list'>
                    <button type='submit'  className="btn btn-primary">Click to add User</button> </Link>
                    
            
            
            </div>
            <div className='employees-details'>
                <table className="table">
                
                <thead className="table-head">
                <tr>
                    <th>Avatar</th>
                    <th>Performance</th>
                    <th>Actions</th>
                    </tr>
                    </thead>
                        <tbody>
                            {todo.map((x,i)=>(
                                
                                <tr key={i }>
                                <td>
                                    {x.avatar}
                                </td>
                                <td>{x.performance}</td>
                                <td ><button type="button" className="btn btn-secondary" onClick={(e)=>detailsHandler(e,x)}>Details</button>
                                
                            <button type="button" className="btn btn-warning" onClick={(e)=>editHandler(e,x._id)} >Edit</button>
                            <button className="btn btn-danger" onClick={(e)=>deleteHandler(e,x._id)}>Delete</button>
                            </td>
                                </tr>
                            ))}
                            </tbody>  
                </table>
            </div>
        </div>
    )
}
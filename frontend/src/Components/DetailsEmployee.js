//import  Axios  from 'axios';
import React from 'react';
//import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
export default function DetailsEmployee(){
//console.log(props)
    const location=useLocation()
    console.log(location.state)
    return (
        <>
        <div className="back">
        <Link to='/' >Back </Link></div>
        <div className="employees-details">
            <table className="table">
                <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Performance</th>
                    </tr>
               </thead>
                <tbody>
                    <tr>
                        <td>{location.state.avatar}</td>
                        <td>{location.state.performance}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
}
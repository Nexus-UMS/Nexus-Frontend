import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function TeacherProfile() {
    let id=sessionStorage.getItem("uid")
    const [teachers, setTeachers] = useState({})
    useEffect(() => {
      axios
      .get("http://localhost:5099/api/Teacher/getTeachersByTheirId/"+id)
      .then((response)=>{
        console.log(response.data);
        setTeachers(response.data);
      })
      .catch((error)=>{
        console.log(error);
      });
    }, []);
    
    
  return (

    <div className='main-content position-relative max-height-vh-100 h-100 border-radius-lg'>
        <h2>Profile</h2>
        <table className='table table-striped'>

            <tbody>
                <tr>
                    <td>TeacherId : </td>
                    <td>{teachers.teacherid}</td>
                </tr>
                <tr>
                    <td>Name : </td>
                    <td>{teachers.teacherFirstName+" "+teachers.teacherLastName}</td>
                </tr>
                <tr>
                    <td>Email : </td>
                    <td>{teachers.teacherEmail}</td>
                </tr>
                <tr>
                    <td>Gender : </td>
                    <td>{teachers.teacherGender}</td>
                </tr>
                <tr>
                    <td>Date Of Birth : </td>
                    <td>{teachers.dateOfBirth}</td>
                </tr>
                

                
            </tbody>
        </table>
    </div>
  )
}

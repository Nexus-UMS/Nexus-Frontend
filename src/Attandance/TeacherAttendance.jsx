import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function TeacherAttendance() {
    const [teachers, setTeachers] = useState([])
    const [attendanceStatus, setAttendanceStatus] = useState({}); // Individual status for each teacher

    useEffect(() => {
     axios
     .get("http://localhost:5099/api/Teacher/getAllExistingTeachers")
     .then((response)=>{
        console.log(response.data);
        setTeachers(response.data)
     })
    }, [])

    function toggleStatus(teacherid) {
        setAttendanceStatus((prevStatus) => ({
          ...prevStatus,
          [teacherid]: !prevStatus[teacherid], // Toggle status for the clicked teacher
        }));
      }

      function AddAttendance(){
        const attendanceRecord=teachers.map((teacher)=>(
            {
                attendanceId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                teacherId: teacher.teacherid,
                date: new Date().toISOString(),
                status: attendanceStatus[teacher.teacherid]
            }
        ))
            console.log(attendanceRecord);
        Promise.all(attendanceRecord.map((record) =>
        axios.post("http://localhost:5099/api/T_Attendance/AddTeacherAttadndace", record)
      ))
      .then((responses) => {
        console.log("Attendance submitted successfully");
        alert("Attendance submitted successfully")
      })
      .catch((error) => {
        console.error("Error submitting attendance:", error);
      });
      }
    
  return (
    <div className='main-content position-relative max-height-vh-100 h-100 border-radius-lg'>
        <table>
            <thead>
                <tr>
                    <th>Teacher Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    teachers.map((item)=>{
                        return(
                            <tr>
                                <td>{item.teacherId}</td>
                                <td>{item.teacherFirstName}</td>
                                <td>{attendanceStatus[item.teacherId] ? "Present" : "Absent"}</td> {/* Use individual status */}
                                <td>
                                    <button onClick={() => toggleStatus(item.teacherId)}>Mark Attendance</button>
                                </td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td colSpan={2}>
                        <button onClick={AddAttendance}>Submit Attendance</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

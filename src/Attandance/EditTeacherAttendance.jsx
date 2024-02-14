// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
 
// export default function EditTeacherAttendance() {
//     const [attendances, setAttendances] = useState([]);
//     const [attendanceStatus, setAttendanceStatus] = useState({});
 
//     useEffect(() => {
//         axios
// .get("http://localhost:5099/api/T_Attendance/GetAllTeacherAttendance")
//             .then((response) => {
//                 console.log(response.data);
//                 setAttendances(response.data);
//                 // Initialize attendance status for each teacher
//                 const initialStatus = {};
//                 response.data.forEach((teacher) => {
//                     initialStatus[teacher.teacherId] = teacher.status === "Present";
//                 });
//                 setAttendanceStatus(initialStatus);
//             })
//     }, []);
 
//     function toggleStatus(teacherId) {
//         setAttendanceStatus((prevStatus) => ({
//             ...prevStatus,
//             [teacherId]: !prevStatus[teacherId], // Toggle status for the clicked teacher
            
//         }));
      
//     }
 
//     function UpdateAttendance() {
//         const attendanceRecord = attendances.map((teacher) => ({
//             attendanceId: teacher.attendanceId,
//             teacherId: teacher.teacherId,
//             date: new Date().toISOString(),
//             status: attendanceStatus[teacher.teacherId] ? "Present" : "Absent" // Update status based on attendanceStatus
//         }));
 
//         console.log(attendanceRecord);
//         Promise.all(attendanceRecord.map((record) =>
// axios.put("http://localhost:5099/api/T_Attendance/UpdateTeacherAttendance", record)
//         ))
//             .then((responses) => {
//                 console.log("Attendance submitted successfully");
//                 alert("Attendance submitted successfully");
//             })
//             .catch((error) => {
//                 console.error("Error submitting attendance:", error);
//             });
//     }
 
//     return (
//         <div className='main-content position-relative max-height-vh-100 h-100 border-radius-lg'>
//             <table className='table table-striped'>
//                 {attendances.map((item) => {
//                     return (
//                         <tr key={item.teacherId}>
//                             <td>{item.teacherId}</td>
//                             <td>{item.date}</td>
//                             <td>{attendanceStatus[item.teacherId] ? "Present" : "Absent"}</td>
//                             <td>
//                                 <button onClick={() => toggleStatus(item.teacherId)}>Change Attendance</button>
//                             </td>
//                         </tr>
//                     );
//                 })}
//             </table>
//             <button onClick={UpdateAttendance}>Update Attendance</button>
//         </div>
//     );
// }
























// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
 
// export default function EditTeacherAttendance() {
//   const [attendances, setAttendances] = useState([]);
//   const [uptattendances, setUPtAttendances] = useState([]);

 
//   useEffect(() => {
//     axios
//      .get("http://localhost:5099/api/T_Attendance/GetAllTeacherAttendance")
//       .then((response) => {
//         setAttendances(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching teacher attendance data:", error);
//       });
//   }, []);
 
//   function toggleStatus(index) {
//     const updatedAttendances = [...attendances];
//     updatedAttendances[index].status = !updatedAttendances[index].status; // Toggle status
//     setAttendances(updatedAttendances);
//   }

//   let tAttndceUPdate ={
//     attendanceId:attendances.attendanceId,
//     teacherId:attendances.teacherId,
//     date:attendances.date,
//     status:attendances.status,
//     teacher:"null"
//   }
 
//   function updateAttendance() {
// axios.put("http://localhost:5099/api/T_Attendance/UpdateTeacherAttendance", tAttndceUPdate)
//       .then((response) => {
//         setUPtAttendances(response.data);
//         console.log("Attendance updated successfully");
//         alert("Attendance updated successfully");
//       })
//       .catch((error) => {
//         console.error("Error updating teacher attendance:", error);
//       });
//   }
 
//   return (
//     <div className='main-content position-relative max-height-vh-100 h-100 border-radius-lg'>
//       <table className='table table-striped'>
//         <thead>
//           <tr>
//             <th>Teacher ID</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Change Attendance</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendances.map((attendance, index) => (
//             <tr key={attendance.teacherId}>
//               <td>{attendance.teacherId}</td>
// <td>{attendance.date}</td>
//               <td>{attendance.status ? "Present" : "Absent"}</td>
//               <td>
//                 <button onClick={() => toggleStatus(index)}>Change Attendance</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={updateAttendance}>Update Attendance</button>
//     </div>
//   );
// }


















// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// export default function EditTeacherAttendance() {
//     const [attendances, setAttendances] = useState([])
//     const [attendanceStatus, setAttendanceStatus] = useState({}); // Individual status for each teacher

//     useEffect(() => {
//       axios
//       .get("http://localhost:5099/api/T_Attendance/GetAllTeacherAttendance")
//       .then((response)=>{
//         console.log(response.data);
//         setAttendances(response.data)
//       })
//     }, [])
//     function toggleStatus(teacherid) {
//         setAttendanceStatus((prevStatus) => ({
//           ...prevStatus,
//           [teacherid]: !prevStatus[teacherid], // Toggle status for the clicked teacher
//         }));
//       }
//       function UpdateAttendance(){
//         const attendanceRecord=attendances.map((teacher)=>(
//             {
//                 attendanceId: teacher.attendanceId,
//                 teacherId: teacher.teacherid,
//                 date: new Date().toISOString(),
//                 status: attendanceStatus[teacher.teacherid]
//             }
//         ))
//             console.log(attendanceRecord);
//         Promise.all(attendanceRecord.map((record) =>
//         axios.put("http://localhost:5099/api/T_Attendance/UpdateTeacherAttendance", record)
//       ))
//       .then((responses) => {
//         console.log("Attendance submitted successfully");
//         alert("Attendance submitted successfully")
//       })
//       .catch((error) => {
//         console.error("Error submitting attendance:", error);
//       });
//       }
//   return (
//     <div className='main-content position-relative max-height-vh-100 h-100 border-radius-lg'>
//         <table className='table table-striped'>
//             {
//                 attendances.map((item)=>{
//                     return(
//                         <tr>
//                             <td>{item.teacherId}</td>
//                             <td>{item.date}</td>
//                             <td>{item.status?"Present":"Absent"}</td>
//                             <td>
//                             <button onClick={() => UpdateAttendance(item.teacherid)}>Change Attendance</button>

//                             </td>
//                         </tr>
//                     )
//                 })
//             }
//             <button>Update Attendance</button>
//         </table>
//     </div>
//   )
// }

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// export default function EditTeacherAttendance() {
//     const [teachers, setTeachers] = useState([])
//     const [changeAttendance, setChangeAttendance] = useState([])
//     useEffect(() => {
//       axios
//       .get("http://localhost:5099/api/T_Attendance/GetAllTeacherAttendance")
//       .then((res)=>{
//         console.log(res.data);
//         setTeachers(res.data)
//       })
//     }, [])
//     const setAtt = (attendanceId, att) => {
//         setChangeAttendance((prevs) => [
//           ...prevs,
//           {
//             attendanceId: teachers.attendanceId,
//             class: "1",
//             attDate: new Date().toLocaleDateString(),
//             status: att,
//           },
//         ]);
//     }
//   return (
//     <div className='main-content position-relative max-height-vh-100 h-100 border-radius-lg'>
//         <table className='table'>
//             {
//                 teachers.map((item)=>{
//                     return(
//                         <tr>
//                             <td>{item.teacherId}</td>
//                             <td>{item.date}</td>
//                             <td>{item.status?"Present":"Absent"}</td>
//                             <td>
//                                 <button onClick={(e)=>setAtt()}>Change Attendance</button>
//                             </td>
//                         </tr>
//                     )
//                 })
//             }
//         </table>
//     </div>
//   )
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function EditTeacherAttendance() {
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
        axios.put("http://localhost:5099/api/T_Attendance/AddTeacherAttadndace", record)
      ))
      .then((responses) => {
        console.log(responses.data);
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
                                <td>{item.teacherid}</td>
                                <td>{item.teacherFirstName}</td>
                                <td>{attendanceStatus[item.teacherid] ? "Present" : "Absent"}</td> {/* Use individual status */}
                                <td>
                                    <button onClick={() => toggleStatus(item.teacherid)}>Mark Attendance</button>
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
  

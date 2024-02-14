import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceComponent = () => {
  const [students, setStudents] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState({});
  const [markedAttendance, setMarkedAttendance] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [classSelection,setClassSelection]=useState([]);
  // const[stream,setStream]=useState("cse")
  const[sem,setSem]=useState("sem1")
  const[selectedStream,setSelectedstream]=useState({text:"cse",value:""})


  

  
  useEffect(() => {
    axios
    .get("http://localhost:5099/api/ClassM/GetAllClass")
    .then((response)=>{
        for(let i=0;i<response.data.length;i++){
            if(response.data[i].teacherid === tId){
              console.log(response.data);
                setClassSelection(response.data);
                break; // exit loop after finding the correct class selection
            }
        }
    })
}, []);

useEffect(() => {
  console.log(selectedStream);
  if(selectedStream!=""){
    setSelectedstream(selectedStream)
  }
    axios.get(`http://localhost:5099/api/Student/GetStudentByClass,Section/${selectedStream.text}/${sem}`)
    .then((response)=>{
        console.log(response.data);
        setStudents(response.data); // Assuming the API returns an array of student objects
    })
}, [selectedStream.text, sem]);





  const markAttendance = (studentId) => {
    // Check if attendance status already exists for the student
    setAttendanceStatus((prevStatus) => ({
      ...prevStatus,
      [studentId]: !prevStatus[studentId],
    }));
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      console.log(selectedStream);
      // Filter students who are marked present
      const presentStudents = students.filter((student) => attendanceStatus[student.id]);
      // console.log(presentStudents);

      // Create attendance records for present students
      const attendanceRecords = presentStudents.map((student) => (
        {
        attendanceId: "3fa85f64-5117-4562-b3fc-2c963f06afa6",
        classId: selectedStream.value, // Access classId from student object
        studentId: student.id, // Access studentId from student object
        date: "2023-01-10T08:53:20.826Z", // Today's date
        status: true, // Present
      }));
      console.log(attendanceRecords);
      for(let item of attendanceRecords){
        console.log(item);
      // Make a POST request to add attendance records
      await axios.post('http://localhost:5099/api/S_Attendance/AddStudentAttadndace',item)
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>console.log(err))
    }

      // Clear the attendance status after submitting
      setAttendanceStatus({});
      setMarkedAttendance([...markedAttendance, ...attendanceRecords]);
    } catch (error) {
      console.error('Error submitting attendance:', error);
    } finally {
      setSubmitting(false);
    }
  };
let tId="TCR001"
  return (
    <div  className='main-content position-relative max-height-vh-100 h-100 border-radius-lg'>
      <h2>Student Attendance</h2>
      <select onChange={(e)=>setSem(e.target.value)}>
        {
            classSelection.map((i)=>{
                return(
                    <option key={i.classId}>{i.semName}</option>
                )
            })
        }
      </select>
      <select onChange={(e)=>setSelectedstream(e.target.options[e.target.selectedIndex])}>
        {
            classSelection.map((i)=>{
                return(
                    <option value={i.classId} key={i.classId}>{i.streamName}</option>
                )
            })
        }
      </select>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Attendance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.fName}</td>
              <td>{attendanceStatus[student.id] ? 'Present' : 'Absent'}</td>
              <td>
                <button onClick={() => markAttendance(student.id)}>
                  Mark Attendance
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleSubmit} disabled={submitting}>
        Submit Attendance
      </button>

      {/* <h2>Marked Attendance</h2>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {markedAttendance.map((record, index) => (
            <tr key={index}>
              <td>{record.stud_id}</td>
              <td>{record.date}</td>
              <td>{record.status ? 'Present' : 'Absent'}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default AttendanceComponent;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AttendanceComponent = () => {
//   const [students, setStudents] = useState([]);
//   const [attendanceStatus, setAttendanceStatus] = useState({});
//   const [markedAttendance, setMarkedAttendance] = useState([]);
//   const [submitting, setSubmitting] = useState(false);
//   const [classSelection,setClassSelection]=useState([]);
//   // const[stream,setStream]=useState("cse")
//   const[sem,setSem]=useState("sem1")
//   const[selectedStream,setSelectedstream]=useState({text:"cse",value:""})


  

  
//   useEffect(() => {
//     axios
//     .get("http://localhost:5099/api/ClassM/GetAllClass")
//     .then((response)=>{
//         for(let i=0;i<response.data.length;i++){
//             if(response.data[i].teacherid === tId){
//               console.log(response.data);
//                 setClassSelection(response.data);
//                 break; // exit loop after finding the correct class selection
//             }
//         }
//     })
// }, []);

// useEffect(() => {
//   console.log(selectedStream);
//   if(selectedStream!=""){
//     setSelectedstream(selectedStream)
//   }
//     axios.get(`http://localhost:5099/api/Student/GetStudentByClass,Section/${selectedStream.text}/${sem}`)
//     .then((response)=>{
//         console.log(response.data);
//         setStudents(response.data); // Assuming the API returns an array of student objects
//     })
// }, [selectedStream.text, sem]);





//   const markAttendance = (studentId) => {
//     // Check if attendance status already exists for the student
//     console.log(studentId)
//     setAttendanceStatus((prevStatus) => ({
//       ...prevStatus,
//       [studentId]: !prevStatus[studentId],
//     }
   
//     ));
//     console.log(attendanceStatus);
//   };

//   const handleSubmit = async () => {
//     try {
//       setSubmitting(true);
//       console.log(selectedStream);
//       // Filter students who are marked present
//       const presentStudents = students.filter((student) => attendanceStatus[student.id]);
//       const absentStudents = students.filter((student) => !attendanceStatus[student.id]);

//       // console.log(presentStudents);
//       console.log(selectedStream.value);
//       // Create attendance records for present students
//       const attendanceRecords = presentStudents.map((student) => (
//         {
//         attendanceId: "3fa85f64-5117-4562-b3fc-2c963f06afa6",
//         classId: selectedStream.value, // Access classId from student object
//         studentId: student.id, // Access studentId from student object
//         date: "2023-01-10T08:53:20.826Z", // Today's date
//         status: true, // Present
//       }));
//       const absentAttendanceRecords = absentStudents.map((student) => ({
//         attendanceId: "3fa85f64-5117-4562-b3fc-2c963f06afa6",
//         classId: selectedStream.value,
//         studentId: student.id,
//         date: new Date().toISOString(),
//         status: false,
//       }));

//       const allAttendanceRecords = [...attendanceRecords, ...absentAttendanceRecords];
//       console.log(allAttendanceRecords);

//       for(let item of allAttendanceRecords){
//         console.log(item);
//       // Make a POST request to add attendance records
//       await axios.post('http://localhost:5099/api/S_Attendance/AddStudentAttadndace',allAttendanceRecords)
//       .then((res)=>{
//         console.log(res.data);
//         alert("Attendance submitted Succesfully")
//       })
//       .catch((err)=>console.log(err))
//     }

//       // Clear the attendance status after submitting
//       setAttendanceStatus({});
//       setMarkedAttendance([...markedAttendance, ...attendanceRecords]);
//     } catch (error) {
//       console.error('Error submitting attendance:', error);
//     } finally {
//       setSubmitting(false);
//     }
//   };
// let tId=sessionStorage.getItem("uid")
//   return (
//     <div  className='main-content position-relative max-height-vh-100 h-100 border-radius-lg'>
//       <h2>Student Attendance</h2>
//       <select onChange={(e)=>setSem(e.target.value)}>
//         {
//             classSelection.map((i)=>{
//                 return(
//                     <option key={i.classId}>{i.semName}</option>
//                 )
//             })
//         }
//       </select>
//       <select onChange={(e)=>setSelectedstream(e.target.options[e.target.selectedIndex])}>
//         {
//             classSelection.map((i)=>{
//                 return(
//                     <option value={i.classId} key={i.classId}>{i.streamName}</option>
//                 )
//             })
//         }
//       </select>
//       <table>
//         <thead>
//           <tr>
//             <th>Student ID</th>
//             <th>Name</th>
//             <th>Attendance</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id}>
//               <td>{student.id}</td>
//               <td>{student.fName}</td>
//               <td>{attendanceStatus[student.id] ? 'Present' : 'Absent'}</td>
//               <td>
//                 <button onClick={() => markAttendance(student.id)}>
//                   Mark Attendance
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button onClick={handleSubmit} disabled={submitting}>
//         Submit Attendance
//       </button>

//       <h2>Marked Attendance</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Student ID</th>
//             <th>Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {markedAttendance.map((record, index) => (
//             <tr key={index}>
//               <td>{record.stud_id}</td>
//               <td>{record.date}</td>
//               <td>{record.status ? 'Present' : 'Absent'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AttendanceComponent;
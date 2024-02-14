import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddAttendance = () => {
  const [students, setStudents] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState({});
  const [markedAttendance, setMarkedAttendance] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [classSelection, setClassSelection] = useState([]);
  const [sem, setSem] = useState("sem1");
  const [selectedStream, setSelectedStream] = useState({ text: "cse", value: "" });

  useEffect(() => {
    axios
      .get("http://localhost:5099/api/ClassM/GetAllClass")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].teacherid === tId) {
            console.log(response.data);
            setClassSelection(response.data);
            break;
          }
        }
      })
  }, []);

  useEffect(() => {
    if (selectedStream !== "") {
      setSelectedStream(selectedStream)
    }
    // axios.get("http://localhost:5099/api/Student/GetStudentByClass,Section/"`${selectedStream.text}/${sem}`)
    axios 
    .get("http://localhost:5099/api/Student/GetStudentByClass,Section/"+selectedStream.text+"/"+sem)
      .then((response) => {
        console.log(response.data);
        setStudents(response.data);
      })
  }, [selectedStream.text, sem]);

  const markAttendance = (studentId) => {
    setAttendanceStatus((prevStatus) => ({
      ...prevStatus,
      [studentId]: !prevStatus[studentId],
    }));
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);

      const presentStudents = students.filter((student) => attendanceStatus[student.id]);
      const absentStudents = students.filter((student) => !attendanceStatus[student.id]);

      const presentAttendanceRecords = presentStudents.map((student) => ({
        attendanceId: "3fa85f64-5117-4562-b3fc-2c963f06afa6",
        classId: selectedStream.value,
        studentId: student.id,
        date: new Date().toISOString(),
        status: true,
      }));

      const absentAttendanceRecords = absentStudents.map((student) => ({
        attendanceId: "3fa85f64-5117-4562-b3fc-2c963f06afa6",
        classId: selectedStream.value,
        studentId: student.id,
        date: new Date().toISOString(),
        status: false,
      }));

      const allAttendanceRecords = [...presentAttendanceRecords, ...absentAttendanceRecords];
      console.log(allAttendanceRecords);
      await axios.post('http://localhost:5099/api/S_Attendance/AddStudentAttadndace', allAttendanceRecords);

      setAttendanceStatus({});
      setMarkedAttendance([...markedAttendance, ...allAttendanceRecords]);
    } catch (error) {
      console.error('Error submitting attendance:', error);
    } finally {
      setSubmitting(false);
    }
  };

  let tId = "TCR001";

  return (
    <div className='main-content position-relative max-height-vh-100 h-100 border-radius-lg'>
      <h2>Student Attendance</h2>
      <select onChange={(e) => setSem(e.target.value)}>
        {
          classSelection.map((i) => (
            <option key={i.classId}>{i.semName}</option>
          ))
        }
      </select>
      <select onChange={(e) => setSelectedStream(e.target.options[e.target.selectedIndex])}>
        {
          classSelection.map((i) => (
            <option value={i.classId} key={i.classId}>{i.streamName}</option>
          ))
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

      <h2>Marked Attendance</h2>
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
      </table>
    </div>
  );
};

export default AddAttendance;
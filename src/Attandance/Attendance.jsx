

import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Attendance() {
  const [classSelection, setClassSelection] = useState([]);
  const [sem, setSem] = useState("sem1");
  const [selectedStream, setSelectedStream] = useState({ text: "cse", value: "" });
  const [students, setStudents] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState({}); // Individual status for each student

  let tId = "TCR001";

  useEffect(() => {
    axios
      .get("http://localhost:5099/api/ClassM/GetAllClass")
      .then((response) => {
        const selectedClass = response.data.find((cls) => cls.teacherid === tId);
        if (selectedClass) {
          setClassSelection(response.data);
          setSelectedStream({ text: selectedClass.streamName, value: selectedClass.classId });
        }
      })
      .catch((error) => {
        console.error("Error fetching class data:", error);
      });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:5099/api/Student/GetStudentByClass,Section/${selectedStream.text}/${sem}`)
      .then((response) => {
        const initialStatus = response.data.reduce((acc, student) => {
          acc[student.id] = false; // Initial status for each student
          return acc;
        }, {});
        setAttendanceStatus(initialStatus);
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, [selectedStream.text, sem]);

  function toggleStatus(studentId) {
    setAttendanceStatus((prevStatus) => ({
      ...prevStatus,
      [studentId]: !prevStatus[studentId], // Toggle status for the clicked student
    }));
  }

  function submitAttendance() {
    const attendanceRecord = students.map((student) => ({
      attendanceId: "3fa85f56-5717-4562-b3fc-2c963f66afa6",
      classId: classSelection[0].classId,
      studentId: student.id,
      date: new Date().toISOString(),
      status: attendanceStatus[student.id], // Use individual status
    }));

    Promise.all(attendanceRecord.map((record) =>
      axios.post("http://localhost:5099/api/S_Attendance/AddStudentAttadndace", record)
    ))
    .then((responses) => {
      console.log("Attendance submitted successfully");
    })
    .catch((error) => {
      console.error("Error submitting attendance:", error);
    });
  }

  return (
    <div className='main-content position-relative max-height-vh-100 h-100 border-radius-lg'>
      <select onChange={(e) => setSem(e.target.value)}>
        {classSelection.map((cls) => (
          <option key={cls.classId}>{cls.semName}</option>
        ))}
      </select>
      <select onChange={(e) => setSelectedStream({ text: e.target.options[e.target.selectedIndex].text, value: e.target.value })}>
        {classSelection.map((cls) => (
          <option value={cls.classId} key={cls.classId}>{cls.streamName}</option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.fName}</td>
              <td>{attendanceStatus[student.id] ? "Present" : "Absent"}</td> {/* Use individual status */}
              <td>
                <button onClick={() => toggleStatus(student.id)}>Mark Attendance</button>
              </td>
              
            </tr>
          ))}
          <tr>
            <td colSpan={2}>
              <button onClick={submitAttendance}>Submit Attendance</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
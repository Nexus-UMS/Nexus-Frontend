// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'API_ENDPOINT' with the actual endpoint of your API
        const response = await axios.get("http://localhost:5099/api/Student/Get_all_Student");
        setStudents(response.data);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAllow = async (student) => {
    try {
      // Replace 'ADD_TO_USER_ENDPOINT' with the actual endpoint to add a student to the user table
      const response = await axios.post("http://localhost:5099/api/Users/Adduser", {
          userId: student.student_id,
          userName: "",
          password: "",
          role: 'student',
        // Add any other required data
      });

      if (response.status === 200) {
        console.log(`Student ${student.name} added to the user table.`);
        // Update the state to remove the allowed student
        setStudents(prevStudents => prevStudents.filter(s => s.student_id !== student.student_id));
      } else {
        console.error(`Failed to add student ${student.name} to the user table.`);
      }
    } catch (error) {
      console.error('An error occurred while adding the student to the user table.', error);
    }
  };

  const handleDelete = (student) => {
    // Perform logic to delete the student (if needed)
    console.log(`Delete student: ${student.name}`);
    // Update the state to remove the deleted student
    // setStudents(prevStudents => prevStudents.filter(s => s.student_id !== student.student_id));
    setStudents(prevStudents => prevStudents);

  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Registered Students</h2>
        <ul>
          {students.map(student => (
            <li key={student.student_id}>
              {student.id}-{student.fName} - {student.eMail} - {student.number}{' '}
              <button onClick={() => handleAllow(student)}>Allow</button>
              <button onClick={() => handleDelete(student)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
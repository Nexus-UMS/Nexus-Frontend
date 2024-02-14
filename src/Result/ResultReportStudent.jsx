import axios from 'axios';
import React, { useState } from 'react';

export default function GetSemwiseResultStud() {
  const [studId, setStudId] = useState('');
  const [sem, setSem] = useState('');
  const [res, setRes] = useState([]);
  const [error, setError] = useState(null);
  let Stid = sessionStorage.getItem("uid");

  function GetResult() {
    console.log("Sem="+sem);
    axios
      .get(`http://localhost:5099/api/Result/GetSemAllres?id=${Stid}&sem=${sem}`)
      .then((response) => {
        console.log(response.data);
        setRes(response.data);
        setError(null); // Clear previous errors on successful response
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.'); // Set an error message
      });
  }

  return (
    <div className="main-content position-relative max-height-vh-100 h-100 border-radius-lg" >
      <table>
        <tbody>
          <tr>
            <td>Sem:</td>
            <td>
            <select onChange={(e) => { console.log(e.target.value); setSem(e.target.value); }}>

                <option value="sem1">Sem 1</option>
                <option value="sem2">Sem 2</option>
                <option value="sem3">Sem 3</option>
                <option value="sem4">Sem 4</option>
                <option value="sem5">Sem 5</option>
                <option value="sem6">Sem 6</option>
                <option value="sem7">Sem 7</option>
                <option value="sem8">Sem 8</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={GetResult}>Get</button>
            </td>
          </tr>
        </tbody>
      </table>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <table className="table table-striped">
        <tbody>
          {res.map((item) => (
            <React.Fragment key={item.examId}>
              <tr>
                <td>Exam Id:</td>
                <td>{item.examId}</td>
              </tr>
              <tr>
                <td>Student Id:</td>
                <td>{item.stu_id}</td>
              </tr>
              {item.subjectResults.map((result) => (
                <tr key={result.sub_Id}>
                  <td>{result.sub_Id}:</td>
                  <td>{result.marks}</td>
                </tr>
              ))}
              <tr>
                <td>Total Marks:</td>
                <td>{item.totalMarks}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

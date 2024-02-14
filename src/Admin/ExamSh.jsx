// import axios from 'axios'
// import React, {  useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function ExamSch() {
//     const [eid, setEid] = useState("")
//     const [ename, setEname] = useState("")
//     const [etime, setTime] = useState("")
//     const[cid,setCid]=useState("")
//     const [edate, setEdate] = useState("")
//     const [subid, setSubid] = useState("")

//     //const navigate=useNavigate()

//     // useEffect(() => {
//     //     if (sessionStorage.getItem("token") != null) {
//     //         console.log(sessionStorage.getItem("token"));
//     //         const header = {
//     //           Authorization: `Bearer ${sessionStorage.getItem("token")}`,
//     //         };
//     //     }
//     //     else{
//     //         navigate('/login')
//     //     }
//     // }, [])
    

//     function ExamSch(){
//         let values={
//             examId: eid,
//             examName: ename,
//             examTime: etime,
//             classId: cid,
//             date:edate ,
//             subId: subid
//         }
//         axios
//         .post("http://localhost:5099/api/Exam/AddExam",values)
//         .then((response)=>{
//             console.log(response.data);
//             alert("Exam Scheduled Successfully")
//         })
//     }

//   return (
//     <div class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
//         <h1>Exam Schedule</h1>
//         <table>
//             <tr>
//                 <td>
//                     <input type='text' placeholder='Exam Id' value={eid} onChange={(e)=>setEid(e.target.value)}/>
//                 </td>
//                 <td>
//                     <input type='text' placeholder='Exam Name' value={ename} onChange={(e)=>setEname(e.target.value)}/>
//                 </td>
//                 <td>
//                     <input type='text' placeholder='Exam Time' value={etime} onChange={(e)=>setTime(e.target.value)}/>
//                 </td>
//                 <td>
//                     <input type='text' placeholder='Class Id' value={cid} onChange={(e)=>setCid(e.target.value)}/>
//                 </td>
//                 <td>
//                     <input pattern="\d{4}-\d{2}-\d{2}" type='date' placeholder='Date' value={edate} onChange={(e)=>setEdate(e.target.value)}/>
//                 </td>
//                 <td>
//                     <input type='text' placeholder='Subject Id' value={subid} onChange={(e)=>setSubid(e.target.value)}/>
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                     <button onClick={ExamSch}>Schedule Exam</button>
//                 </td>
//             </tr>
//         </table>
//     </div>
//   )
// }

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExamSch.css'; // Import CSS file for styling

export default function ExamSch() {
    const [eid, setEid] = useState('');
    const [ename, setEname] = useState('');
    const [etime, setTime] = useState('');
    const [cid, setCid] = useState('');
    const [edate, setEdate] = useState('');
    const [subid, setSubid] = useState('');
    const [errors, setErrors] = useState({}); // State variable for errors
    const navigate = useNavigate();

    function handleValidation() {
        const errors = {};
        if (!eid) {
            errors.eid = 'Exam Id is required';
        }
        if (!ename) {
            errors.ename = 'Exam Name is required';
        }
        if (!etime) {
            errors.etime = 'Exam Time is required';
        }
        if (!cid) {
            errors.cid = 'Class Id is required';
        }
        if (!edate) {
            errors.edate = 'Date is required';
        }
        if (!subid) {
            errors.subid = 'Subject Id is required';
        }

        setErrors(errors);

        if (Object.keys(errors).length !== 0) {
            return;
        }

        const values = {
            examId: eid,
            examName: ename,
            examTime: etime,
            classId: cid,
            date: edate,
            subId: subid,
        };

        axios
            .post('http://localhost:5099/api/Exam/AddExam', values)
            .then((response) => {
                console.log(response.data);
                alert('Exam Scheduled Successfully');
            })
            .catch((error) => {
                console.error('Error scheduling exam:', error);
                alert('Error scheduling exam. Please try again.');
            });
    }

    return (
        <div className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
            <h1>Exam Schedule</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="eid">Exam Id</label>
                    <input
                        type="text"
                        id="eid"
                        placeholder="Exam Id"
                        value={eid}
                        onChange={(e) => setEid(e.target.value)}
                    />
                    {errors.eid && <span className="error">{errors.eid}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="ename">Exam Name</label>
                    <input
                        type="text"
                        id="ename"
                        placeholder="Exam Name"
                        value={ename}
                        onChange={(e) => setEname(e.target.value)}
                    />
                    {errors.ename && <span className="error">{errors.ename}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="etime">Exam Time</label>
                    <input
                        type="text"
                        id="etime"
                        placeholder="Exam Time"
                        value={etime}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    {errors.etime && <span className="error">{errors.etime}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="cid">Class Id</label>
                    <input
                        type="text"
                        id="cid"
                        placeholder="Class Id"
                        value={cid}
                        onChange={(e) => setCid(e.target.value)}
                    />
                    {errors.cid && <span className="error">{errors.cid}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="edate">Date</label>
                    <input
                        type="date"
                        id="edate"
                        placeholder="Date"
                        value={edate}
                        onChange={(e) => setEdate(e.target.value)}
                    />
                    {errors.edate && <span className="error">{errors.edate}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="subid">Subject Id</label>
                    <input
                        type="text"
                        id="subid"
                        placeholder="Subject Id"
                        value={subid}
                        onChange={(e) => setSubid(e.target.value)}
                    />
                    {errors.subid && <span className="error">{errors.subid}</span>}
                </div>
                <div className="form-group">
                    <button type="button" onClick={handleValidation}>
                        Schedule Exam
                    </button>
                </div>
            </form>
        </div>
    );
}

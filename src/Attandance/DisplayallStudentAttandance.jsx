
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

export default function DisplayStudentAttendace() {
    
        const [sstartdate, setSstartdate] = useState("")
        const [senddate, setSenddate] = useState(0)
        const[dis,setDis]=useState([])
        // const navigate=useNavigate()

        function DisplayAllStuAtt(){
            axios
            .get("http://localhost:5099/api/DisplayAttendance/AllStudentAttendence"+sstartdate+"/"+senddate)
            .then((response)=>{
            console.log(response.data);
            setDis(response.data)
        })
        .catch((e)=>{
            console.log(e)
        })
           
       }
            
        
    
  return (
    <div>DisplayStuAttbysdNed
    <table>
        <tr>
        <td>
            <input type='text' placeholder='Start Date' value={sstartdate} onChange={(e)=>setSstartdate(e.target.value)}/>
            <input type='text' placeholder='End Date' value={senddate} onChange={(e)=>setSenddate(e.target.value)}/>
        </td>
        </tr>
        <tr>
            <td>
                <button onClick={DisplayAllStuAtt}>Click</button>
            </td>
        </tr>
    </table>
    <table className='table table-stripped'>
            <thead>
                <tr>
                 
                    <th>studentId</th>
                    <th>presentDays</th>
                    <th>absentDays</th>
                    <th>totalWorking</th>
                  

                
                </tr>
            </thead>
            <tbody>
               
                 {
                    dis.map((item)=>{
                        return(
                            <tr key={item.studentId}>
                                <td>{item.studentId}</td>
                                <td>{item.presentDays}</td>
                                <td>{item.absentDays}</td>
                                <td>{item.totalWorking}</td>
                                

                            </tr>
                        )
                    })
                 }
            </tbody>
        </table>
    </div>
  )
  }
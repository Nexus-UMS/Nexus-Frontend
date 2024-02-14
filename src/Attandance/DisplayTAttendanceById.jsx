
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

export default function DisplayTeacherAttendaceById() {
        const[tid,setTid]=useState("")
        const [tstartdate, setTstartdate] = useState("")
        const [tenddate, setTenddate] = useState(0)
        const[dis,setDis]=useState([])
        // const navigate=useNavigate()

        function DisplayAllteaById(){
            axios
            .get("http://localhost:5099/api/DisplayAttendance/TAttendance"+tid+"/"+tstartdate+"/"+tenddate)
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
             <input type='text' placeholder='Teacher Id' value={tid} onChange={(e)=>setTid(e.target.value)}/>  
            <input type='text' placeholder='Start Date' value={tstartdate} onChange={(e)=>setTstartdate(e.target.value)}/>
            <input type='text' placeholder='End Date' value={tenddate} onChange={(e)=>setTenddate(e.target.value)}/>
        </td>
        </tr>
        <tr>
            <td>
                <button onClick={DisplayAllteaById}>Click</button>
            </td>
        </tr>
    </table>
    <table className='table table-stripped'>
            <thead>
                <tr>
                 
                    {/* <th>teacherId</th> */}
                    <th>presentDays</th>
                    <th>absentDays</th>
                    <th>totalWorking</th>
                  

                
                </tr>
            </thead>
            <tbody>
               
                 {
                    dis.map((item)=>{
                        return(
                            <tr key={item.teacherId}>
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
import React from 'react'
import { useRef, useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import './pagestyles.css'
export default function LoginPageNew() {

  
        const userRef=useRef()
          const passRef=useRef()
          const navigate=useNavigate()

          const [user, setUser] = useState({ username: "", password: "" });
          const [err, setErr] = useState("");
         const Validate = (e) => {
  // e.preventDefault();
  axios
    .post("http://localhost:5099/api/Users/Log_in", user)
    .then((response) => {
      console.log(response.data);
      let validUser = response.data;
      if (validUser != null) {
        //set username in sessionstorage
        sessionStorage.setItem("uid", validUser.userId);
        sessionStorage.setItem("token", validUser.token);
        if (validUser.role === "Admin") {
          navigate("/Admin-Dashboard");
        } else if (validUser.role === "Student") {
          navigate("/Student-Dashboard");
        } else if (validUser.role === "Teacher") {
          navigate("/Teacher-DashBoard");
        }
        else{
          setErr("invalid credentials")
        }
      }
       else {
        setErr("enter valid credentials")
      }
    })
    .catch((err) => {
      console.log(err)
      
    });
};
  return (
    <div className=' bg-dark text-light p-5 custom-bg'>
    <div className='container col-lg-5 ml-auto'>
        <form action="" method="post" class="form-box">
                    <h3 class="h4 text-black mb-4">Sign In </h3>
                    <h6>{err}</h6>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="User Name" onChange={(e) =>
                  setUser((prevstate) => ({
                    ...prevstate,
                    username: e.target.value,
                  }))
                }/>
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="Password"onChange={(e) =>
                  setUser((prevstate) => ({
                    ...prevstate,
                    password: e.target.value,
                  }))
                } />
                    </div>
                    <div class="form-group">
                      <input type="button" class="btn btn-primary btn-pill" value="Sign up" onClick={Validate}/>
                    </div>
                    <Link to="/studregister">
                <div className="text ">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
               </Link>
                  </form> 
    </div>
    </div>
  )

}

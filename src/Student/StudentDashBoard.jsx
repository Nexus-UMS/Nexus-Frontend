import React from 'react'
import '../dashBoardCss/material-dashboard.css'
import '../dashBoardCss/material-dashboard.css.map'
import '../dashBoardCss/material-dashboard.min.css'
import { Link, Outlet } from 'react-router-dom'


export default function DashBoard() {
  return (
    <div>
      <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
        <div class="sidenav-header">
          <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
            <span class="ms-1 font-weight-bold text-white">STUDENT DASHBOARD</span>
          </a>
        </div>
        <hr class="horizontal light mt-0 mb-2"/>
        <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white active bg-gradient-primary" >
                <Link to="./">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Profile</span>
                </Link>
              </a>
            </li>

            
          <div class="nav-item">
              <a class="nav-link text-white collapsed" href="../pages/billing.html" data-bs-toggle="collapse" data-bs-target="#billing-submenu" aria-expanded="false" aria-controls="billing-submenu">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">school</i>
                </div>
                <span class="nav-link-text ms-1">Exam</span>
              </a>
              <ul class="collapse" id="billing-submenu">
                <li class="nav-item">
                  <Link to="exam-result">
                  <a class="nav-link text-white">All Result</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="exam-report">
                  <a class="nav-link text-white">Report</a>
                  </Link>
                </li>
              </ul>
          </div>
          <div class="nav-item">
              <a class="nav-link text-white collapsed" href="../pages/billing.html" data-bs-toggle="collapse" data-bs-target="#user-submenu" aria-expanded="false" aria-controls="user-submenu">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">book</i>
                </div>
                <span class="nav-link-text ms-1">Attendance</span>
              </a>
              
          </div>
           
          
            <li class="nav-item">
              <a class="nav-link text-white " href="../pages/notifications.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">notifications</i>
                </div>
                <span class="nav-link-text ms-1">Notifications</span>
              </a>
            </li>
            <li class="nav-item mt-3">
              <h6 class=" ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
            </li>
            
            <li class="nav-item">
              <a class="nav-link text-white " href="../pages/sign-in.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">login</i>
                </div>
                <span class="nav-link-text ms-1">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="sidenav-footer position-absolute w-100 bottom-0 ">
         
        </div>
      </aside>
      <Outlet/>
      {/*body section  */}
      <main >

    
        
      
    
  </main>
      {/* end of body section  */}

      
    </div>
  )
}

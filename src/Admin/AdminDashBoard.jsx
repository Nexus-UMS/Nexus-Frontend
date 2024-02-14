import React from 'react'
// import '../dashBoardCss/material-dashboard.css'
// import '../dashBoardCss/material-dashboard.css.map'
// import '../dashBoardCss/material-dashboard.min.css'
import './admin.css'
import Profile from './Profile'
import { Link, Outlet } from 'react-router-dom'
export default function DashBoard() {
  return (
    <div>
      <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
        <div class="sidenav-header">
          <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
            <span class="ms-1 font-weight-bold text-white">Admin Dashboard</span>
          </a>
        </div>
        <hr class="horizontal light mt-0 mb-2"/>
        <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white active bg-gradient-primary">
                  <i class="material-icons opacity-10">dashboard</i>
                  <Link to="/Admin-Dashboard/admin-profile">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                </div>
                <span class="nav-link-text ms-1">
                  Profile
                
                </span>
                  </Link> 
              </a>
            </li>

            <div class="nav-item">
              <a class="nav-link text-white collapsed" href="../pages/billing.html" data-bs-toggle="collapse" data-bs-target="#Teacher-submenu" aria-expanded="false" aria-controls="Teacher-submenu">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">person</i>
                </div>
                <span class=" ms-1">Teacher</span>
              </a>
              <ul class="collapse" id="Teacher-submenu">
                <li class="nav-item">
                  <Link to="/Admin-Dashboard/teacher-registration">
                  <a class="nav-link text-white" >Registration</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Attandance</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Attandance Report</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Get all Teacher</a>
                </li>
              </ul>
          </div>
          <div class="nav-item">
              <a class="nav-link text-white collapsed" href="../pages/billing.html" data-bs-toggle="collapse" data-bs-target="#billing-submenu" aria-expanded="false" aria-controls="billing-submenu">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">school</i>
                </div>
                <span class="nav-link-text ms-1">Student</span>
              </a>
              <ul class="collapse" id="billing-submenu">
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Registration</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Attandance</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Get all Student</a>
                </li>
                
              </ul>
          </div>
          <div class="nav-item">
              <a class="nav-link text-white collapsed" href="../pages/billing.html" data-bs-toggle="collapse" data-bs-target="#user-submenu" aria-expanded="false" aria-controls="user-submenu">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">people</i>
                </div>
                <span class="nav-link-text ms-1">User</span>
              </a>
              <ul class="collapse" id="user-submenu">
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Registration</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Get all user</a>
                </li>    
              </ul>
          </div>

          <div class="nav-item">
              <a class="nav-link text-white collapsed" href="../pages/billing.html" data-bs-toggle="collapse" data-bs-target="#class-submenu" aria-expanded="false" aria-controls="class-submenu">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">class</i>
                </div>
                <span class="nav-link-text ms-1">Class</span>
              </a>
              <ul class="collapse" id="class-submenu">
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Assign Teacher</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Classes</a>
                </li>    
              </ul>
          </div> 

           <div class="nav-item">
              <a class="nav-link text-white collapsed" href="../pages/billing.html" data-bs-toggle="collapse" data-bs-target="#exam-submenu" aria-expanded="false" aria-controls="exam-submenu">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">import_contacts</i>
                </div>
                <span class="nav-link-text ms-1">Exam</span>
              </a>
              <ul class="collapse" id="exam-submenu">
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    <Link to="/Admin-Dashboard/schedule-exam"> 
                    Schedule
                    </Link>
                    </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Exams</a>
                </li>    
              </ul>
          </div>  
           
          
            <li class="nav-item">
              <a class="nav-link text-white " >
              <i class="material-icons opacity-10">notifications</i>
              <Link to="/Admin-Dashboard/schedule-exam"> 

                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  
                </div>
                <span class="nav-link-text ms-1">

                    Notifications
                    </span>
                    </Link>
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
        {/* <div class="sidenav-footer position-absolute w-100 bottom-0 ">
          <div class="mx-3">
            <a class="btn btn-outline-primary mt-4 w-100"  type="button">Dummybutton</a>
            <a class="btn bg-gradient-primary w-100" href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree" type="button">Dummybutton</a>
          </div>
        </div> */}
      </aside>
      {/*body section  */}
      {/* <Profile/> */}
      <Outlet/>
      {/* end of body section  */}

      
    </div>

  )
}

import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function DashBoard() {
    const navigate = useNavigate();

    return (
        <div>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <a className="navbar-brand m-0" href="https://demos.creative-tim.com/material-dashboard/pages/dashboard" target="_blank">
                        <span className="ms-1 font-weight-bold text-white">TEACHER DASHBOARD</span>
                    </a>
                </div>
                <hr className="horizontal light mt-0 mb-2" />
                <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/teacher-dashboard/profile" className="nav-link text-white active bg-gradient-primary">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Profile</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white collapsed" href="#exam-submenu" data-bs-toggle="collapse" aria-expanded="false" aria-controls="exam-submenu">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">school</i>
                                </div>
                                <span className="nav-link-text ms-1">Exam</span>
                            </a>
                            <ul className="collapse" id="exam-submenu">
                                <li className="nav-item">
                                    <Link to="/teacher-dashboard/add-result" className="nav-link text-white">Add Result</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/teacher-dashboard/view-result" className="nav-link text-white">View Result</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white collapsed" href="#registration-submenu" data-bs-toggle="collapse" aria-expanded="false" aria-controls="registration-submenu">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">book</i>
                                </div>
                                <span className="nav-link-text ms-1">Registration</span>
                            </a>
                            <ul className="collapse" id="registration-submenu">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Register to NEXUSLIVE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">My Details</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Edit Profile</a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link to="/teacher-dashboard/notifications" className="nav-link text-white">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">notifications</i>
                                </div>
                                <span className="nav-link-text ms-1">Notifications</span>
                            </Link>
                        </li>
                        <li className="nav-item mt-3">
                            <h6 className="ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white">
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">login</i>
                                </div>
                                <span className="nav-link-text ms-1" onClick={() => {
                                    sessionStorage.setItem("token", "null")
                                    navigate("/login");
                                }}>Sign Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="sidenav-footer position-absolute w-100 bottom-0 ">

                </div>
            </aside>
            <Outlet />
        </div>
    )
}

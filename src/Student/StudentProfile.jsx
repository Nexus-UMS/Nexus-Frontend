import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function StudentProfile() {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();
    let userId = sessionStorage.getItem("uid");

    useEffect(() => {
        if (sessionStorage.getItem("token") != null) {
            const headers = {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            };
            axios
                .get("http://localhost:5099/api/Student/GetStudentById/" + userId, { headers })
                .then((res) => {
                    setStudents(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            navigate("/login");
        }
    }, [navigate, userId]);

    return (
        <div className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Login</a></li>
                    <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Student</li>
                </ol>
                <h6 className="font-weight-bolder mb-0">Student Dashboard</h6>
            </nav>

            <div className="px-4 py-5 my-2 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis">Welcome {students.fName}</h1>
                <div className="col-lg-6 mx-auto">
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <tbody>
                                    <tr>
                                        <td scope="row">Name</td>
                                        <td>{students.fName} {students.lName}</td>
                                    </tr>
                                    <tr>
                                        <td>Semester</td>
                                        <td>{students.semName}</td>
                                    </tr>
                                    <tr>
                                        <td>Branch</td>
                                        <td>{students.streamName}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{students.eMail}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>{students.number}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                      
                    </div>
                </div>
                <div className="mt-3">
                            <Link to="student-profile/edit-profile" className="btn btn-primary">Edit Details</Link>
                        </div>
            </div>
            
            <Outlet />
        </div>
    );
}

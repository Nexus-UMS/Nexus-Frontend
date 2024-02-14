import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './EditProfile.css';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();
    let userId = sessionStorage.getItem("uid");

    useEffect(() => {
        if (sessionStorage.getItem("token") != null) {
            console.log(sessionStorage.getItem("token"));
            const headers = {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            };
            axios
                .get("http://localhost:5099/api/Student/GetStudentById/" + userId, { headers })
                .then((res) => {
                    setStudents(res.data);
                    console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            navigate("/login");
        }
    }, []);

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        const re = /^\+91[0-9]{10}$/;
        return re.test(phone);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
        if (!validateEmail(e.target.value)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value);
        if (!validatePhone(e.target.value)) {
            setPhoneError("Please enter a valid Indian phone number starting with +91.");
        } else {
            setPhoneError("");
        }
    }

    function Edit() {
        if (validateEmail(email) && validatePhone(phone)) {
            let std = {
                dob: students.dob,
                fName: students.fName,
                id: students.id,
                lName: students.lName,
                semName: students.semName,
                streamName: students.streamName,
                gender: students.gender,
                eMail: email,
                number: phone,
            };
            console.log(std);

            axios
                .put("http://localhost:5099/api/Student/Edit_Student", std)
                .then((res) => {
                    console.log(res.data);
                    alert("Student Details Updated");
                })
                .catch((error) => {
                    console.error("Error editing profile:", error);
                });
        } else {
            alert("Please correct the errors in the form.");
        }
    }

    return (
        <div className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
            <div className="edit-profile-form">
                <h1>Edit Profile</h1>
                <form>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
                        {emailError && <small className="text-danger">{emailError}</small>}
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input type="tel" className="form-control" value={phone} onChange={handlePhoneChange} />
                        {phoneError && <small className="text-danger">{phoneError}</small>}
                    </div>
                    <button type="button" className="btn btn-primary" onClick={Edit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

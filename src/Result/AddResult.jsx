import axios from 'axios';
import React, { useState } from 'react';
import './AddResult.css'; // Import the CSS file

export default function AddResult() {
    const [resultId, setResultId] = useState("");
    const [examId, setExamId] = useState("");
    const [studentId, setStudentId] = useState("");
    const [subjectId, setSubjectId] = useState("");
    const [mark, setMark] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};

        if (!resultId.trim()) {
            errors.resultId = "Result Id is required";
        }
        if (!examId.trim()) {
            errors.examId = "Exam Id is required";
        }
        if (!studentId.trim()) {
            errors.studentId = "Student Id is required";
        }
        if (!subjectId.trim()) {
            errors.subjectId = "Subject Id is required";
        }
        if (!mark.trim()) {
            errors.mark = "Mark is required";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const marks = {
                resultId: resultId,
                examId: examId,
                studentId: studentId,
                subjectId: subjectId,
                mark: mark,
            };

            axios
                .post("http://localhost:5099/api/Result/Add_Result", marks)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className="my-5 main-content position-relative max-height-vh-100 h-100 border-radius-lg">
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="resultId" className="col-sm-2 col-form-label">Result Id:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="resultId" value={resultId} onChange={(e) => setResultId(e.target.value)} />
                        {errors.resultId && <div className="text-danger">{errors.resultId}</div>}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="examId" className="col-sm-2 col-form-label">Exam Id:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="examId" value={examId} onChange={(e) => setExamId(e.target.value)} />
                        {errors.examId && <div className="text-danger">{errors.examId}</div>}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="studentId" className="col-sm-2 col-form-label">Student Id:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="studentId" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                        {errors.studentId && <div className="text-danger">{errors.studentId}</div>}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="subjectId" className="col-sm-2 col-form-label">Subject Id:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="subjectId" value={subjectId} onChange={(e) => setSubjectId(e.target.value)} />
                        {errors.subjectId && <div className="text-danger">{errors.subjectId}</div>}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="mark" className="col-sm-2 col-form-label">Mark:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="mark" value={mark} onChange={(e) => setMark(e.target.value)} />
                        {errors.mark && <div className="text-danger">{errors.mark}</div>}
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

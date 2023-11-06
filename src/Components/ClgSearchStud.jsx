import axios from 'axios'
import React, { useState } from 'react'
import ClgNavBar from './ClgNavBar'

const ClgSearchStud = () => {
    const [inputField, setInputField] = useState(
        { clgName: sessionStorage.getItem("clgname"), studAdmNo: "" }
    )

    const [outputField, setOutputField] = useState(
        [{ clgName: "", studName: "", studAdmNo: "", studCurrSem: "", studDept: "", studPhNo: "", studEmailId: "" }]
    )

    const apiLink = "http://localhost:3001/clgsearchstud"

    const inputHandler = (event) => {
        setInputField({ ...inputField, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        axios.post(apiLink, inputField).then(
            (Response) => {
                if (Response.data.status == "success") {
                    setOutputField(Response.data.data)
                    console.log(Response.data.data)
                    setInputField({studAdmNo:""})
                } else {
                    alert(Response.data.status)
                    setInputField({studAdmNo:""})
                    setOutputField( [{ studName: "", studAdmNo: "", studCurrSem: "", studDept: "", studPhNo: "", studEmailId: "" }])
                }
            }
        )
    }

    return (
        <div>
            <ClgNavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>College Search Student</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Admission No.</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="studAdmNo" value={inputField.studAdmNo} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-warning">Search</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">College Name</th>
                                            <th scope="col">Student Name</th>
                                            <th scope="col">Admission No.</th>
                                            <th scope="col">Current Semester</th>
                                            <th scope="col">Department</th>
                                            <th scope="col">Phone No.</th>
                                            <th scope="col">Email ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                         <tr>
                                                <th scope="row">{outputField.clgName}</th>
                                                <td>{outputField.studName}</td>
                                                <td>{outputField.studAdmNo}</td>
                                                <td>{outputField.studCurrSem}</td>
                                                <td>{outputField.studDept}</td>
                                                <td>{outputField.studPhNo}</td>
                                                <td>{outputField.studEmailId}</td>
                                            </tr>
                                           

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClgSearchStud
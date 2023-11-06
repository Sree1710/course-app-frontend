import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavBar'

const AdminViewStudent = () => {
    const [inputField, setInputField] = useState(
        { clgName: "" }
    )

    const [outputField, setOutputField] = useState(
        [{ studName: "", studAdmNo: "", studCurrSem: "", studDept: "", studPhNo: "", studEmailId: "" }]
    )

    const [clgData, setClgData] = useState(
        []
    )

    const [isLoading, setIsLoading] = useState(true)
    const getData = () => {
        axios.get(apiLink2).then(
            (Response) => {
                setClgData(Response.data)
                setInputField(Response.data[0])
            }
        )
    }

    const apiLink = "http://localhost:3001/admviewstud"
    const apiLink2 = "http://localhost:3001/admviewclg"

    const inputHandler = (event) => {
        setInputField({ ...inputField, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        axios.post(apiLink, inputField).then(
            (Response) => {
                setOutputField(Response.data)
                console.log(Response.data)
                setIsLoading(false)
                setInputField({ clgName: "" })
            }
        )
    }

    useEffect(() => { getData() }, [])
    return (
        <div>
            <AdminNavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>Admin View Student</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">College Name</label>
                                <select onChange={inputHandler} name="clgName" id="" className="form-control" value={inputField.clgName}>
                                    <option value="">SELECT</option>
                                    {clgData.map(
                                        (value, index) => {
                                            return <option value={value.clgName}>{value.clgName}</option>
                                        }
                                    )}
                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-warning">Search</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        </div>
                        {isLoading ? <p>Select College Name !!!</p> : <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Student Name</th>
                                            <th scope="col">Admission No.</th>
                                            <th scope="col">Current Semester</th>
                                            <th scope="col">Department</th>
                                            <th scope="col">Phone No.</th>
                                            <th scope="col">Email ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {outputField.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.studName}</th>
                                                    <td>{value.studAdmNo}</td>
                                                    <td>{value.studCurrSem}</td>
                                                    <td>{value.studDept}</td>
                                                    <td>{value.studPhNo}</td>
                                                    <td>{value.studEmailId}</td>
                                                </tr>
                                            }
                                        )}

                                    </tbody>
                                </table>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminViewStudent
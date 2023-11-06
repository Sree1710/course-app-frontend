import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StudProfile = () => {
    const [studData, setStudData] = useState(
        []
    )

    const apiLink = "http://localhost:3001/studviewprofile"

    const getData = () => {
        let data = { "_id": sessionStorage.getItem("userid") }
        axios.post(apiLink, data).then(
            (Response) => {
                setStudData(Response.data)
            }
        )
    }

    useEffect(() => { getData() }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>Student Profile</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">College Name</th>
                                            <th scope="col">Student ID</th>
                                            <th scope="col">Student Name</th>
                                            <th scope="col">Admission No.</th>
                                            <th scope="col">Current Semester</th>
                                            <th scope="col">Department</th>
                                            <th scope="col">Phone No.</th>
                                            <th scope="col">Email ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {studData.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.clgName}</th>
                                                    <td>{value._id}</td>
                                                    <td>{value.studName}</td>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudProfile
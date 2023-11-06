import axios from 'axios'
import React, { useState } from 'react'

const ClgViewStud = () => {
    const [studData,setStudData]=useState(
        []
    )

    const apiLink="http://localhost:3001/clgviewstud"

    const getData=()=>{
        let data={"clgName":sessionStorage.getItem("clgname")}
        axios.post(apiLink,data).then(
          (Response)=>{
            setStudData(Response.data)
          }
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>College View Student</h1>
                            </div>
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
                                        {studData.map(
                                            (value,index)=>{
                                                return <tr>
                                                <th scope="row">{value.clgName}</th>
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

export default ClgViewStud
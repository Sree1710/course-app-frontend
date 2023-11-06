import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavBar'

const AdminViewClg = () => {
    const [clgData,setClgData]=useState(
        []
    )

    const apiLink="http://localhost:3001/admviewclg"

    const getData=()=>{
        axios.get(apiLink).then(
          (Response)=>{
            setClgData(Response.data)
          }
        )
    }

    useEffect(()=>{getData()},[])
    return (
        <div>
            <AdminNavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View Colleges</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">College ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Phone No.</th>
                                            <th scope="col">HOD Name</th>
                                            <th scope="col">HOD Phone No.</th>
                                            <th scope="col">Faculty In-Charge</th>
                                            <th scope="col">FIC Phone No.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {clgData.map(
                                            (value,index) => {
                                                return <tr>
                                                    <th scope="row">{value._id}</th>
                                                    <td>{value.clgName}</td>
                                                    <td>{value.clgAddress}</td>
                                                    <td>{value.clgPhNo}</td>
                                                    <td>{value.clgHODName}</td>
                                                    <td>{value.clgHODPhNo}</td>
                                                    <td>{value.clgFacInCharge}</td>
                                                    <td>{value.clgFacPhNo}</td>
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

export default AdminViewClg
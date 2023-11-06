import axios from 'axios'
import React, { useState } from 'react'
import AdminNavBar from './AdminNavBar'

const AdminAddClg = () => {
    const [inputField,setInputField]=useState(
        {clgName:"",clgAddress:"",clgPhNo:"",clgHODName:"",clgHODPhNo:"",clgFacInCharge:"",clgFacPhNo:"",username:"",password:"",confirmpass:""}
    )

    const apiLink="http://localhost:3001/admaddclg"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        axios.post(apiLink,inputField).then(
            (Response)=>{
               if (inputField.password==inputField.confirmpass) {
                if (Response.data.status=="success") {
                    alert("College Added Successfully !!!")
                    setInputField({clgName:"",clgAddress:"",clgPhNo:"",clgHODName:"",clgHODPhNo:"",clgFacInCharge:"",clgFacPhNo:"",username:"",password:""})
                 } else {
                    alert("Something Went Wrong !!!")
                 }
               } else {
                 alert("Password And Confirm Password Does Not Match !!!")
               }
            }
        )
    }

  return (
    <div>
        <AdminNavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Admin Add College</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">College Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="clgName" value={inputField.clgName} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea onChange={inputHandler} name="clgAddress" id="" cols="30" rows="10" className="form-control" value={inputField.clgAddress}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Phone Number</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="clgPhNo" value={inputField.clgPhNo} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">HOD Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="clgHODName" value={inputField.clgHODName} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">HOD Phone Number</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="clgHODPhNo" value={inputField.clgHODPhNo} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Faculty In-Charge</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="clgFacInCharge" value={inputField.clgFacInCharge} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Faculty In-Charge Phone Number</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="clgFacPhNo" value={inputField.clgFacPhNo} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Username</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="username" value={inputField.username} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Password</label>
                            <input onChange={inputHandler} type="password" name="password" id="" className="form-control" value={inputField.password} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input onChange={inputHandler} type="password" name="confirmpass" id="" className="form-control" value={inputField.confirmpass} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminAddClg
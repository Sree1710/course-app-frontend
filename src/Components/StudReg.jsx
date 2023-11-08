import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StudRegNav from './StudRegNav'
import { useNavigate } from 'react-router-dom'

const StudReg = () => {
    const [inputField,setInputField]=useState(
        {clgName:"",studName:"",studAdmNo:"",studCurrSem:"",studDept:"",studPhNo:"",studEmailId:"",studPass:"",confirmPass:""}
    )

    const [outputField,setOutputField]=useState(
        [{clgName:""}]
    )

    const apiLink="http://localhost:3001/studreg"
    const apiLink2="http://localhost:3001/admviewclg"
    const navigate=useNavigate()

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const getData=()=>{
        axios.get(apiLink2).then(
            (Response)=>{
                setOutputField(Response.data)
                setInputField(Response.data[0])
            }
        )
    }

    const readValue=()=>{
        axios.post(apiLink,inputField).then(
            (Response)=>{
               if (inputField.studPass==inputField.confirmPass) {
                if (Response.data.status=="success") {
                    alert("Student Registered Successfully!!!")
                    setInputField({clgName:"",studName:"",studAdmNo:"",studCurrSem:"",studDept:"",studPhNo:"",studEmailId:"",studPass:"",confirmPass:""})
                    navigate("/studlogin")
                } else {
                    alert("Something Went Wrong !!!")
                }
               } else {
                 alert("Password And Confirm Password Does Not Match !!!")
               }
            }
        )
    }

    useEffect(()=>{getData()},[])
  return (
    <div>
        <StudRegNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Student Registartion</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">College Name</label>
                            <select onChange={inputHandler} name="clgName" id="" className="form-control" value={inputField.clgName}>
                                <option value="">SELECT</option>
                                {outputField.map(
                                    (value,index)=>{
                                        return <option value={value._id}>{value.clgName}</option>
                                    }
                                )}
                            </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Student Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="studName" value={inputField.studName} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Admission No.</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="studAdmNo" value={inputField.studAdmNo} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">Current Semester</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="studCurrSem" value={inputField.studCurrSem} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Department</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="studDept" value={inputField.studDept} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Phone No.</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="studPhNo" value={inputField.studPhNo} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Email ID</label>
                            <input onChange={inputHandler} type="email" name="studEmailId" id="" className="form-control" value={inputField.studEmailId} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input onChange={inputHandler} type="password" name="studPass" id="" className="form-control" value={inputField.studPass} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input onChange={inputHandler} type="password" className="form-control" name="confirmPass" value={inputField.confirmPass} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    </div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <a href="/studlogin">Already Registered? Go To Student Login...!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudReg
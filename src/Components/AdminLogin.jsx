import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppNavBar from './AppNavBar'

const AdminLogin = () => {
    const [inputField,setInputField]=useState(
        {username:"",password:""}
    )

    const navigate=useNavigate()
    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        if (inputField.username=="admin" && inputField.password=="admin") {
            navigate("/admaddclg")
        } else {
            alert("Invalid Username Or Password !!!")
        }
    }
  return (
    <div>
        <AppNavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Admin Login</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Username</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="username" value={inputField.username} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">Password</label>
                            <input onChange={inputHandler} type="password" name="password" id="" className="form-control" value={inputField.password} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin
import React from 'react'

const StudNavBar = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Course App</a>
                </div>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/studlogin">Sign Out</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default StudNavBar
import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css"




export const NavBar = (props) => {
    return (
        <div className="navbar">
            <div >
                <Link className="navbar__link" to={`/userprofile/${localStorage.getItem("space_user")}`}><button className="navButton"><span className="text">Profile</span></button></Link>
            </div>
            <div >
                <Link className="navbar__link" to="/publicspaces"><button className="navButton"><span className="text">Spaces</span></button></Link>
            </div>
            <div >
                <Link className="navbar__link" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("space_user")
                    }
                }>
                    <button className="navButton"><span className="text">Logout</span></button>
                </Link>
            </div>
        </div>
    )
}
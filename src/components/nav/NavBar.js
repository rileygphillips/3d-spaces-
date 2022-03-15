import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to={`/userprofile/${localStorage.getItem("space_user")}`}>Profile</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/publicspaces">Spaces</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("space_user")
                    }
                }>
                    Logout
                </Link>
            </li>
        </ul>
    )
}
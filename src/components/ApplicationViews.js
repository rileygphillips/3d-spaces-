import React from "react"
import { Route } from "react-router-dom"
import { SpaceList } from "../SpaceList"
import { UserProfile } from "./users/UserProfile"
import "../ApplicationViews.css"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/userprofile/:userId(\d+)">
                <h2 className="sectionHeader">User's Profile</h2>
                <div className="spaceSection">
                <UserProfile />
                </div>
            </Route>

            <Route path="/publicspaces">
                <h2 className="sectionHeader">Public Spaces</h2>
                <div className="spaceSection">
                <SpaceList />
                </div>
            </Route>

            
        </>
    )
}
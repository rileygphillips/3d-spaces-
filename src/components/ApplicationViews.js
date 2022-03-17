import React from "react"
import { Route } from "react-router-dom"
import { SpaceList } from "../SpaceList"
import { UserProfile } from "./users/UserProfile"
import "../ApplicationViews.css"
import { Link } from "react-router-dom"
import { CreateSpace } from "./CreateSpace"
import { EditSpace } from "./EditSpace"
import { SpaceDetails } from "./SpaceDetails"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/userprofile/:userId(\d+)">
                <div> <h2 className="sectionHeader">Your Profile</h2> </div>
                <div className="userInfo">
                    
                    </div>
                <Link to= "/createspace"><div className="createButton"> <button>Create New Space</button> </div></Link>
                <div className="spaceSection">
                <UserProfile />
                </div>
            </Route>

            <Route exact path= "/createspace">
                <CreateSpace />
            </Route>

            <Route exact path= "/editspace/:spaceId(\d+)">
                
                <EditSpace />
            </Route>

            <Route exact path= "/spacedetails/:spaceId(\d+)">
            <div> <h2 className="sectionHeader">Space Details</h2> </div>
                <SpaceDetails />
            </Route>

            <Route exact path="/publicspaces">
                <h2 className="sectionHeader">Public Spaces</h2>
                <div className="spaceSection">
                <SpaceList />
                </div>
            </Route>

            
        </>
    )
}
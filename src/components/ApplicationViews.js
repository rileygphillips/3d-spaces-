import React from "react"
import { Route } from "react-router-dom"
import { SpaceList } from "../SpaceList"
import { UserList } from "./users/UserList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/publicspaces">
                <SpaceList />
            </Route>

            <Route path="/userprofile  ">
                <UserList />
            </Route>
        </>
    )
}
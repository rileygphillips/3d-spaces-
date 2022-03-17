import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./UserProfile.css"
//Display logged in user//
//Display logged in user info (location & numberOfSpaces)
//Display logged in user's created Spaces//
//Create New Space Button that LINKS to form//

export const UserProfile = () => {
    const [user, changeUser] = useState({spaces:[]});
   
    const history = useHistory()

    const getSpaces = () => {
        fetch(`http://localhost:8090/users/${localStorage.getItem("space_user")}?_embed=spaces`)
        .then((res) => res.json())
        .then((usersFromAPI) => {
        changeUser(usersFromAPI);
        });
    }

    useEffect(() => {
    getSpaces()
    }, []);
const deleteSpace = (id) => {
    return fetch(`http://localhost:8090/spaces/${id}`, {
        method: "DELETE"
    }).then(getSpaces)
}
    return (
    <>
        {user.spaces.map((spaceObject) => {
        return <div  className="spaceBoxes" key={`user--${spaceObject.id}`}>
        <div> <img src={spaceObject.coverPhotoLink} /> </div>
        <div> <h3>{spaceObject.locationName}</h3> </div> 
        <button onClick={ () => history.push(`/editspace/${spaceObject.id}`)}><div>edit</div></button>
        <button onClick={ () => {deleteSpace(spaceObject.id)} }> <div>delete</div> </button>
        </div>
        })}
    </>
    );
};

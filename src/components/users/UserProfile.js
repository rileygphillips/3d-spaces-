import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./UserProfile.css"
//Display logged in user//
//Display logged in user info (location & numberOfSpaces)
//Display logged in user's created Spaces//
//Create New Space Button that LINKS to form//

export const UserProfile = () => {
    const [user, changeUser] = useState({spaces:[]});
   
    const history = useHistory()
    const {userId} = useParams()

    const getSpaces = () => {
        fetch(`http://localhost:8090/users/${userId}?_embed=spaces`)
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
        <div> <h2 className="sectionHeader">Your Profile</h2> </div>
                <div className="userInfo">
                    
                    </div>
                {localStorage.getItem("space_user") === userId ? <Link to= "/createspace"><div className="createButton"> <button>Create New Space</button> </div></Link> :null}
                <div className="spaceSection"></div>
        {user.spaces.map((spaceObject) => {
          return  <div  className="spaceBoxes" key={`user--${spaceObject.id}`}>
             <Link to={`/spacedetails/${spaceObject.id}`}>
        <div> <img src={spaceObject.coverPhotoLink} /> </div>
        <div> <h3>{spaceObject.locationName}</h3> </div> </Link>
        {localStorage.getItem("space_user") === userId ? <button onClick={ () => history.push(`/editspace/${spaceObject.id}`)}><div>edit</div></button> :null}
        {localStorage.getItem("space_user") === userId ? <button onClick={ () => {deleteSpace(spaceObject.id)} }> <div>delete</div> </button> :null}
        </div> 
        })}
    </>
    );
};
